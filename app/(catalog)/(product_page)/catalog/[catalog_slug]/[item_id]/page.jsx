import ProductPageWrapper from '@/components/catalog/productpage/product-page-wrapper'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const ProductIdPage = ({ params }) => {
  console.log(params)
  return (
    <section className='rounded w-screen min-h-screen text-center '>
      <Suspense fallback={<Loading />}>
        <ProductPageWrapper />
      </Suspense>
    </section>
  )
}

export default ProductIdPage