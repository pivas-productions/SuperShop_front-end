import React from 'react'
import { Montaga } from 'next/font/google'
import { ProductCard, ProductCardContent, ProductCardPhoto } from '../ui/product_card'
import { SwiperContainer, SwiperSlider } from '../ui/swiper-slider'
import { CarouselBlaze } from '../ui/carousel-blaze'

const montaga = Montaga({ subsets: ['latin'], weight: ['400'] })

export const Discounts = ({items}) => {
    const route = process.env.REACT_APP_API_URL_CLIENT
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
                <div className="ProductsList h-96 container mt-4 gap-32">
                    <CarouselBlaze slidesToShow={3} loop={true} slideGap='8rem'>
                        {Object.values(items).map((item) => (
                                <ProductCard seen_style='grid' href={'/catalog/items/'+item.id} key={item.id}>
                                    <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? route + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? route + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
                                    <ProductCardContent item={item} fetch_route={fetch_route}/>
                                </ProductCard>
                        ))}
                    </CarouselBlaze>

                </div>
            </div>
        </>
    )
}
