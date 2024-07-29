"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { NewPasswordSchema } from '../../schemas'
import { PasswordInput } from './password-input'
import CardWrapper from './card-wrapper'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
// import { newPassword } from '@/actions/new-password'
import { useRouter } from 'next/navigation'
import NotifyMessage from "../messages/notify-message";
const NewPasswordForm = ({ fetch_route }) => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [success, setSuccess] = useState(false);
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
            password_confirm: "",
        },
        mode: 'onTouched'
    });
    const onSubmit = (values) => {
        startTransition(async () => {
            try {
                console.log('values', values)
                values = {
                    ...values,
                    token: token
                }
                let response = await fetch(`${fetch_route}/api/new-password/`, {
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
                    console.log(data?.message)
                    Object.entries(data?.message)?.map(([key, value]) => {
                        console.log(key, 'key', value, 'value')
                        form.setError(key, { type: 'manual', message: value })

                    })
                    setNotifyMes('Invalid data! Check data');
                    setStateNotify('error');
                }
                if (data?.success) {
                    console.log('success')
                    form.reset();
                    setSuccess(true)
                    setNotifyMes('Пароль успешно изменен! Переход к форме для входа');
                    setStateNotify('success');
                }
            } catch (error) {
                console.error('Error:', error);
                // Обработка ошибки
                setNotifyMes('Registration failed! Error on server');
                setStateNotify('error');
            }
        });
        form.reset();
        setNotifyMes("");
        setStateNotify("");
    };

    if (success) {
        setTimeout(() => {
            window.location.href = '/auth/login'
        }, 500)
    }
    return (
        <CardWrapper headerTitle="Password recovery" headerLabel="Enter a new password">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>New Password</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="password_confirm" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm the password</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                    <Button disabled={isPending} type="submit" className="w-full hover:bg-sky-400">
                        Restore password
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default NewPasswordForm