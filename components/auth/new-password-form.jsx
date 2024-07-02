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
const NewPasswordForm = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(NewPasswordSchema),
        defaultValues: {
            password: "",
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
        <CardWrapper headerTitle="Password recovery" headerLabel="Enter a new password">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">

                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="passwordConfirmation" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm the password</FormLabel>
                                <FormControl>
                                    <PasswordInput {...field} disabled={isPending} type="password" placeholder="******"/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}/>
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