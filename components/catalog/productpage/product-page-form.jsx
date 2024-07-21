'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React, { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form';
import NotifyMessage from "@/components/messages/notify-message";
import Link from 'next/link';

const ProductPageForm = ({ fetch_route, items }) => {
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [success, setSuccess] = useState("");
    const [isPending, startTransition] = useTransition();
    const defValue = {
        size: items?.sizes?.[0]?.name ? items?.sizes?.[0]?.name : 'none',
        color: items?.colors?.[0]?.name ? items?.colors?.[0]?.name : 'none',
    }
    const form = useForm({
        // resolver: zodResolver(ProfileSchema),
        defaultValues: defValue
    });
    const onCart = (values) => {
        // console.log(values, 'cart', items.id)
        startTransition(async () => {
            try {
                form.clearErrors()
                const send_data = {
                    ...values,
                    item_id: items.id,
                    quantity: 1,
                }
                console.log('send_data', send_data)
                let response = await fetch(`${fetch_route}/api/baskets/add/`, {
                    method: "POST",
                    body: JSON.stringify(send_data),
                    headers: {
                        'Content-type': 'application/json'
                    },
                    credentials: 'include'
                });
                console.log(response, 'response')
                console.log(response.status, response.status === 201, response.status == 500)
                // const data = await response.json();
                console.log(response.statusText)
                if (response.status === 500) {
                    console.log('i`m error')
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                if (response.status === 404) {
                    console.log('adfasdfsf')
                    // form.reset();
                    // console.log(data?.message)
                    // Object.entries(data?.message)?.map(([key, value]) => {
                    //     console.log(key, 'key', value, 'value')
                    //     form.setError(key, { type: 'manual', message: value })

                    // })
                    setNotifyMes('Товар не найден. Возможно его нет в наличии');
                    setStateNotify('error');
                }
                if (response.status === 201) {
                    console.log('gg')
                    setNotifyMes('Товар добавлен в корзину');
                    setStateNotify('success');
                    setSuccess(true)
                }
            } catch (error) {
                // Обработка ошибки
                console.log('asdfasdf')
                setNotifyMes('Ошибка добавления в корзину');
                setStateNotify('error');
            }
        });
    };
    // maybe added later
    // const onBuy = (values) => {
    //     // console.log(values, 'buy')
    //     startTransition(() => {

    //     });
    // };
    return (
        <>
            <Form {...form}>
                <form className='space-y-8 w-full'>
                    <FormField control={form.control} name="size" render={({ field }) => (
                        <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 inline-flex w-full'>
                            <FormLabel className='!text-lg'>Sizes</FormLabel>
                            <div className="justify-center items-start gap-7 inline-flex">
                                {items?.sizes?.map((item, i) => {
                                    return (
                                        <FormControl key={i}>
                                            <input
                                                type='radio'
                                                {...field}
                                                value={item.name}
                                                checked={field.value === item.name}
                                                disabled={isPending}
                                                className={`w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-[attr(data-content)] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-16 after:w-16 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white`}
                                                data-content={item.name}
                                            />
                                        </FormControl>
                                    )
                                })}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="color" render={({ field }) => (
                        <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 inline-flex w-full'>
                            <FormLabel className='!text-lg'>Colors</FormLabel>
                            <div className="justify-center items-start gap-7 inline-flex">
                                {items.colors.map((item, i) => {
                                    return (
                                        <FormControl key={i}>
                                            <input
                                                type='radio'
                                                {...field}
                                                value={item.name}
                                                checked={field.value === item.name}
                                                disabled={isPending}
                                                className={`w-14 h-14 p-3 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white`}
                                                style={{ backgroundColor: item.hex }}
                                            />
                                        </FormControl>
                                    )
                                })}
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <div className="w-full space-y-8">
                        <div className="PriceBlock inline-flex h-20 gap-2">
                            <div className="self-center text-stone-900 text-6xl font-bold">${items.price_with_discount}</div>
                            <div className="self-start text-zinc-400 text-5xl font-bold line-through ">${items.price}</div>
                        </div>
                        <div className="buttonBlock space-y-2" >
                            {success ?
                                (<>
                                    <Link
                                        href={'/cart'}
                                        className={
                                            "Button relative appearance-none transition-all overflow-hidden p-3 w-full h-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
                                            "gap-2 inline-flex text-neutral-100 leading-none " +
                                            "hover:text-black group/buttonbuy "
                                        }
                                    >
                                        <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
                                        <span className="relative z-10">Go to cart</span>
                                        <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
                                    </Link>
                                </>)
                                :
                                (<button
                                    onClick={form.handleSubmit(onCart)}
                                    disabled={success}
                                    className={
                                        "Button relative appearance-none transition-all overflow-hidden p-3 w-full h-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
                                        "gap-2 inline-flex text-neutral-100 leading-none " +
                                        "hover:text-black group/buttonbuy "
                                    }
                                >
                                    <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
                                    <span className="relative z-10">Add to cart</span>
                                    <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
                                </button>)
                            }
                            {/* Maybe added later */}
                            {/* <button className="block w-1/2 mx-auto p-3 bg-zinc-400 rounded-lg border border-zinc-800 text-zinc-800"  onClick={form.handleSubmit(onBuy)}>
                                Buy one click
                            </button> */}

                        </div>
                    </div>
                    {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

                </form>
            </Form>
        </>
    )
}

export default ProductPageForm