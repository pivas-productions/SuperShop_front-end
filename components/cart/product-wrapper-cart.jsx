'use client'
import React, { useState, useTransition } from 'react'
import ProductCardForCart from './product-card-for-cart'
import { CheckboxIndicatorGroup, CheckboxRoot } from '../ui/checkbox'
import { useSession } from '@/hooks/sessionProvider'

const ProductWrapperCart = ({ fetch_route, items }) => {
    const [allChecked, setAllChecked] = useState(false)
    const [changedAllChecked, setChangedAllChecked] = useState(false)
    const [arrChecked, setArrChecked] = useState([])
    const [isPending, startTransition] = useTransition();
    const { update } = useSession();

    const handleCheckedChange = () => {
        if (allChecked === 'indeterminate') {
            setAllChecked(true);
            setArrChecked(items.map(item => item.id));
        } else {
            setChangedAllChecked(true)
            const newChecked = !allChecked;
            setAllChecked(newChecked);
            setArrChecked(newChecked ? items.map(item => item.id) : []);
        }
        update();
    }

    const appendArrChecked = (id) => {
        setChangedAllChecked(false);
        setArrChecked(prev => {
            const isChecked = prev.includes(id);
            const newChecked = isChecked ? prev.filter(itemId => itemId !== id) : [...prev, id];
            setAllChecked(newChecked.length === items.length ? true : (newChecked.length > 0 ? 'indeterminate' : false));
            return newChecked;
        });
    }

    const deleteCheckedItem = () => {
        console.log(arrChecked);
        update();
        if(arrChecked.length){
            startTransition(async () => {
                try {
                    const send_data = {
                        ids: arrChecked,
                    }
                    console.log('send_data', send_data)
                    let response = await fetch(`${fetch_route}/api/baskets/delete-items/`, {
                        method: "DELETE",
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
                    location.reload();
                } catch (error) {
                    // Обработка ошибки
                }
            });
        }
    }

    return (
        <div className="Frame3571 w-full flex-col justify-center items-start gap-8 inline-flex">
            <div className="Toolbar w-full shadow-md border-2 p-1 rounded-3xl justify-start items-center gap-[29px] flex">
                <div className="ChekboxWithlabel self-stretch justify-center items-center inline-flex pl-4 gap-2">
                    <CheckboxRoot checked={allChecked} onClick={handleCheckedChange} disabled={isPending} id={'select_all'} colors={'blacked'} size={'xs'} effect={'sm'}>
                        <CheckboxIndicatorGroup checked={allChecked} />
                    </CheckboxRoot>
                    <label htmlFor='select_all' className="hover:text-pink-800 leading-none cursor-pointer select-none text-black">Выбрать все</label>
                </div>
                <button onClick={deleteCheckedItem} className="Deleteblock w-[171px] h-[23px] pl-1.5 pr-[5px] cursor-pointer hover:text-pink-800 justify-center items-center inline-flex text-red-600 leading-snug">
                    Удалить выбранные
                </button>
            </div>
            <div className="Cartproductwrapper w-full px-2.5 rounded-3xl flex-col items-start gap-4 flex">
                {items.map((item, index) => (
                    <ProductCardForCart key={index} changedAllChecked={changedAllChecked} fetch_route={fetch_route} allChecked={allChecked} appendCheckedFunc={appendArrChecked} initialQuantity={item.quantity} productId={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default ProductWrapperCart