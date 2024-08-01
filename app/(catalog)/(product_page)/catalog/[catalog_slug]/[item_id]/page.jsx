import ProductPageWrapper from '@/components/catalog/productpage/product-page-wrapper'
import Loading from '@/components/Loading'
import SimilarProducts from '@/components/similar-products'
import ReactQueryProvider from '@/components/ui/ReactQuery'
import React, { Suspense } from 'react'

const ProductIdPage = async ({ params }) => {
  // console.log(params)
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${params.item_id}?populate=all_photo,colors_sizes,categories`
    , {
      next: { revalidate: 100 } // 3600
    });
  const items = await res.json();
  // console.log(items.all_photo, 'items.categories')
  const route = process.env.REACT_APP_API_URL_CLIENT;
  let images = items?.all_photo.reduce((acc, curVal) => {
    acc = [
      ...acc,
      {
        alt: `${curVal?.photo?.name}`,
        src: `${route + curVal?.photo?.photo}`,
        width: 1920,
        height: 1080,
        imageFit: 'cover',
      }
    ]
    return acc;
  }, [])
  // console.log(images.length, 'images', images)
  if(!(images.length)) {
    images.push(
      {
        alt: `no-image`,
        src: `/no_photo.jpg`,
        width: 896,
        height: 414,
        imageFit: 'cover',
      }
    )
  }
  // console.log(images, 'images')
  return (
    <main className='rounded w-screen min-h-screen text-center '>
      <Suspense fallback={<Loading />}>
        <ProductPageWrapper route={route} items={items} images={images} />
      </Suspense>

      <ReactQueryProvider>
        <Suspense fallback={<Loading />}>
          <SimilarProducts title={'С этим товаром покупают'}  fetch_route={process.env.REACT_APP_API_URL_CLIENT} category={items?.categories?.[0]?.slug} arr_ids={[Number(params.item_id)]} />
        </Suspense>
      </ReactQueryProvider>
    </main>
  )
}

export default ProductIdPage