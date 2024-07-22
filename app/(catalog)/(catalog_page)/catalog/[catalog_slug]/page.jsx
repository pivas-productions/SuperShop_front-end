import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import NoData from '@/components/no-data';
import React from 'react'

const CatalogNamePage = async ({ params, searchParams }) => {
  let route = `${process.env.REACT_APP_API_URL_CLIENT}/api/categories/${params.catalog_slug}/items?populate=general_photos,colors_sizes&format=json`;
  let routeServer = process.env.REACT_APP_API_URL + `/api/categories/${params.catalog_slug}/items?populate=general_photos,colors_sizes&format=json`;
  if(searchParams){

    Object.entries(searchParams).map(([key, value]) => {

      route += `&${key}=${value}`;
      routeServer += `&${key}=${value}`;
    })
  }
  const items = await getItems({ pageParam: 1, catalog_slug: params.catalog_slug, route: routeServer});

  if (items.length === 0)
    return (
      <div className='col-span-full row-span-3 place-content-center'>
        <NoData />
      </div>
    )

  return (
    <>
      <CatalogItemsWrapper default_style={items.length > 1 ? 'list' : 'grid'} fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items} catalog_slug={params.catalog_slug} backend_href={process.env.REACT_APP_API_URL_CLIENT} route={route} fetch_key={'catalog_' + params.catalog_slug} searchParams={searchParams}/>
    </>
  )
}

export default CatalogNamePage