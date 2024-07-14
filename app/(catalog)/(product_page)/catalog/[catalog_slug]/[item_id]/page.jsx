import ProductPageWrapper from '@/components/catalog/productpage/product-page-wrapper'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const ProductIdPage = ({ params }) => {
  console.log(params)
  const route = process.env.REACT_APP_API_URL_CLIENT;
  // const images = [{ src: 'http://localhost:8000/media/item/4pic.webp' }, { src: '/hover_image.jpg' }, { src: 'http://localhost:8000/media/item/3pic.webp' }];
  const images = [
    {
      src: `${route}/media/item/4pic.webp`,
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
      src: `${route}/media/item/3pic.webp`,
      width: 896,
      height: 414,
      imageFit: 'cover'
    },
  ]
  return (
    <main className='rounded w-screen min-h-screen text-center '>
      <Suspense fallback={<Loading />}>
        <ProductPageWrapper route={route} items={images}/>
      </Suspense>
    </main>
  )
}

export default ProductIdPage