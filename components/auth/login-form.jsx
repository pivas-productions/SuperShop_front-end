"use client";
import { useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";

import CardWrapper from "./card-wrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";
import { Input } from "../ui/input";
import { PasswordInput } from "./password-input";
import { Button } from "../ui/button";
import NotifyMessage from "../messages/notify-message";
import { useIsClient } from "@/hooks/use-is-client";
import Loading from "@/components/Loading";
import { useSession } from "@/hooks/sessionProvider";

const LoginForm = ({ fetch_route }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl");
    const [notifyMes, setNotifyMes] = useState("");
    const [success, setSuccess] = useState(false);
    const [stateNotify, setStateNotify] = useState("");
    const [verification, setVerification] = useState(false);
    const [isPending, startTransition] = useTransition();
    const { login } = useSession();

    const isClient = useIsClient();
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            telNo: "",
            password: "",
            code: "",
        },
        mode: 'onTouched',
    });
    const onSubmit = (values) => {
        startTransition(async () => {
            try {
                console.log('values', values)
                values = {
                    ...values,
                    code: values.code.length === 0 ? 0 : Number(values.code)
                }
                console.log('values2', values)
                let response = await fetch(`${fetch_route}/api/token/`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    },
                    credentials: 'include'
                })

                if (response.status === 500) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log('response', response)
                console.log('response.headers', response.headers.get('Set-Cookie'))
                const data = await response.json();
                console.log('response.data', data)
                if (data?.error) {
                    // form.reset();
                    let code;
                    console.log(data?.message)
                    Object.entries(data?.message)?.map(([key, value]) => {
                        console.log(key, 'key', value, 'value')
                        if (key === 'code') {
                            code = true;
                            setVerification(true);
                        } else
                            form.setError(key, { type: 'manual', message: value })

                    })
                    if (code) {
                        setNotifyMes('Код отправлен! Введите, полученный код из смс');
                        setStateNotify('success');
                    } else {
                        setNotifyMes('Invalid data! Check data');
                        setStateNotify('error');
                    }
                }
                if (data?.success) {
                    // login();
                    console.log('success')
                    form.reset();
                    setSuccess(true)
                    setNotifyMes('Вход успешен! Перенаправляем вас на страницу с которой вы пришли');
                    setStateNotify('success');
                }
            } catch (error) {
                console.error('Error:', error);
                // Обработка ошибки
                setNotifyMes('Registration failed! Error on server');
                setStateNotify('error');
            }
        });
    };
    if (!isClient)
        return <Loading />;
    if (success) {
        setTimeout(() => {
            if (callbackUrl)
                window.location.href = callbackUrl
            else
                window.location.href = '/'
        }, 1000)
    }
    return (<CardWrapper headerTitle={"Авторизация"} headerLabel="С возвращением!">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <>
                        {!verification ?
                            <>
                                <FormField control={form.control} name="telNo" render={({ field }) => (<FormItem>
                                    <FormLabel>Телефонный номер</FormLabel>
                                    <FormControl>
                                        <Input {...field} variant="default" disabled={isPending || success} type="tel" placeholder="+79000000000" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>)} />

                                <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                                    <FormLabel>Пароль</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} disabled={isPending || success} type="password" placeholder="******" />
                                    </FormControl>
                                    <FormMessage />
                                    <Button size="sm" variant="link" asChild className="px-0 text-muted-foreground">
                                        <Link href="/auth/reset-password">Забыли пароль?</Link>
                                    </Button>
                                </FormItem>)} />
                            </>
                            :
                            <FormField control={form.control} name="code" render={({ field }) => (<FormItem>
                                <FormLabel>Код подтверждения</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isPending || success} type="number" placeholder="Введите код подтверждения" />
                                </FormControl>
                            </FormItem>)} />
                        }

                    </>
                </div>
                {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                <Button type="submit" disabled={isPending || success} className="w-full ">
                    {!verification ?
                        "Войти"
                        :
                        "Подтвердить"
                    }

                    {/* {"Войти"} */}

                </Button>
                <Button size="sm" variant="link" asChild className="px-0 text-muted-foreground">
                    <Link href="/auth/register">Еще нет аккаунта? Зарегистрироваться</Link>
                </Button>
            </form>
        </Form>
    </CardWrapper>);
};
export default LoginForm;
