import ProductPageWrapper from '@/components/catalog/productpage/product-page-wrapper'
import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

const ProductIdPage = ({ params }) => {
  console.log(params)
  return (
    <main className='rounded w-screen min-h-screen text-center '>
      <Suspense fallback={<Loading />}>
        <ProductPageWrapper />
      </Suspense>
    </main>
  )
}

export default ProductIdPage