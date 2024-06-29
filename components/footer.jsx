import React from 'react'
import Link from 'next/link';
const FooterMain = () => {
    return (
        <footer className='footer w-full border-t-black border-t bg-main-bg-to-white flex flex-col justify-around items-center'>
            <div className="w-full px-32 py-9 border-b-black border-b md:grid md:grid-cols-12">
                <div className="md:col-span-3 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Информация</div>
                    <div className="md:flex-col flex-wrap w-full justify-center md:justify-start items-start gap-8 md:gap-4 flex">
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Помощь</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Как купить</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Условия оплаты</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Условия доставки</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Гарантия на товар</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Бренды</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Блог</Link>
                    </div>
                </div>
                <div className="md:col-span-3 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Компания</div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">О компании</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Отзывы</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Вакансии</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Магазины</Link>
                        <Link href={""} className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">Политика безопасности</Link>
                    </div>
                </div>
                <div className="md:col-start-9 md:col-end-13 p-2 flex flex-col gap-6 border-b-black border-b md:border-b-0">
                    <div className="h-7 text-zinc-800 text-xl font-semibold font-['Inter'] leading-normal">Контакты</div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <Link href={"tel:+74950217484"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">+7 (495) 021-74-84</Link>
                        <Link href={"mailto:sales@santemo.ru"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">sales@santemo.ru</Link>
                        <Link href={"https://yandex.ru/maps/-/CDCzIJ74"} target='_blank' className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal text-wrap">г. Москва, м. Домодедовская,25 км МКАД,ТЦ Конструктор, Главный корпус, павильон 1.26</Link>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">
                            <p>Режим работы:</p>
                            <p>Ежедневно 10:00 - 21:00</p>
                        </div>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal">
                            <p>ООО «Сантемо», ОГРН 120770049810</p>
                            <p>ИНН: 9724033166, КПП: 772401001</p>
                        </div>
                        <div className="text-zinc-800 text-lg font-normal font-['Inter'] leading-normal flex gap-2">
                            <span>santemo.ru © все права защищены</span>
                            <span>2023</span>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    )
}

export default FooterMain