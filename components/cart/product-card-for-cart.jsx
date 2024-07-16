'use client'
import React, { useState, useEffect } from 'react'
import AddToFavorite from '@/components/add-to-favorite'
import DeleteProduct from '@/components/delete-product'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { CheckboxIndicator, CheckboxRoot } from '../ui/checkbox'

export default function ProductCardForCart({ allChecked, initialQuantity, productId }) {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [intervalId, setIntervalId] = useState(null);
    const [timeoutId, setTimeoutId] = useState(null);
    const [stateChecked, setStateChecked] = useState(allChecked)
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
            // updateQuantity(productId, quantity);
            console.log(`Количество товара ${productId} изменено на ${quantity}`);
        }, 1000); // Задержка в 1 секунду

        setTimeoutId(newTimeoutId);
    };

    const stopChangingQuantityMouseLeave = () => {
        if (intervalId) {
            clearTimeout(timeoutId);
            const newTimeoutId = setTimeout(() => {
                // Отправляем запрос на изменение количества товара
                // updateQuantity(productId, quantity);
                console.log(`Количество товара ${productId} изменено на ${quantity}`);
            }, 1000); // Задержка в 1 секунду

            setTimeoutId(newTimeoutId);
        }

        setIntervalId(null);
        clearInterval(intervalId);
    };

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (isNaN(value)) {
            setQuantity(1);
        } else {
            setQuantity(value < 1 ? 1 : value);
        }
        clearTimeout(timeoutId);
        const newTimeoutId = setTimeout(() => {
            // Отправляем запрос на изменение количества товара
            // updateQuantity(productId, quantity);
            console.log(`Количество товара ${productId} изменено на ${quantity}`);
        }, 1000); // Задержка в 1 секунду

        setTimeoutId(newTimeoutId);
    };

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, [intervalId]);

    useEffect(() => {
        setStateChecked(allChecked);
    }, [allChecked]);

    const handleCheckboxChange = (checked) => {
        setStateChecked(checked);
    };
    return (
        <div className="Productframe w-full rounded-3xl border-gray-300 shadow-md border-2 p-2 grid grid-cols-[auto,1fr,4fr,1fr,auto] place-items-center gap-10">
            <div className="Checkboxes w-fit">
                <CheckboxRoot checked={stateChecked} onCheckedChange={handleCheckboxChange} colors={'blacked'} size={'xs'} effect={'sm'}>
                    <CheckboxIndicator />
                </CheckboxRoot>
            </div>
            <div className={"CardPhotoInCart group relative w-full h-full"}>
                <img className="Image rounded-lg h-full w-full" src="https://via.placeholder.com/140x156" alt='' />
            </div>
            <div className='flex flex-col gap-2'>
                <div className="Titleproduct">
                    <span>IWONGOU кулера для корпуса пк 120 мм argb fan 3 in 1 вентиляторы для пк 5V3PIN кулер</span>
                </div>
                <div className="">
                    <div className=" text-neutral-400 text-sm">Цвет: черный, размер: XS</div>
                </div>
                <div className="blockbutton inline-flex gap-2">
                    <AddToFavorite />
                    <DeleteProduct type={'cart'} id={productId} />
                </div>
            </div>
            <div className="Price">
                <div className="PriceBlock inline-flex h-10 gap-1">
                    <div className="self-center text-stone-900 text-xl font-bold">${'50'}</div>
                    <div className="self-start text-zinc-400 text-lg font-bold line-through ">${'59'}</div>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <button
                    onMouseDown={() => startChangingQuantity(-1)}
                    onMouseUp={stopChangingQuantity}
                    onMouseLeave={stopChangingQuantityMouseLeave}
                >
                    <CiCircleMinus className='h-full text-2xl' />
                </button>
                <input
                    type="text"
                    value={quantity}
                    onInput={handleInputChange}
                    className="min-w-[2.25rem] h-9 rounded-lg border border-zinc-500 px-3 py-1.5 text-center bg-transparent text-zinc-700 text-sm font-medium font-['Roboto'] leading-tight tracking-tight"
                    style={{ width: `${(quantity.toString().length + 5)}ch` }}
                />
                <button
                    onMouseDown={() => startChangingQuantity(1)}
                    onMouseUp={stopChangingQuantity}
                    onMouseLeave={stopChangingQuantityMouseLeave}
                >
                    <CiCirclePlus className='h-full text-2xl' />
                </button>
            </div>
        </div>
    );
};