import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import FavoriteTabs from '@/components/favorite/favorite-tabs';
import ToolButtons from '@/components/favorite/tool-buttons';
import Loading from '@/components/Loading';
import NoData from '@/components/no-data';
import ReactQueryProvider from '@/components/ui/ReactQuery';
import React, { Suspense } from 'react'

export default async function FavoriteSlugPage({params}) {
    console.log('params',params)
    const route = `${process.env.REACT_APP_API_URL_CLIENT}/api/items?populate=general_photos&format=json`;
    const items = await getItems({ pageParam: 1,route: process.env.REACT_APP_API_URL + `/api/items?populate=general_photos&format=json` });

    if (items.length === 0)
        return (
            <div className='col-span-full row-span-3 place-content-center'>
                <NoData />
            </div>
        )
    return (
        <main className="min-h-screen pt-28">
            <ToolButtons/>
            <section className="catalog_main col-span-full grid grid-cols-3 lg:grid-cols-5 mt-4 py-2 px-10 lg:px-5 gap-4 text-center">
                <ReactQueryProvider>
                <Suspense fallback={<Loading />}>
                <CatalogItemsWrapper default_style={'grid'} items={items} catalog_slug={"params.catalog_slug"} route={route} backend_href={process.env.REACT_APP_API_URL_CLIENT} fetch_key={'favorite'} />
                    </Suspense>
                </ReactQueryProvider>
            </section>
        </main>
    )
}
