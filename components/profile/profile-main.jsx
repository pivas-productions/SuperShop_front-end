'use client'
import Image from 'next/image'
import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import NotifyMessage from '../messages/notify-message'
import { Button } from '../ui/button'
import { useState, useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { FaClock, FaShoppingCart, FaStar } from 'react-icons/fa'

const ProfileMain = (fetch_route) => {
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [isPending, startTransition] = useTransition();
    const form = useForm({
        defaultValues: {
            newProfileName: ""
        }
    })
    const onSubmit = (values) => {
        startTransition(async () => {
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
                setNotifyMes('Name change failed! Error on server');
                setStateNotify('error');
            }
        }
        )
    };

    return (
        <div className="Profile pt-10 flex text-center lg:text-start  flex-col lg:flex-row lg:px-10 lg:gap-32 pb-16 bg-rose-200">
            <div className="General w-full space-y-4 lg:space-y-10">
                <div className=" text-6xl  font-['Roboto']">Мой профиль</div>
                <div className='Profile data flex flex-col gap-12 items-center lg:place-items-start'>
                    <div className='flex flex-col lg:flex-row  text-center items-center gap-10 lg:gap-44'>
                        <div className='relative size-60'>
                            <Image fill src="/435x366.png" alt="" className='rounded-full' />
                        </div>
                        <div className="pl-2 TextareaField space-y-2">
                            <label className="block font-['Inter'] ">
                                    Телефон
                                </label>
                            <div className="Textarea px-4 py-3 bg-white rounded-lg border border-zinc-300 items-start inline-flex">
                                <input type='tel' value='+79381347251' disabled className="Value grow shrink basis-0  font-['Inter'] " />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 lg:grid-cols-2 gap-20'>
                        <div className="Name Change Form bg-white/30 rounded-3xl space-y-8">
                            <div className=" text-center text-black text-2xl font-normal font-['Inter'] leading-normal">Имя</div>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mr-12 ml-12 text-center">
                                    <div className="space-y-6 text-left">
                                        <>
                                            <FormField control={form.control} name="listName" render={({ field }) => (<FormItem>
                                                <FormLabel>Введите новое имя:</FormLabel>
                                                <FormControl>
                                                    <Input {...field} variant="default" disabled={isPending} type="text" placeholder="Новое имя" />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>)} />
                                        </>
                                    </div>
                                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}
                                    <Button type="submit" disabled={isPending} className=" hover:bg-sky-400 w-56">
                                        {"Подтвердить"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                        <div className='space-y-12'>
                            <div className='grid grid-rows-2 grid-cols-2 place-items-center gap-4'>
                                <div className="StatsCard p-6 w-full  bg-white rounded-lg border border-zinc-300 flex-col items-center gap-6 inline-flex">
                                    <FaShoppingCart className='text-3xl' />
                                    <div className="ReviewBody  flex-col items-center gap-1 flex">
                                        <div className="TextHeading text-2xl font-semibold font-['Inter'] leading-7">100</div>
                                        <div className="Text   font-['Inter'] ">Покупок</div>
                                    </div>
                                </div>
                                <div className="StatsCard p-6 w-full  bg-white rounded-lg border border-zinc-300 flex-col items-center gap-6 inline-flex">
                                    <FaStar className='text-3xl' />
                                    <div className="ReviewBody   flex-col items-center gap-1 flex">
                                        <div className="TextHeading  text-2xl font-semibold font-['Inter'] leading-7">100</div>
                                        <div className="Text  font-['Inter'] ">Отзывов</div>
                                    </div>
                                </div>
                                <div className="StatsCard p-6 w-full  bg-white rounded-lg border border-zinc-300 flex-col items-center gap-6 inline-flex">
                                    <FaClock className='text-3xl' />
                                    <div className="ReviewBody   flex-col items-center gap-1 flex">
                                        <div className="TextHeading  text-2xl font-semibold font-['Inter'] leading-7">15.10.2015</div>
                                        <div className="Text   font-['Inter'] ">Дата регистрации</div>
                                    </div>
                                </div>
                                <div className="StatsCard p-6 w-full  bg-white rounded-lg border border-zinc-300 flex-col items-center gap-6 inline-flex">
                                    <FaClock className='text-3xl' />
                                    <div className="ReviewBody  flex-col items-center gap-1 flex">
                                        <div className="TextHeading text-2xl font-semibold font-['Inter'] leading-7">19.02.2024</div>
                                        <div className="Text  text-center font-['Inter'] ">Последняя покупка</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain
