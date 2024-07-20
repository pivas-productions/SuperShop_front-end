'use client'
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../ui/dialog'
import { FaPlus } from 'react-icons/fa'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useState, useTransition } from "react";
import NotifyMessage from '../messages/notify-message'
import { useForm, SubmitHandler } from "react-hook-form"


export const FavoriteDialog = ({fetch_route}) => {

    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        defaultValues: {
            listName: ""
        }
    })
    const onSubmit = (values) => {
        startTransition(async ()  => {
            console.log(values)
            try {
                let response = await fetch(`${fetch_route}/api/favorite/newlist`, {
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
                    form.reset();
                    setNotifyMes(data.message);
                    setStateNotify('error');
                }
                if (data?.success) {
                    console.log('success');
                    location.reload();
                }
            } catch (error) {
                console.error('Error:', error);
                // Обработка ошибки
                setNotifyMes('List created failed! Error on server');
                setStateNotify('error');
            }
        }
    )};


    return (
        <Dialog modal={true} className='' >
            <DialogTrigger asChild>
                <div className=" bg-white/60  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl hover:scale-110 border-solid border-2 border-black cursor-pointer ">
                    <FaPlus className="text-3xl" />
                </div>
            </DialogTrigger>
            <DialogContent variant={'editDialog'}>
                <DialogTitle className="w-full rounded-t-md flex justify-between" >
                    <span className='text-2xl font-semibold'>Новый список</span>
                    <DialogClose className={'rounded-full'} />
                </DialogTitle>
                <DialogDescription />
                <section className=" pt-10">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-4">
                                <>
                                    <FormField control={form.control} name="listName" render={({ field }) => (<FormItem>
                                        <FormLabel>Введите название списка:</FormLabel>
                                        <FormControl>
                                            <Input {...field} variant="default" disabled={isPending } type="text" placeholder="Название списка" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>)} />
                                </>
                            </div>
                            {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}
                            <Button type="submit" disabled={isPending } className="w-full hover:bg-sky-400">
                                {"Подтвердить"}
                            </Button>
                        </form>
                    </Form>
                </section>
            </DialogContent>
        </Dialog>
    )
}
