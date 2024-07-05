import React from 'react'
import { Montaga } from 'next/font/google'
import { ProductCard, ProductCardContent, ProductCardPhoto } from '../ui/product_card'


const montaga = Montaga({ subsets: ['latin'], weight: ['400'] })

export const NewItems = ({ items }) => {
    return (
        <>
            <div className="Main2 w-full bg-rose-200">
                <div className="NewItems ">
                    <div className="TitleSection h-20 ">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                            <span className={"px-3 text-4xl tracking-widest font-medium text-gray-900 dark:text-black " + montaga.className}>New items</span>
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
                <div className="ProductsList h-96 grid mt-4 gap-32 grid-cols-3 ">
                    {Object.values(items).slice(0, 3).map((item) => {
                        // console.log(item)
                        return (
                            <ProductCard key={item.id}>
                                <ProductCardPhoto src={'/435x366.png'} />
                                <ProductCardContent item={item} />
                            </ProductCard>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
