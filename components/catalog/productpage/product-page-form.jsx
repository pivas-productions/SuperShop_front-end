'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form';

const ProductPageForm = () => {

    const [isPending, startTransition] = useTransition();
    const defValue = {
        sizes: 'M',
        colors: 'red',
    }
    const form = useForm({
        // resolver: zodResolver(ProfileSchema),
        defaultValues: defValue
    });

    const onCart = (values) => {
        console.log(values, 'cart')
        startTransition(() => {

        });
    };
    const onBuy = (values) => {
        console.log(values, 'buy')
        startTransition(() => {

        });
    };
    return (
        <>
            <Form {...form}>
                <form className='space-y-8'>
                    <FormField control={form.control} name="sizes" render={({ field }) => (
                        <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 inline-flex'>
                            <FormLabel className='!text-lg'>Sizes</FormLabel>
                            <div className="justify-center items-start gap-7 inline-flex">
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'XS'}
                                        checked={field.value === 'XS'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-['XS'] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'S'}
                                        checked={field.value === 'S'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-['S'] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'M'}
                                        checked={field.value === 'M'}

                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-['M'] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    >
                                    </input>
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'L'}
                                        checked={field.value === 'L'}

                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-['L'] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'XL'}
                                        checked={field.value === 'XL'}

                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:content-['XL'] after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField control={form.control} name="colors" render={({ field }) => (
                        <FormItem className='!space-y-0 flex-col justify-center items-center gap-4 inline-flex'>
                            <FormLabel className='!text-lg'>Colors</FormLabel>
                            <div className="justify-center items-start gap-7 inline-flex">
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'zinc'}
                                        checked={field.value === 'zinc'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-zinc-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'red'}
                                        checked={field.value === 'red'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-red-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'green'}
                                        checked={field.value === 'green'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-green-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    >
                                    </input>
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'pink'}
                                        checked={field.value === 'pink'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-pink-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                                <FormControl>
                                    <input
                                        type='radio'
                                        {...field}
                                        value={'blue'}
                                        checked={field.value === 'blue'}
                                        disabled={isPending}
                                        className="w-14 h-14 p-3 after:bg-blue-800 rounded-full text-white appearance-none after:flex after:justify-center after:items-center after:border-zinc-800 after:rounded-full relative after:border-2 after:h-14 after:w-14 outline-none cursor-pointer transition-all after:transition-all checked:after:bg-opacity-90 checked:after:shadow-2xl checked:after:border-white"
                                    />
                                </FormControl>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <div className="w-full space-y-8">
                        <div className="PriceBlock inline-flex h-20 gap-2">
                            <div className="self-center text-stone-900 text-6xl font-bold">$50</div>
                            <div className="self-start text-zinc-400 text-5xl font-bold line-through ">$50</div>
                        </div>
                        <div className="buttonBlock space-y-2" >
                            <button className="block w-full p-3 bg-zinc-800 rounded-lg border border-zinc-800 text-neutral-100" onClick={form.handleSubmit(onCart)}>
                                Add to cart
                            </button>
                            <button className="block w-1/2 mx-auto p-3 bg-zinc-400 rounded-lg border border-zinc-800 text-zinc-800"  onClick={form.handleSubmit(onBuy)}>
                                Buy one click
                            </button>

                        </div>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default ProductPageForm