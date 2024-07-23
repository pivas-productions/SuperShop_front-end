'use server'
import React from 'react'
import CatalogItemsWrapper from './catalog/catalog-items-wrapper';
import getItems from '@/actions/getItems';

const SimilarProducts = async ({ fetch_route, title, category }) => {
    const route = `${process.env.REACT_APP_API_URL_CLIENT}/api/categories/${category}/items?populate=general_photos,colors_sizes&format=json`;
    const items = await getItems({ pageParam: 1, catalog_slug: category, route: process.env.REACT_APP_API_URL + `/api/categories/${category}/items?populate=general_photos,colors_sizes&format=json` });

    return (

        <div className='w-full px-4 2xl:px-12 py-20 md:py-16 lg:mt-8 flex-col justify-start items-start gap-6 space-y-6 flex'>
            <h3 className='text-4xl font-semibold text-center lg:text-left pl-4 lg:pl-16 '>{title}</h3>
            <section className="container mx-auto min-h-96 md:min-h-[30rem] col-span-10 grid grid-cols-3 lg:grid-cols-4 grid-rows-3 gap-4 pl-10 pr-4 xl:pr-0">
                <CatalogItemsWrapper default_style={'grid'} fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items} catalog_slug={category} backend_href={process.env.REACT_APP_API_URL_CLIENT} route={route} fetch_key={'similar_products_' + category} />

            </section>
        </div>

    )
}

export default SimilarProducts