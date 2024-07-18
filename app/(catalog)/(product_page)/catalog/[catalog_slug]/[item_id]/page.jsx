import ProductPageWrapper from '@/components/catalog/productpage/product-page-wrapper'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const ProductIdPage = async ({ params }) => {
  console.log(params)
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/items/${params.item_id}?populate=all_photo,colors_sizes,categories`
    , {
      next: { revalidate: 100 } // 3600
  });
  const items = await res.json();
  console.log(items)
  const route = process.env.REACT_APP_API_URL_CLIENT;
  let images = items?.all_photos?.reduce((acc, curVal) => {
    acc = [
      ...acc,
      {
        alt: `${curVal?.photo?.name}`,
        src: `${route + curVal?.photo?.photo}`,
        width: 896,
        height: 414,
        imageFit: 'cover',
      }
    ]
    return acc;
  }, [])
  if (items.all_photos == undefined)
    images = [
      {
        alt: `${'image'}`,
        src: `${'/no_photo.jpg'}`,
        width: 896,
        height: 414,
        imageFit: 'cover',
      }
    ]
  console.log(images, 'images')
  return (
    <main className='rounded w-screen min-h-screen text-center '>
      <Suspense fallback={<Loading />}>
        <ProductPageWrapper route={route} items={items} images={images}/>
      </Suspense>
    </main>
  )
}

export default ProductIdPage