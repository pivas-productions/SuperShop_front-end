import React from 'react'
import { Montaga } from 'next/font/google'
import { ProductCard, ProductCardContent, ProductCardPhoto } from '../ui/product_card'
import { SwiperContainer, SwiperSlider } from '../ui/swiper-slider'

const montaga = Montaga({ subsets: ['latin'], weight: ['400'] })

export const Discounts = ({items}) => {
    return (
        <>
            <div className="Main2 w-full bg-rose-200">
                <div className="Discounts ">
                    <div className="TitleSection h-20 ">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className={"px-3 text-4xl tracking-widest font-medium text-gray-900 dark:text-black " + montaga.className}>Discounts</span>
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
                <div className="ProductsList h-96 container mt-4 gap-32 ">
                    <SwiperContainer>
                        {Object.values(items).map((item) => (
                            <SwiperSlider key={item.id}>
                                <ProductCard key={item.id}>
                                    <ProductCardPhoto src={'/435x366.png'} />
                                    <ProductCardContent item={item} />
                                </ProductCard>
                            </SwiperSlider>
                        ))}
                    </SwiperContainer>

                </div>
            </div>
        </>
    )
}
