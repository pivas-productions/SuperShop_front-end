"use client"

import React, { useTransition, useState } from "react"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetSchema } from "@/schemas";

import CardWrapper from "@/components/auth/card-wrapper";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

// import { reset } from "@/actions/reset";
import { useRouter } from "next/navigation";
import NotifyMessage from "../messages/notify-message";
import Link from "next/link";

const ResetPasswordForm = ({ fetch_route }) => {
    const router = useRouter();
    const [token, setToken] = useState(null)
    const [success, setSuccess] = useState(false);
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [verification, setVerification] = useState(false);
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            telNo: "",
            code: ""
        },
        mode: 'onTouched'
    })
    const onSubmit = (values) => {
        setNotifyMes("");
        setStateNotify("");
        startTransition(async () => {
            try {
                console.log('values', values)
                values = {
                    ...values,
                    code: values.code.length === 0 ? 0 : Number(values.code)
                }
                console.log('values2', values)
                let response = await fetch(`${fetch_route}/api/password-reset/`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    }
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
                    if (data?.token) {
                        setToken(data.token);

                    }
                    console.log('success')
                    form.reset();
                    setSuccess(true)
                    setNotifyMes('Код верный! Переход к форме для ввода нового пароля');
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

    if (success) {
        console.log('token', token)
        window.location.href = `/auth/new-password?token=${token}`
    }
    return (
        <CardWrapper headerTitle="Восстановление пароля" headerLabel="Мы отправим код по смс, чтобы восстановить пароль">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        {!verification ?
                            <FormField control={form.control} name="telNo" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Телефонный номер</FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isPending} placeholder="+79000000000" type="tel" autoFocus />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            :
                            <FormField control={form.control} name="code" render={({ field }) => (<FormItem>
                                <FormLabel>Код подтверждения</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isPending || success} type="number" placeholder="Введите код подтверждения" autoFocus />
                                </FormControl>
                            </FormItem>)} />
                        }
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                    <Button disabled={isPending} type="submit" className="w-full hover:bg-sky-400">
                        {!verification ?
                            "Отправить смс для сброса пароля"
                            :
                            "Подтвердить"
                        }
                    </Button>
                    <Button variant="link" asChild className="px-0 text-muted-foreground">
                        <Link href="/auth/login">Вернуться к разрешению</Link>
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default ResetPasswordForm;
