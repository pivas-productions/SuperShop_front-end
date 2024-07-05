import React from 'react'
import { Montaga } from 'next/font/google'
import { ProductCard, ProductCardContent, ProductCardPhoto } from '../ui/product_card'


const montaga = Montaga({ subsets: ['latin'], weight: ['400'] })

export const MayBeInteresting = ({ items }) => {
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
                <div className="MayBeInteresting grid mt-4 gap-32 grid-cols-3 grid-flow-row gap-y-12">
                    {Object.values(items).map((item) => {
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
