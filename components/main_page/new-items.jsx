import Image from 'next/image'
import React from 'react'
import { Montaga } from 'next/font/google'

const montaga = Montaga({ subsets: ['latin'], weight: ['400']})

export const NewItems = () => {
    return (
        <>
            <div className="Main2 w-full bg-rose-200">
                <div className="NewItems ">
                    <div className="TitleSection h-20 ">
                        <div className="inline-flex items-center justify-center w-full">
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                            <span className={"px-3 text-4xl tracking-widest font-medium text-gray-900 dark:text-black " + montaga.className}>New items</span>
                            <hr className="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                        </div>
                    </div>
                </div>
                <div className="ProductsList h-96 grid mt-4 gap-44 grid-cols-3 ">
                    <div className="ProductCard w-full h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                        <div className="CardPhoto relative w-full h-4/5">
                            <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                        </div>
                        <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex">
                            <div className="FeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">Featured product</div>
                            <div className="DescriptionOfFeaturedProduct self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-loose">Description of featured product</div>
                            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">$XX.YY</div>
                        </div>
                    </div>
                    <div className="ProductCard w-full h-96 pb-5  bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                    <div className="CardPhoto relative w-full h-4/5">
                            <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                        </div>
                        <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex">
                            <div className="FeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">Featured product</div>
                            <div className="DescriptionOfFeaturedProduct self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-loose">Description of featured product</div>
                            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">$XX.YY</div>
                        </div>
                    </div>
                    <div className="ProductCard w-full h-96 pb-5 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                    <div className="CardPhoto relative w-full h-4/5">
                            <Image fill className="Image w-96 h-96 rounded-lg" src="/435x366.png" alt='' />
                        </div>
                        <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex">
                            <div className="FeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">Featured product</div>
                            <div className="DescriptionOfFeaturedProduct self-stretch text-zinc-500 text-xl font-medium font-['Inter'] leading-loose">Description of featured product</div>
                            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">$XX.YY</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
