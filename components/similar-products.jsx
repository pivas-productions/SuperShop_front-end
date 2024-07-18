'use server'
import React from 'react'
import CatalogItemsWrapper from './catalog/catalog-items-wrapper';
import getItems from '@/actions/getItems';

const SimilarProducts = async ({ title, category }) => {
    const route = `${process.env.REACT_APP_API_URL_CLIENT}/api/categories/${category}/items?populate=general_photos&format=json`;
    const items = await getItems({ pageParam: 1, catalog_slug: category, route: process.env.REACT_APP_API_URL + `/api/categories/${category}/items?populate=general_photos&format=json` });

    return (
        <div className='space-y-10'>
            <h3 className='text-4xl font-semibold text-left mx-auto container '>{title}</h3>
            <section className="container mx-auto min-h-96 md:min-h-[30rem] col-span-10 grid grid-cols-4 grid-rows-3 gap-4 pl-4">
                <CatalogItemsWrapper default_style={'grid'} items={items} catalog_slug={category} backend_href={process.env.REACT_APP_API_URL_CLIENT} route={route} fetch_key={'similar_products_' + category} />
            </section>
        </div>

    )
}

export default SimilarProducts