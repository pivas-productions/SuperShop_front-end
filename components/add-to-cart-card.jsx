'use client'
import React from 'react'
import { LiaShoppingCartSolid } from 'react-icons/lia'

const AddToCartCard = () => {
    const addToCart = (e) => {
        e.preventDefault()
        console.log('add to favorite')
    }
    return (
        <button
            onClick={addToCart}
            className="Button mx-auto w-11/12 py-1 px-0.5 lg:py-2 mb-2 bg-rose-600/90 hover:bg-rose-600/60 hover:shadow-mega-shadow text-base rounded-3xl flex items-center justify-center gap-1"
        >
            <LiaShoppingCartSolid color="white" className="text-2xl" />
            <span className="StateLayer text-white hidden md:block lg:hidden xl:block">
                Добавить в корзину
            </span>
        </button>
    )
}

export default AddToCartCard