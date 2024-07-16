import ProductWrapperCart from '@/components/cart/product-wrapper-cart'
import SettingsBarCart from '@/components/cart/settings-bar-cart'
import React from 'react'

const CartPage = () => {
    return (
        <main className="min-h-screen container mx-auto pt-20 space-y-4 ">
            <div className="Title flex mx-10">
                <div className=" text-black text-5xl">Shopping Cart</div>
                <div className="text-black text-base">3</div>
            </div>
            <div className='flex gap-10'>
                <section className='flex-1'>
                <ProductWrapperCart />
                </section>
                <SettingsBarCart />
            </div>
        </main>
    )
}

export default CartPage