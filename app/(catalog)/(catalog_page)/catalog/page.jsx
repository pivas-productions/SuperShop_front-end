import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import NoData from '@/components/no-data';
import React from 'react'

const CatalogMainPage = async () => {
    const route = `${process.env.REACT_APP_API_URL_CLIENT}/api/items?populate=general_photos,colors_sizes&format=json`;
    
    const items = await getItems({ pageParam: 1, catalog_slug: "allitems", route: process.env.REACT_APP_API_URL + `/api/items?populate=general_photos,colors_sizes&format=json` });

    if (items.length === 0)
      return (
        <div className='col-span-full row-span-3 place-content-center'>
          <NoData />
        </div>
      )
    return (
        <>
            <CatalogItemsWrapper default_style={items.length > 1 ? 'list' : 'grid'} fetch_route={process.env.REACT_APP_API_URL_CLIENT} items={items} catalog_slug={"allitems"} fetch_key={'catalog_allitems'} backend_href={process.env.REACT_APP_API_URL_CLIENT} route={route}/>
            
        </>
    )
}

export default CatalogMainPage