'use client'
import React, { useState, useTransition } from 'react'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import NotifyMessage from "@/components/messages/notify-message";
import { useSession } from "@/hooks/sessionProvider";
import { usePathname, useRouter } from 'next/navigation';

const AddToCartCard = ({ fetch_route, color = [], size = [], id }) => {
    const { session } = useSession();
    const [isPending, startTransition] = useTransition();
    const [notifyMes, setNotifyMes] = useState("");
    const [stateNotify, setStateNotify] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter()
    const pathname = usePathname();
    
    // console.log(color, 'color', size, 'size', id)
    const addToCart = (e) => {
        e.preventDefault()
        console.log('add to cart', id, color?.[0], size?.[0])
        startTransition(async () => {
            if(!session) {
                router.push(`/auth/login?callbackUrl=${pathname}`);
                return;
            }
            try {
                console.log('ggadg')
                const send_data = {
                    size: size?.[0]?.name,
                    color: color?.[0]?.name,
                    item_id: id,
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
    }
    return (
        <>
            {!(color.length && size.length) ?
                (<button
                    disabled
                    className="Button mx-auto w-11/12 py-1 px-0.5 lg:py-2 mb-2 bg-rose-400/90 text-base rounded-3xl flex items-center justify-center gap-1"
                >
                    <LiaShoppingCartSolid color="white" className="text-2xl" />
                    <span className="StateLayer text-white hidden md:block lg:hidden xl:block">
                        Нет в наличии
                    </span>
                </button>)
                :
                (success ?
                    (
                        <button
                            disabled={success}
                            className="Button mx-auto w-11/12 py-1 px-0.5 lg:py-2 mb-2 bg-white/60 text-base rounded-3xl flex items-center justify-center gap-1"
                        >
                            <LiaShoppingCartSolid color="white" className="text-2xl" />
                            <span className="StateLayer text-black hidden md:block lg:hidden xl:block">
                                Уже в корзине
                            </span>
                        </button>
                    ) :
                    (
                        <button
                            onClick={addToCart}
                            disabled={isPending}
                            className="Button mx-auto w-11/12 py-1 px-0.5 lg:py-2 mb-2 bg-rose-600/90 hover:bg-rose-600/60 hover:shadow-mega-shadow text-base rounded-3xl flex items-center justify-center gap-1"
                        >
                            <LiaShoppingCartSolid color="white" className="text-2xl" />
                            <span className="StateLayer text-white hidden md:block lg:hidden xl:block">
                                Добавить в корзину
                            </span>
                        </button>
                    )
                )

            }
            {notifyMes && <NotifyMessage message={notifyMes} state={stateNotify}></NotifyMessage>}

        </>

    )
}

export default AddToCartCard