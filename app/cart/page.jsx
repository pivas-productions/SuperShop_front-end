import ProductWrapperCart from '@/components/cart/product-wrapper-cart'
import SettingsBarCart from '@/components/cart/settings-bar-cart'
import React from 'react'
import { cookies } from 'next/headers'
import { SessionProvider } from "@/hooks/sessionProvider";
import Link from 'next/link';
const CartPage = async () => {
    const cookieStore = cookies();
    const cookieString = cookieStore.getAll().map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/baskets/`, {
        headers: {
            'Content-type': 'application/json',
            'Cookie': cookieString
        },
        credentials: 'include'
    });
    const items = await res.json();
    console.log('items', items)
    if (!(items.count)) {
        return (
            <main className="h-screen container mx-auto pt-20 space-y-4 ">
                <div className="Title flex mx-10">
                    <div className=" text-black text-5xl">Shopping Cart</div>
                    <div className="text-black text-base">{0}</div>
                </div>
                <div className='flex flex-col h-full xl:flex-row gap-4 lg:gap-5 xl:gap-10'>
                    <section className='flex-1 container mt-10 h-full text-gray-600 body-font  px-5 mx-auto flex flex-col justify-start gap-4 items-center'>
                        <h1 className=" text-7xl font-medium title-font text-gray-900">
                            Похоже, ваша корзина пуста...
                        </h1>
                        {/* <h2 class=" text-4xl font-medium title-font text-gray-900">
                                    Не упустите возможность найти что-то особенное!
                                </h2>
                                <h3 class=" text-3xl font-medium title-font mb-[1.5em] text-gray-900">
                                    Перейдите в наш каталог и добавьте товары, которые вам понравятся
                                </h3> */}
                        {/* <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-6 px-12 focus:outline-none hover:bg-indigo-600 rounded-xl text-3xl mt-10 sm:mt-0">
                                    
                                </button> */}
                        <Link href={'/catalog'}
                            className={
                                "Button relative appearance-none transition-all overflow-hidden p-6 px-12 w-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
                                "gap-2 inline-flex text-neutral-100 leading-none " +
                                "hover:text-black group/buttonbuy "
                            }
                        >
                            <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
                            {/* <span className="relative z-10 text-2xl">Исследовать каталог и найти новые интересные товары</span> */}
                            <span className="relative z-10 text-2xl">Ваши лучшие покупки ждут вас!</span>
                            <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
                        </Link>
                    </section>
                    {/* <SettingsBarCart /> */}
                </div>
            </main>
        )
    }
    console.log(items.results[0].items)
    return (
        <SessionProvider route={process.env.REACT_APP_API_URL_CLIENT}>
            <main className="min-h-screen container mx-auto pt-20 space-y-4 ">
                <div className="Title flex mx-10">
                    <div className=" text-black text-5xl">Shopping Cart</div>
                    <div className="text-black text-base">{items.results[0].items.length}</div>
                </div>
                <div className='flex flex-col xl:flex-row gap-4 lg:gap-5 xl:gap-10'>
                    <section className='flex-1'>
                        <ProductWrapperCart fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items.results[0].items} />
                    </section>
                    <SettingsBarCart />
                </div>
            </main>
        </SessionProvider>
    )
}

export default CartPage