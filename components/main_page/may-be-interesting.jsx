import React from 'react'
import { Montaga } from 'next/font/google'
import { ProductCard, ProductCardContent, ProductCardPhoto } from '../ui/product_card'
import { CarouselBlaze } from '../ui/carousel-blaze'


const montaga = Montaga({ subsets: ['latin'], weight: ['400'] })

export const MayBeInteresting = ({ items }) => {
    const route = process.env.REACT_APP_API_URL_CLIENT
    return (
        <>
            <div className="Main2 w-full bg-rose-200">
                <div className="MayBeInteresting ">
                    <div className="TitleSection h-20 ">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className={"px-3 text-4xl tracking-widest font-medium text-gray-900 dark:text-black " + montaga.className}>You may be interesting</span>
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
                <div className="MayBeInteresting  mt-4">
                    <CarouselBlaze slidesToShow={1} loop={true} slideGap='0rem'>
                    {Array.from({length:(Math.ceil(Object.values(items).length / 6))}, (_ , i) => i+1).map((i) => {
                        const items_ = Object.values(items) 
                        return (
                        <div className="codename grid grid-cols-3 grid-rows-2 gap-32" key={i}>
                            {Object.values(items).slice((i-1)*6,(i-1)*6+6).map((item) => {
                                return (
                                    <ProductCard seen_style='list' href={'/catalog/items/' + item.id} key={item.id}>
                                        <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? route + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? route + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
                                        <ProductCardContent item={item} />
                                    </ProductCard>
                                )
                            })}
                        </div>
                    )})}
                    </CarouselBlaze>
                </div>
            </div>
        </>
    )
}
