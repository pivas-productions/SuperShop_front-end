'use client'

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";

import { useIsClient } from "@/hooks/use-is-client";
import Loading from "../Loading.jsx";
import CardWrapper from "./card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";
import { Input } from "../ui/input";
import { PasswordInput } from "./password-input";
import { Button } from "../ui/button";
import NotifyMessage from "../messages/notify-message";

// import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

const RegisterForm = ({ fetch_route }) => {
    const router = useRouter()
    const isClient = useIsClient();
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();

    const form = useForm({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            name: "",
            telNo: "+7",
            password: "",
            passwordConfirmation: "",
        },
        mode: 'onTouched'
    });

    const onSubmit = (values) => {
        setNotifyMes('');
        setStateNotify('');
        setSuccess('');
        console.log(fetch_route, fetch_route);
        startTransition(async () => {
            try {
                form.clearErrors()
                let response = await fetch(`${fetch_route}/api/register/`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                // console.log(response.status, response.status == 500)
                const data = await response.json();
                console.log('response.data', data)
                if (response.status === 500) {
                    // console.log('i`m error')
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (data?.error) {
                    // form.reset();
                    console.log(data?.message)
                    Object.entries(data?.message)?.map(([key, value]) => {
                        console.log(key, 'key', value, 'value')
                        form.setError(key, { type: 'manual', message: value })

                    })
                    setNotifyMes('Invalid data! Check data');
                    setStateNotify('error');
                }
                if (data?.success) {
                    form.reset();
                    setNotifyMes('Вы зарегистрированы! Переход на страницу авторизации...');
                    setStateNotify('success');
                    setSuccess(true)
                }
            } catch (error) {
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
            router.push('/auth/login')
        }, 1000)
    }
    if (stateNotify) {
        setTimeout(() => {
            setNotifyMes('');
            setStateNotify(''); 1
        }, 3000)
    }
    return (
        <CardWrapper headerTitle={"Регистрация"} headerLabel={"Зарегистрируйте учетную запись"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Имя</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isPending || success} type="text" placeholder="Ваше имя" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="telNo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Телефонный номер</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value} disabled={isPending || success} maxLength={12} placeholder="+79000000000" type="tel" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending || success} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="passwordConfirmation" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Подтвердите пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending || success} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                    <Button type="submit" disabled={isPending || success} className="w-full hover:bg-sky-400">
                        Регистрация
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;

