'use client'
import React, { useEffect, useState } from 'react'
import AddToFavorite from '@/components/add-to-favorite'
import DeleteProduct from '@/components/delete-product'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import ProductCardForCart from './product-card-for-cart'

const ProductWrapperCart = () => {
    const [quantity, setQuantity] = useState(1);
    const [intervalId, setIntervalId] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);

    const changeQuantity = (delta) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        setQuantity((prevQuantity) => {
            const newQuantity = prevQuantity + delta;
            return newQuantity < 1 ? 1 : newQuantity;
        });
    };

    const startChangingQuantity = (delta) => {
        changeQuantity(delta);
        
        const id = setInterval(() => changeQuantity(delta), 200); // Изменение каждые 200мс
        setIntervalId(id);
    };

    const stopChangingQuantity = () => {
        clearInterval(intervalId);
        setIntervalId(null);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        const newTimeoutId = setTimeout(() => {
            // Отправляем запрос на изменение количества товара
            // updateQuantity(productId, newQuantity);
            console.log('Время прошло')

        }, 1000); // Задержка в 1 секунду

        setTimeoutId(newTimeoutId);
        // Здесь можно добавить логику для обновления количества на сервере
        // updateQuantity(productId, quantity);
    };
    const stopChangingQuantityMouseLeave = () => {
        if (intervalId) {
            clearTimeout(timeoutId);
            const newTimeoutId = setTimeout(() => {
                // Отправляем запрос на изменение количества товара
                // updateQuantity(productId, newQuantity);
                console.log('Время прошло')

            }, 1000); // Задержка в 1 секунду

            setTimeoutId(newTimeoutId);
        }

        setIntervalId(null);

        clearInterval(intervalId);


        // Здесь можно добавить логику для обновления количества на сервере
        // updateQuantity(productId, quantity);
    };
    useEffect(() => {
        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(intervalId);
    }, [intervalId]);
    return (
        <div className="Frame3571 w-full flex-col justify-center items-start gap-8 inline-flex">
            <div className="Toolbar w-full shadow-md border-2 p-1 rounded-3xl justify-start items-center gap-[29px] flex">
                <div className="ChekboxWithlabel self-stretch justify-center items-center inline-flex">
                    <div className="Checkboxes p-1 flex-col justify-center items-center inline-flex">
                        <div className="StateLayer p-[11px] rounded-[100px] justify-center items-center inline-flex">
                            <div className="CheckSmall w-6 h-6 px-1.5 pt-[7px] pb-[7.60px] justify-center items-center flex" />
                            <div className="Container w-[18px] h-[18px] bg-slate-500 rounded-sm" />
                        </div>
                    </div>
                    <div className=" text-black">Выбрать все</div>
                </div>
                <div className="Deleteblock w-[171px] h-[23px] pl-1.5 pr-[5px] justify-center items-center inline-flex">
                    <div className=" w-40 h-[23px] text-red-600 text-base font-normal font-['Inter'] leading-snug">Удалить выбранные</div>
                </div>
            </div>
            <div className="Cartproductwrapper w-full px-2.5 rounded-3xl flex-col items-start gap-4 flex">
            <ProductCardForCart initialQuantity={2} productId={1} />
            <ProductCardForCart initialQuantity={1} productId={2} />

            </div>
        </div>
    )
}

export default ProductWrapperCart