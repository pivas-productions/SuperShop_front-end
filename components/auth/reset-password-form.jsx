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

const ResetPasswordForm = () => {
    const router = useRouter();
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(ResetSchema),
        defaultValues: {
            telNo: "",
        },
        mode: 'onTouched'
    })
    const onSubmit = (values) => {
        setNotifyMes("");
        setStateNotify("");
        startTransition(() => {
            // reset(values).then((data) => {
            //     if(data?.error){
            //         setNotifyMes(data.error);
            //         setStateNotify('error');
            //     }
            //     if(data?.success){
            //         setNotifyMes(data.success);
            //         setStateNotify('success');
            //     }
            // });
        });
    };
    const Back = () => {
        router.push('/auth/login');
    };
    return (
        <CardWrapper headerTitle="Password recovery" headerLabel="We will send a letter to the mail to restore password">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField control={form.control} name="telNo" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Телефонный номер</FormLabel>
                                <FormControl>
                                    <Input {...field} disabled={isPending} placeholder="+79000000000" type="tel"/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                    <Button disabled={isPending} type="submit" className="w-full hover:bg-sky-400">
                        Send a letter to reset the password
                    </Button>
                    <Button variant="link" asChild className="px-0 text-muted-foreground">
                        <Link href="/auth/login">Return to authorization</Link>
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default ResetPasswordForm;
