import AddToFavorite from '@/components/add-to-favorite'
import SettingsBarCart from '@/components/cart/settings-bar-cart'
import DeleteProduct from '@/components/delete-product'
import React from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'

const CartPage = () => {
    return (
        <main className="min-h-screen container mx-auto pt-20 space-y-4 ">
            <div className="Title flex mx-10">
                <div className=" text-black text-5xl">Shopping Cart</div>
                <div className="text-black text-base">3</div>
            </div>
            <div className='flex gap-10'>
                <section className='flex-1'>
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
                            <div className="Productframe w-full rounded-3xl border-gray-300 shadow-md border-2 p-2 grid grid-cols-[auto,1fr,4fr,1fr,auto] place-items-center gap-10">
                                <div className="Checkboxes w-fit">
                                    <input type="checkbox" name="" id="" />
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
                                        <DeleteProduct type={'cart'} id={1} />
                                    </div>
                                </div>
                                <div className="Price">

                                    <div className="PriceBlock inline-flex h-10 gap-1">
                                        <div className="self-center text-stone-900 text-xl font-bold">${'50'}</div>
                                        <div className="self-start text-zinc-400 text-lg font-bold line-through ">${'59'}</div>
                                    </div>

                                </div>
                                <div className="flex gap-2 items-center">
                                    <button>
                                        <CiCircleMinus className='h-full text-2xl' />
                                    </button>
                                    {/* TODO: сделать input вместо div */}
                                    <div className=" grow shrink basis-0 h-9 rounded-lg border border-zinc-500 justify-center items-center inline-flex">
                                        <div className=" px-3 py-1.5 text-center text-zinc-700 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                                            1
                                        </div>
                                    </div>
                                    <button>
                                        <CiCirclePlus className='h-full text-2xl' />
                                    </button>
                                </div>
                            </div>
                            <div className="Productframe w-full rounded-3xl border-gray-300 shadow-md border-2 p-2 grid grid-cols-[auto,1fr,4fr,1fr,auto] place-items-center gap-10">
                                <div className="Checkboxes w-fit">
                                    <input type="checkbox" name="" id="" />
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
                                        <DeleteProduct type={'cart'} id={1} />
                                    </div>
                                </div>
                                <div className="Price">

                                    <div className="PriceBlock inline-flex h-10 gap-1">
                                        <div className="self-center text-stone-900 text-xl font-bold">${'50'}</div>
                                        <div className="self-start text-zinc-400 text-lg font-bold line-through ">${'59'}</div>
                                    </div>

                                </div>
                                <div className="flex gap-2 items-center">
                                    <button>
                                        <CiCircleMinus className='h-full text-2xl' />
                                    </button>
                                    {/* TODO: сделать input вместо div */}
                                    <div className=" grow shrink basis-0 h-9 rounded-lg border border-zinc-500 justify-center items-center inline-flex">
                                        <div className=" px-3 py-1.5 text-center text-zinc-700 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">
                                            1
                                        </div>
                                    </div>
                                    <button>
                                        <CiCirclePlus className='h-full text-2xl' />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <SettingsBarCart />
            </div>
        </main>
    )
}

export default CartPage