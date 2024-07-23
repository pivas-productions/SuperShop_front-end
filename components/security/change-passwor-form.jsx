"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { ChangePasswordSchema } from '@/schemas'
import { PasswordInput } from '../auth/password-input'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
// import { newPassword } from '@/actions/new-password'
import { useRouter } from 'next/navigation'
import NotifyMessage from "../messages/notify-message";
const ChangePasswordForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(ChangePasswordSchema),
        defaultValues: {
            password: "",
            old_password: "",
            passwordConfirmation: "",
        },
        mode: 'onTouched'
    });
    const onSubmit = (values) => {
        startTransition(() => {
            newPassword(values, token).then((data) => {
                //     if(data?.error){
                //         setNotifyMes(data.error);
                //         setStateNotify('error');
                //     }
                //     if(data?.success){
                //         setNotifyMes(data.success);
                //         setStateNotify('success');
                // setTimeout(() => {
                //     router.push('/auth/login');
                // }, 5000)
                //     }
            });
        });
        form.reset();
        setNotifyMes("");
        setStateNotify("");
    };
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full ">
                <div className="space-y-4">
                    <FormField control={form.control} name="old_password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Старый пароль</FormLabel>
                            <FormControl>
                                <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Новый пароль</FormLabel>
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

                <Button disabled={isPending} type="submit" className="w-full !bg-black text-white">
                    Сменить пароль
                </Button>
            </form>
        </Form>
    )
}

export default ChangePasswordForm