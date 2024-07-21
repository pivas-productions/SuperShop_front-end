import ProductWrapperCart from '@/components/cart/product-wrapper-cart'
import SettingsBarCart from '@/components/cart/settings-bar-cart'
import React from 'react'
import { cookies } from 'next/headers'
import { SessionProvider } from "@/hooks/sessionProvider";
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