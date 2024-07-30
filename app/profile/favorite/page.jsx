import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import FavoriteTabs from '@/components/favorite/favorite-tabs';
import Loading from '@/components/Loading';
import NoData from '@/components/no-data';
import { ProductCard, ProductCardContent, ProductCardPhoto } from '@/components/ui/product_card';
import ReactQueryProvider from '@/components/ui/ReactQuery';
import { cookies } from 'next/headers';
import React, { Suspense } from 'react'

export default async function FavoritePage() {
    const route = `${process.env.REACT_APP_API_URL_CLIENT}`
    const cookieStore = cookies();
    const cookieString = cookieStore.getAll().map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/favourites/`, {
        headers: {
            'Content-type': 'application/json',
            'Cookie': cookieString
        },
        credentials: 'include',
        next: {

        }
    });
    let items = await res.json();
    items = items?.results?.[0]?.items
    // const items = await getItems({ pageParam: 1, route: process.env.REACT_APP_API_URL + `/api/items?populate=general_photos&format=json` });

    if (Object.values(items).length === 0)
        return (
            <div className='col-span-full row-span-3 place-content-center'>
                <NoData />
            </div>
        )
    return (
        <main className="w-full min-h-screen p-2 lg:ml-10">
            <div className="mt-10 text-6xl  font-['Roboto'] ">Избранное</div>
            <FavoriteTabs/>
            <div className="ProductsList  grid mt-4 gap-12 xl:gap-10 px-6 grid-cols-3 ">
                {Object.values(items).map((item) => {                 
                       item = {
                            id: item.item_id,
                            name: item.product_name,
                            price: item.product_price,
                            price_with_discount: item.product_price_with_discount,
                            general_photo_one: item.product_image_1,
                            general_photo_two: item.product_image_2
                        }
                        return (
                           <ProductCard seen_style='grid' href={'/catalog/items/'+item.id} key={item.id}>
                            <ProductCardPhoto src_main={item.general_photo_one ? item.general_photo_one : '/435x366.png'} src_hover={item.general_photo_two ? item.general_photo_two : '/hover_image.jpg'}/>
                            <ProductCardContent item={item} fetch_route={route}/>
                            </ProductCard>
                        )
                    })}
                </div>
        </main>
    )
}
