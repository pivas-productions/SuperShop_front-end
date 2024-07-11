import getItems from '@/actions/getItems';
import CatalogItemsWrapper from '@/components/catalog/catalog-items-wrapper';
import NoData from '@/components/no-data';
import React from 'react'

const CatalogMainPage = async () => {
    const route = process.env.REACT_APP_API_URL;

    const items = await getItems({ pageParam: 1, catalog_slug: "allitems", route: route });

    if (items.length === 0)
      return (
        <div className='col-span-full row-span-3 place-content-center'>
          <NoData />
        </div>
      )
    return (
        <>
            <CatalogItemsWrapper items={items} catalog_slug={"allitems"} route={route}/>
            
        </>
    )
}

export default CatalogMainPage