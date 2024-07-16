'use client'
import React, { useRef } from 'react'
import Breadcrumps from './breadcrumps'
import { LinkBack } from '@/components/ui/back-link'
import ImageCarousel from './image-carousel'
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { AccordionContent, AccordionItem, AccordionRoot, AccordionTrigger } from '@/components/ui/accordion';
import ProductPageForm from './product-page-form';
import AddToFavorite from '@/components/add-to-favorite';
import ShareMenu from '@/components/share-menu';
import ReviewsWrapper from './reviews-wrapper';

const ProductPageWrapper = ({ route, items, images }) => {
  const reviewsTrigger = useRef(null)
  const GoToReviews = () => {
    reviewsTrigger.current?.scrollIntoView({
      behavior: 'smooth'
    })
    if (reviewsTrigger.current?.dataset.state != 'open')
      reviewsTrigger.current?.click();
  };

  console.log(items, 'items in product page wrapper')
  return (
    <>
      <div className="w-full px-4 2xl:px-12 py-20 md:py-16 lg:mt-8 flex-col justify-start items-start gap-6 inline-flex">

        <section className='mainContent w-full mt-4 lg:mt-0'>
          <div className="mainInfo flex flex-col 2xl:flex-row  gap-4">
            <div className="ImageBlock h-[40vh] lg:h-[95vh] flex-grow">
            <div className="absolute z-50">
              <div className="mx-auto z-50 absolute lg:static container justify-start items-center inline-flex gap-2">
                <LinkBack />
                <Breadcrumps />
              </div>
            </div>
              <ImageCarousel images={images} />
            </div>
            <div className=" flex-col w-full xl:w-fit xl:items-start lg:self-start mt-12 gap-6 flex">
              <div className='w-full'>
                <div className="text-neutral-500">{items?.categories?.[0].name}</div>
                <div className="text-stone-900 text-6xl font-semibold font-['Inter'] leading-[96px]">{items?.name} </div>
              </div>
              <div className="w-full justify-around items-center inline-flex ">
                <button onClick={GoToReviews} className="Mark flex items-center align-middle gap-1">
                  <FaStar className='w-5 h-5' fill='orange' />
                  <span>4.5</span>
                  <span className='ml-4 underline'>38 отзывов</span>
                </button>
                <div className="blockbutton inline-flex gap-2">
                  <ShareMenu media={images[0].src} />
                  <AddToFavorite />
                </div>
              </div>
              <div className="w-full mx-auto justify-around gap-2 items-center inline-flex ">
                <span>Товар уже купили:</span>
                <span className='self-start'>{items?.order_count} раз</span>
              </div>
              <ProductPageForm items={items} />
            </div>
          </div>
        </section>
        <section className='w-full 2xl:px-6 md:mt-20 xl:mt-0 flex-col justify-start items-start gap-[11px] flex'>
          <div className="flex-col w-full justify-start gap-10 items-start inline-flex">
            <div className="Title text-black text-5xl font-semibold ">
              Description
            </div>
            <div className="Body min-h-28 text-stone-900 whitespace-pre-wrap w-fit">{items.description}</div>
          </div>
          <AccordionRoot collapsible={true} type="single" className='w-full'>
            <AccordionItem value={'characteristics'}>
              <AccordionTrigger>
                <span className="w-full">Characteristics</span>
              </AccordionTrigger>
              <AccordionContent className={' overflow-hidden'}>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <span className="text-stone-900 whitespace-pre-wrap w-fit">{items.feature}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'about_the_brand'}>
              <AccordionTrigger>
                <span className="w-full">About the brand</span>
              </AccordionTrigger>
              <AccordionContent className={' overflow-hidden'}>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <span className="text-stone-900 whitespace-pre-wrap w-fit">{items.brand}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'additional_Information'}>
              <AccordionTrigger>
                <span className="w-full">Additional Information</span>
              </AccordionTrigger>
              <AccordionContent className={' overflow-hidden'}>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <span className="text-stone-900 whitespace-pre-wrap w-fit">{items.information}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'size_table'}>
              <AccordionTrigger>
                <span className="w-full">Size table</span>
              </AccordionTrigger>
              <AccordionContent className={' overflow-hidden'}>
                <div className="AccordionContent self-stretch justify-center items-center inline-flex">
                  <span className="text-stone-900 whitespace-pre-wrap w-fit">Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={'reviews'}>
              <AccordionTrigger ref={reviewsTrigger}>
                <span className="w-full">Reviews</span>
              </AccordionTrigger>
              <AccordionContent className={' overflow-hidden'}>
                <ReviewsWrapper />
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