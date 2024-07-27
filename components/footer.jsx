import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaViber, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from "react-icons/sl";
import { RiMastercardFill, RiVisaLine } from "react-icons/ri";

import './footer.css'
import Image from 'next/image';
const FooterMain = () => {
    return (
        <footer className='footer w-full border-t-black border-t bg-main-bg-to-white flex flex-col justify-around items-center'>
            <div className="w-full px-32 py-9 border-b-black border-b md:grid md:grid-cols-12">
                <div className="md:col-span-3 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Информация</div>
                    <div className="md:flex-col flex-wrap w-full justify-center md:justify-start items-start gap-8 md:gap-4 flex">
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Как купить</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Условия оплаты</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Условия доставки</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Гарантия на товар</Link>
                    </div>
                </div>
                <div className="md:col-span-3 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Компания</div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">О компании</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Магазины</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Политика безопасности</Link>
                    </div>
                </div>
                <div className="md:col-start-9 md:col-end-13 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Контакты</div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <Link href={"tel:+79081851807"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">+7 (908) 185-18-07</Link>
                        <Link href={"mailto:sales@santemo.ru"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">sales@supershop.ru</Link>
                        <Link href={"https://yandex.ru/maps/-/CDCzIJ74"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal text-wrap">г. Ростов-на-Дону, р-н Западный, ул. Мильчакова 8А</Link>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">
                            <p>Режим работы:</p>
                            <p>Ежедневно 10:00 - 21:00</p>
                        </div>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">
                            <p>ООО «Pivas production», ОГРН 120777049888</p>
                            <p>ИНН: 9777033666, КПП: 772401111</p>
                        </div>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal flex gap-2">
                            <span>SuperShop.ru © все права защищены</span>
                            <span>2024</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-screen py-9 border-b-black bg-black border-b flex flex-col md:grid md:grid-cols-12 gap-y-8">
                <div className="footer_icons flex gap-x-6 py-1 px-8 col-span-8 justify-center md:justify-normal">
                    <Link href="https://instagram.com/" target="_blank" title="Instagram" rel="noopener noreferrer">
                        <div className="footer_icon inline-flex w-16 h-16 rounded-full outline-white outline-2 transition-all duration-[0.25s] text-white hover:outline-offset-4">
                            <FaInstagram className='footer_icon_svg m-auto text-[1.7em]' />
                        </div>
                    </Link>

                    <Link href="https://wa.me/" target="_blank" title="Facebook" rel="noopener noreferrer">
                        <div className="footer_icon inline-flex w-16 h-16 rounded-full outline-white outline-2 transition-all duration-[0.25s] text-white hover:outline-offset-4">
                            <FaFacebook className='footer_icon_svg m-auto text-[1.7em]' />
                        </div>
                    </Link>

                    <Link href="https://msng.link/" target="_blank" title="Viber" rel="noopener noreferrer">
                        <div className="footer_icon inline-flex w-16 h-16 rounded-full outline-white outline-2 transition-all duration-[0.25s] text-white hover:outline-offset-4">
                            <FaViber className='footer_icon_svg m-auto text-[1.7em]' />
                        </div>
                    </Link>
                    <Link href="https://wa.me/" target="_blank" title="WhatsApp" rel="noopener noreferrer">
                        <div className="footer_icon inline-flex w-16 h-16 rounded-full outline-white outline-2 transition-all duration-[0.25s] text-white hover:outline-offset-4">
                            <FaWhatsapp className='footer_icon_svg m-auto text-[1.7em]' />
                        </div>
                    </Link>
                    <Link href="https://vk.com/" target="_blank" title="Vkontakte" rel="noopener noreferrer">
                        <div className="footer_icon inline-flex w-16 h-16 rounded-full outline-white outline-2 transition-all duration-[0.25s] text-white hover:outline-offset-4">
                            <SlSocialVkontakte className='footer_icon_svg m-auto text-[1.7em]' />
                        </div>
                    </Link>
                </div>
                <div className="footer_icons flex py-1 px-8 col-span-4 text-gray-200">
                    <RiVisaLine className='footer_icon_svg m-auto w-10 h-10' />
                    <RiMastercardFill className='footer_icon_svg m-auto w-10 h-10' />
                    <Image width={'40'} height={'40'} src={'/mir-card.svg'} alt='payment variant MIR' className='footer_icon_svg m-auto w-10 h-10' />

                </div>
            </div>
        </footer>
    )
}

export default FooterMain