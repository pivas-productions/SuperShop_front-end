'use client'

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useIsClient } from "@/hooks/use-is-client";
import Loading from "../Loading.jsx";

import { RegisterSchema } from "@/schemas";

import CardWrapper from "./card-wrapper"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../ui/form";
import { Input } from "../ui/input";
import { PasswordInput } from "./password-input";
import { Button } from "../ui/button";
import NotifyMessage from "../messages/notify-message";

// import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

const RegisterForm = ({fetch_route}) => {
    const router = useRouter()
    const isClient = useIsClient();
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [error, setError] = useState("");
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
        console.log(fetch_route,fetch_route);
        startTransition(async () => {
            try{
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
            
            // response.then((res) => {
                // if (res) {
                //     res.json().then((data) => {
                //         if (data?.error) {
                //             form.reset();
                //             setNotifyMes(data.error);
                //             setStateNotify('error');
                //         }
                //         if (data?.success) {
                //             form.reset();
                //             setNotifyMes(data.success);
                //             setStateNotify('success');
                //         }
                //     })
                // }
            // })
        });
        form.reset();
        setNotifyMes('');
        setStateNotify('');
    };
    if (!isClient)
        return <Loading />;
    if (success) {
        setTimeout(() => {
            router.push('/auth/login')
        }, 1000)
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
                                    <Input {...field} disabled={isPending} type="text" placeholder="Ваше имя" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="telNo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Телефонный номер</FormLabel>
                                <FormControl>
                                    <Input {...field} value={field.value} disabled={isPending} maxlength={12} placeholder="+79000000000" type="tel" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="passwordConfirmation" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Подтвердите пароль</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                    <Button type="submit" disabled={isPending} className="w-full hover:bg-sky-400">
                        Регистрация
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;

