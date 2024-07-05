"use client";
import { useState, useTransition } from "react";


import { useSearchParams } from "next/navigation";


import { useForm } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";


import Link from "next/link";


import { useIsClient } from "@/hooks/use-is-client";


import Loading from "@/components/Loading";


import { LoginSchema } from "@/schemas";


import CardWrapper from "./card-wrapper";


import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";

import { Input } from "../ui/input";

import { PasswordInput } from "./password-input";

import { Button } from "../ui/button";

import NotifyMessage from "../messages/notify-message";

// import { login } from "@/actions/login";


const LoginForm = ({fetch_route}) => {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl");
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const isClient = useIsClient();
    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            telNo: "",
            password: "",
        },
        mode: 'onTouched',
    });
    const onSubmit = (values) => {
        startTransition(async () => {
            try {
                let response = await fetch(`http://localhost:8000/api/register/`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log('response',response)
                const data = await response.json();
                console.log('response.data', data)
                if (data?.error) {
                    form.reset();
                    setNotifyMes(data.message);
                    setStateNotify('error');
                }
                if (data?.success) {
                    form.reset();
                    setNotifyMes(data.message);
                    setStateNotify('success');
                }
            }catch (error){
                console.error('Error:', error);
                // Обработка ошибки
                // Например, отображение уведомления об ошибке
                setNotifyMes('Registration failed! Error on server');
                setStateNotify('error');
            }
            finally {
                setNotifyMes("");
                setStateNotify("");
            }
        });
    };
    if (!isClient)
        return <Loading />;
    return (<CardWrapper headerTitle={"Авторизация"} headerLabel="С возвращением!">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                    <>
                        <FormField control={form.control} name="telNo" render={({ field }) => (<FormItem>
                            <FormLabel>Телефонный номер</FormLabel>
                            <FormControl>
                                <Input {...field} variant="default" disabled={isPending} type="tel" placeholder="+79000000000" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>)} />

                        <FormField control={form.control} name="password" render={({ field }) => (<FormItem>
                            <FormLabel>Пароль</FormLabel>
                            <FormControl>
                                <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                            </FormControl>
                            <FormMessage />
                            <Button size="sm" variant="link" asChild className="px-0 text-muted-foreground">
                                <Link href="/auth/reset-password">Забыли пароль?</Link>
                            </Button>
                        </FormItem>)} />
                    </>
                </div>
                {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                <Button type="submit" disabled={isPending} className="w-full hover:bg-sky-400">
                    {"Войти"}
                </Button>
            </form>
        </Form>
    </CardWrapper>);
};
export default LoginForm;
