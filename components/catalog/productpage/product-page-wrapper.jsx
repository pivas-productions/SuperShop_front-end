import React from 'react'
import Breadcrumps from './breadcrumps'
import { LinkBack } from '@/components/ui/back-link'
import ImageCarousel from './image-carousel'
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '@/components/ui/accordion';
import ProductPageForm from './product-page-form';
import AddToFavorite from '@/components/add-to-favorite';
import ShareMenu from '@/components/share-menu';

const ProductPageWrapper = () => {
  // const images = [{ src: 'http://localhost:8000/media/item/4pic.webp' }, { src: '/hover_image.jpg' }, { src: 'http://localhost:8000/media/item/3pic.webp' }];
  const images = [
    {
      src: "http://localhost:8000/media/item/4pic.webp",
      width: 896,
      height: 414,
      imageFit: 'cover'
    },
    {
      src: "/hover_image.jpg",
      width: 896,
      height: 414,
      imageFit: 'cover'
    },
    {
      src: "http://localhost:8000/media/item/3pic.webp",
      width: 896,
      height: 414,
      imageFit: 'cover'
    },
  ]
  return (
    <>
      <div className="w-full 2xl:container py-16 lg:mt-16 flex-col justify-start items-start gap-6 inline-flex">
        <div className="mx-auto z-30 absolute lg:static container justify-start items-center inline-flex gap-2">
          <LinkBack />
          <Breadcrumps />
        </div>
        <section className='mainContent w-full lg:px-6'>
          <div className="mainInfo flex flex-col lg:flex-row  gap-4">
            <div className="ImageBlock h-[70vh] flex-grow">
              <ImageCarousel images={images} />
            </div>
            <div className=" self-stretch flex-col justify-center items-start gap-6 inline-flex">
              <div className='w-full'>
                <div className="text-neutral-500">Category</div>
                <div className="text-stone-900 text-6xl font-semibold font-['Inter'] leading-[96px]">Name </div>
              </div>
              <div className="w-full justify-around items-center inline-flex ">

                <Link href={'#'} className="Mark flex items-center align-middle gap-1">
                  <FaStar className='w-5 h-5' fill='orange' />
                  <span>4.5</span>
                  <span className='ml-4 underline'>38 отзывов</span>
                </Link>
                <div className="blockbutton inline-flex gap-2">
                  <ShareMenu />
                  <AddToFavorite />
                </div>
              </div>
              {/* <div className="pl-1.5 pr-7 pt-[7.50px] pb-[22.50px] flex-col justify-start items-start gap-[61px] flex">
                <div className="flex-col justify-center items-center gap-4 inline-flex">
                  <div className="Size py-5 pl-3 self-start">
                    Size
                  </div>
                  <div className="self-stretch justify-center items-start gap-7 inline-flex">
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-full border flex justify-center items-center text-white border-zinc-800">
                      XS
                    </div>
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-[32px] border flex justify-center items-center text-white border-zinc-800">
                      S
                    </div>
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-full border flex justify-center items-center text-white border-zinc-800">
                      M
                    </div>
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-full border flex justify-center items-center text-white border-zinc-800">
                      XL
                    </div>
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-full border flex justify-center items-center text-white border-zinc-800">
                      XXL
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center gap-4 inline-flex">
                  <div className="py-5 pl-3 self-start">
                    Colors
                  </div>
                  <div className="ColorsSelect self-stretch justify-center items-start gap-7 inline-flex">
                    <div className="w-14 h-14 p-3 bg-zinc-800 rounded-full border flex justify-center items-center text-white border-zinc-800" />
                    <div className="w-14 h-14 p-3 bg-red-800 rounded-full border flex justify-center items-center text-white border-zinc-800" />
                    <div className="w-14 h-14 p-3 bg-green-800 rounded-full border flex justify-center items-center text-white border-zinc-800" />
                    <div className="w-14 h-14 p-3 bg-pink-800 rounded-full border flex justify-center items-center text-white border-zinc-800" />
                    <div className="w-14 h-14 p-3 bg-blue-800 rounded-full border flex justify-center items-center text-white border-zinc-800" />
                  </div>
                </div>
              </div>
              <div className="w-full space-y-8">
                <div className="PriceBlock inline-flex h-20 gap-2">
                  <div className="self-center text-stone-900 text-6xl font-bold">$50</div>
                  <div className="self-start text-zinc-400 text-5xl font-bold line-through ">$50</div>
                </div>
                <div className="buttonBlock space-y-2">
                  <div className="p-3 bg-zinc-800 rounded-lg border border-zinc-800 text-neutral-100">
                    Add to cart
                  </div>
                  <div className="w-1/2 mx-auto p-3 bg-zinc-400 rounded-lg border border-zinc-800 text-zinc-800 ">
                    Buy one click
                  </div>
                </div>
              </div> */}
              <ProductPageForm />
            </div>
          </div>
        </section>
        <section className='w-full lg:px-6 flex-col justify-start items-start gap-[11px] flex'>
          <div className="flex-col w-full justify-start gap-10 items-start inline-flex">
            <div className="Title text-black text-5xl font-semibold ">
              Description
            </div>
            <div className="Body min-h-28 text-stone-900">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
          </div>
          <AccordionRoot collapsible={true} type="single" className='w-full'>
            <AccordionItem value={'characteristics'}>
              <AccordionTrigger>
                <span className="w-full">Characteristics</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <div className="text-stone-900">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'about_the_brand'}>
              <AccordionTrigger>
                <span className="w-full">About the brand</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <div className="text-stone-900">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'additional_Information'}>
              <AccordionTrigger>
                <span className="w-full">Additional Information</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <div className="text-stone-900">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'size_table'}>
              <AccordionTrigger>
                <span className="w-full">Size table</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <div className="text-stone-900">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</div>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* TODO: add noraml reviews */}
            <AccordionItem value={'reviews'}>
              <AccordionTrigger>
                <span className="w-full">Reviews</span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <div className="text-stone-900">Add the review component</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </AccordionRoot>
          {/* TODO: Add Slider SimilarProducts */}
          {/* <div className=" w-[1792px] h-[461px] relative">
              <div className="Slider w-[1792px] h-[336px] p-16 left-0 top-[64px] absolute opacity-80 bg-white justify-start items-start gap-12 inline-flex">
                <img className="Image w-[300px] self-stretch" src="https://via.placeholder.com/300x208" />
                <img className="Image w-[300px] self-stretch" src="https://via.placeholder.com/300x208" />
                <img className="Image w-[300px] self-stretch" src="https://via.placeholder.com/300x208" />
                <img className="Image w-[300px] self-stretch" src="https://via.placeholder.com/300x208" />
                <img className="Image w-[300px] self-stretch" src="https://via.placeholder.com/300x208" />
              </div>
              <div className=" w-[529px] h-[60px] left-[71px] top-[4px] absolute text-black text-[32px] font-semibold font-['Inter'] leading-[44.80px]">Похожие товары</div>
            </div> */}
        </section>
      </div>
    </>
  )
}

export default ProductPageWrapper