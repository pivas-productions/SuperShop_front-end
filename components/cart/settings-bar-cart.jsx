'use client'
import React from 'react'
import './settings-bar-cart.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { CiCreditCard1 } from 'react-icons/ci';
import { CheckboxIndicator, CheckboxRoot } from '../ui/checkbox';
import { EditDialogForCart } from './edit-dialog-for-cart';
import { AddNewMehod } from './add-new-method-cart';
import CreditCardForm from './creditCardForm';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from '../ui/tabs';

import dynamic from 'next/dynamic';

const NewAddressForm = dynamic(() => import('./new-address-form'), { ssr: false });

const MapWithNoSSR = dynamic(() => import('@/components/pickup-maps'), { ssr: false });

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

const SettingsBarCart = ({ fetch_route, item, searchParams }) => {
    console.log('item',item)
    const [openDeliveryDialog, setOpenDeliveryDialog] = React.useState(false);
    const [openPaymentDialog, setOpenPaymentDialog] = React.useState(false);

    const handleOpenDeliveryDialog = (isOpen) => {
        setOpenPaymentDialog(false); // Закрыть диалог способа оплаты
        setOpenDeliveryDialog(isOpen);
    }

    const handleOpenPaymentDialog = (isOpen) => {
        setOpenDeliveryDialog(false); // Закрыть диалог способа доставки
        setOpenPaymentDialog(isOpen);
    }

    const handleSubmit = () => {
        wait().then(() => {
            setOpenDeliveryDialog(false);
            setOpenPaymentDialog(false);
        });
    }
    // const [open, setOpen] = React.useState(false);
    // const handleSubmit = () => {
    //     wait().then(() => setOpen(false));
    // }
    return (
        <section className='space-y-12'>
            <div className=" shadow-md border-2 rounded-3xl p-4">
                <div className="TitleBar flex justify-center">
                    <h4 className="text-lg font-semibold">Способ доставки</h4>
                    <EditDialogForCart open={openDeliveryDialog} onOpenChange={handleOpenDeliveryDialog} title={'Способ доставки'} >
                        <TabsRoot defaultValue={'Pickup'}>
                            <TabsList>
                                <TabsTrigger value={'Pickup'}>
                                    Самовывоз
                                </TabsTrigger>
                                <TabsTrigger value={'Delivery'}>
                                    Доставка
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value={'Pickup'}>
                                
                                <MapWithNoSSR />
                            </TabsContent>
                            <TabsContent value={'Delivery'}>
                                <div className='space-y-4 text-center'>
                                    <form className="space-y-4 text-center"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="radio-item">
                                            <input className="hidden peer" onChange={handleSubmit} name="radio" id="radio1" type="radio" />
                                            <label
                                                className="flex justify-end items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                    after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                    before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible
                                                    before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                    peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                    "
                                                htmlFor="radio1"
                                            >
                                                <FaMapMarkerAlt />
                                                <span className="border w-3/4 border-black p-2 rounded-3xl ">Республика Крым, Симферополь, Киевская улица, 83</span>
                                            </label>
                                        </div>
                                        <div className="radio-item">
                                            <input className="hidden peer" onChange={handleSubmit} name="radio" id="radio2" type="radio" />
                                            <label
                                                className="flex justify-end items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                    after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                    before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible
                                                    before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                    peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                    "
                                                htmlFor="radio2"
                                            >
                                                <FaMapMarkerAlt />
                                                <span className="border w-3/4 border-black p-2 rounded-3xl ">Республика Крым, Симферополь, Киевская улица, 83</span>
                                            </label>
                                        </div>
                                        <div className="radio-item">
                                            <input className="hidden peer" onChange={handleSubmit} name="radio" id="radio3" type="radio" />
                                            <label
                                                className="flex justify-end items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                    after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                    before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible
                                                    before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                    peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                    "
                                                htmlFor="radio3"
                                            >
                                                <FaMapMarkerAlt />
                                                <span className="border w-3/4 border-black p-2 rounded-3xl ">Республика Крым, Симферополь, Киевская улица, 83</span>
                                            </label>
                                        </div>
                                    </form>
                                    <AddNewMehod type={'new_address'} title={'Новый способ доставки'} closeDialogFunc={setOpenDeliveryDialog}>
                                        <NewAddressForm fetch_route={fetch_route} />
                                    </AddNewMehod>
                                </div>
                            </TabsContent>
                        </TabsRoot>

                    </EditDialogForCart>
                    {/* <MdModeEdit className='text-xl relative bottom-1 left-16' /> */}
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
                    <EditDialogForCart title={'Способ Оплаты'} >
                        <div className="space-y-4 text-center max-h-96 overflow-auto">
                            <div className="radio-item">
                                <input className="hidden peer" name="radio" id="radio1" type="radio" />
                                <label
                                    className="flex justify-center items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible 
                                                before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                "
                                    htmlFor="radio1"
                                >Наличные</label>
                            </div>
                            <div className="radio-item">
                                <input className="hidden peer" name="radio" id="radio2" type="radio" />
                                <label
                                    className="flex justify-center items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible 
                                                before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                "
                                    htmlFor="radio2"
                                >
                                    <CiCreditCard1 className='text-3xl' />
                                    <span className="Mir0375 border border-black p-2 rounded-3xl ">Mir &#x2022;&#x2022; 0375</span>
                                </label>
                            </div>
                            <div className="radio-item">
                                <input className="hidden peer" name="radio" id="radio3" type="radio" />
                                <label
                                    className="flex justify-center items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible 
                                                before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                "
                                    htmlFor="radio3"
                                >
                                    <CiCreditCard1 className='text-3xl' />
                                    <span className="Mir0375 border border-black p-2 rounded-3xl ">Mir &#x2022;&#x2022; 0375</span>
                                </label>
                            </div>
                            <div className="radio-item">
                                <input className="hidden peer" name="radio" id="radio4" type="radio" />
                                <label
                                    className="flex justify-center items-center space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative
                                                after:absolute after:rounded-full after:h-[1.5rem] after:w-[1.5rem] after:border-2 after:border-pink-300 after:left-[2rem]
                                                before:absolute before:rounded-full before:h-[1.55rem] before:w-[1.55rem] before:bg-pink-300/80 before:opacity-0 before:invisible 
                                                before:transition-all duration-300 before:ease-in-out before:scale-150 before:left-[2rem] peer-checked:border-pink-300
                                                peer-checked:before:opacity-100 peer-checked:before:visible peer-checked:before:scale-100
                                                "
                                    htmlFor="radio4"
                                >
                                    <CiCreditCard1 className='text-3xl' />
                                    <span className="Mir0375 border border-black p-2 rounded-3xl ">Новая карта</span>
                                </label>
                            </div>
                            {/* <AddNewMehod type={'new_card'} title={'Новый способ оплаты'} >
                                <CreditCardForm />
                            </AddNewMehod> */}
                        </div>
                    </EditDialogForCart>
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
                            <div className="text-center text-neutral-600 text-sm leading-tight">Товары, {item.items[0].length}1шт</div>
                            <div className="text-center text-neutral-600 text-sm leading-tight">{item.without_discount} ₽</div>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <div className="text-center text-neutral-600 text-sm leading-tight">Скидка</div>
                            <div className="text-center text-neutral-600 text-sm leading-tight">{item.total_cost - item.without_discount} ₽</div>
                        </div>
                        <div className="w-full grid grid-cols-2">
                            <div className=" text-center text-neutral-600 text-lg font-extrabold font-['Inter'] leading-[25.20px]">Итого</div>
                            <div className=" text-center text-neutral-600 text-lg font-extrabold font-['Inter'] leading-[25.20px]">{item.total_cost} ₽</div>
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
                            <CheckboxRoot id={'agree_rules'} colors={'blacked'} size={'xs'} effect={'sm'}>
                                <CheckboxIndicator />
                            </CheckboxRoot>
                            <label htmlFor='agree_rules' className="align-middle Label text-stone-900 text-sm font-medium font-['Roboto'] leading-none tracking-tight">Соглашаюсь с правилами использования торговой площадки и возврата</label>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SettingsBarCart