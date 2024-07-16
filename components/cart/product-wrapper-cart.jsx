'use client'
import React, { useEffect, useState } from 'react'
import ProductCardForCart from './product-card-for-cart'
import { CheckboxIndicator, CheckboxRoot } from '../ui/checkbox'

const ProductWrapperCart = () => {
    const [allChecked, SetAllChecked] = useState(false)
    const handleCheckedChange = () => {
        SetAllChecked(!allChecked)
        console.log('change state')
    }
    return (
        <div className="Frame3571 w-full flex-col justify-center items-start gap-8 inline-flex">
            <div className="Toolbar w-full shadow-md border-2 p-1 rounded-3xl justify-start items-center gap-[29px] flex">
                <div className="ChekboxWithlabel self-stretch justify-center items-center inline-flex pl-4 gap-2">

                    <CheckboxRoot onCheckedChange={handleCheckedChange} id={'select_all'} colors={'blacked'} size={'xs'} effect={'sm'}>
                        <CheckboxIndicator />
                    </CheckboxRoot>
                    <label htmlFor='select_all' className="hover:text-pink-800 leading-none cursor-pointer select-none text-black">Выбрать все</label>
                </div>
                <button className="Deleteblock w-[171px] h-[23px] pl-1.5 pr-[5px] cursor-pointer hover:text-pink-800 justify-center items-center inline-flex text-red-600 leading-snug">
                    Удалить выбранные
                </button>
            </div>
            <div className="Cartproductwrapper w-full px-2.5 rounded-3xl flex-col items-start gap-4 flex">
            <ProductCardForCart allChecked={allChecked} initialQuantity={2} productId={1} />
            <ProductCardForCart allChecked={allChecked} initialQuantity={1} productId={2} />

            </div>
        </div>
    )
}

export default ProductWrapperCart