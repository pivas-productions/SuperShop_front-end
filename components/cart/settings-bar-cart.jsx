import React from 'react'
import { MdModeEdit } from "react-icons/md";
import './settings-bar-cart.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
const SettingsBarCart = () => {
    return (
        <section className='space-y-12'>
            <div className=" shadow-md border-2 rounded-3xl p-4">
                <div className="TitleBar flex justify-center">
                    <h4 className="text-lg font-semibold">Способ доставки</h4>
                    <MdModeEdit className='text-xl relative bottom-1 left-16' />
                </div>
                <p className="py-4 flex gap-2"><FaMapMarkerAlt />Республика Крым, Симферополь, Киевская улица, 83</p>
                <div className='flex items-center gap-2  font-semibold font-serif w-full justify-center'>
                    <span>Доставим к </span>
                    <span>17 июля</span>
                </div>
            </div>
            <div className="shadow-md border-2 rounded-3xl p-4">
                <div className="TitleBar flex justify-center mb-4">
                    <h4 className="text-lg font-semibold">Способ Оплаты</h4>
                    <MdModeEdit className='text-xl relative bottom-1 left-16' />
                </div>
                <section className="flex flex-col gap-4">
                    <div className="Frame3567 space-x-1 w-fit flex items-center">
                        <CiCreditCard1 className='text-3xl' />
                        <div className="Mir0375 border border-black p-2 rounded-3xl ">Mir &#x2022;&#x2022; 0375</div>
                    </div>
                    <div className="Frame3568 rounded-3xl justify-center items-start border border-black inline-flex">
                        <input
                            type="radio"
                            name='type_payment'
                            className={"toggle-checkbox1 appearance-none w-full h-6 transition-all after:block after:size-full after:relative after:-top-full after:text-center after:rounded-l-3xl " +
                                " rounded-l-3xl overflow-hidden cursor-pointer " +
                                "before:w-full before:h-full before:block before:bg-white before:relative before:transition-all before:duration-500 before:-right-full checked:before:right-0 "
                            }
                        />
                        <input
                            type="radio"
                            name='type_payment'
                            defaultChecked={true}
                            className={"toggle-checkbox appearance-none w-full h-6 transition-all after:block after:size-full after:relative after:-top-full after:text-center after:rounded-r-3xl " +
                                "after:content-['Сразу'] rounded-r-3xl overflow-hidden cursor-pointer " +
                                "before:w-full before:h-full before:block before:bg-white before:relative before:transition-all before:duration-500 before:-left-full checked:before:left-0 "
                            }
                        />
                    </div>
                    <div className=" rounded-[10px] flex-col justify-start items-start gap-[11px] inline-flex">
                        <div className="w-full grid grid-cols-2">
                            <div className="text-center text-neutral-600 text-sm leading-tight">Товары, 1шт</div>
                            <div className="text-center text-neutral-600 text-sm leading-tight">228120 ₽</div>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <div className="text-center text-neutral-600 text-sm leading-tight">Скидка</div>
                            <div className="text-center text-neutral-600 text-sm leading-tight">-10000 ₽</div>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <div className=" text-center text-neutral-600 text-lg font-extrabold font-['Inter'] leading-[25.20px]">Итого</div>
                            <div className=" text-center text-neutral-600 text-lg font-extrabold font-['Inter'] leading-[25.20px]">218120 ₽</div>
                        </div>
                    </div>
                    <button
                        className={
                            "Button relative appearance-none transition-all overflow-hidden p-3 w-full h-full bg-zinc-800 rounded-2xl border border-zinc-800 justify-center items-center " +
                            "gap-2 inline-flex text-neutral-100 leading-none " +
                            "hover:text-black group/buttonbuy "
                        }
                    >
                        <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
                        <span className="relative z-10">Заказать</span>
                        <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
                    </button>
                    <div className="CheckboxField flex-col justify-start items-start inline-flex">
                        <div className="CheckboxAndLabel self-stretch justify-start items-center gap-3 inline-flex">
                            <div className="Checkboxes w-fit">
                                <input type="checkbox" name="" id="" />
                            </div>
                            <div className="Label grow shrink basis-0 text-stone-900 text-sm font-medium font-['Roboto'] leading-tight tracking-tight">Соглашаюсь с правилами использования торговой площадки и возврата</div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SettingsBarCart