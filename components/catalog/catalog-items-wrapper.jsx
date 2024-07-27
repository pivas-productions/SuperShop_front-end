'use client';
import useGetItems from "@/hooks/useGetItems";
import { useEffect, useState } from "react";
import LoadingMoreData from "../ui/loading-more-data";
import { ProductCard, ProductCardContent, ProductCardPhoto } from "../ui/product_card";
import { useSearchParams } from "next/navigation";
// import { useQueryClient } from '@tanstack/react-query';

const { useInView } = require('react-intersection-observer');

const CatalogItemsWrapper = ({ items, catalog_slug, fetch_route, route, backend_href, fetch_key, default_style = 'list', similar_style = false, arr_ids = [] }) => {
    // const queryClient = useQueryClient();
    const { ref, inView } = useInView();
    const [seen_style, setSeen_style] = useState(default_style)
    const searchParams = useSearchParams();
    // Extract search parameters
    const searchParamsObject = {};
    searchParams.forEach((value, key) => {
        searchParamsObject[key] = value;
    });

    // Create a query key that includes searchParams
    const queryKey = ['items', fetch_key, searchParamsObject];

    const { data, fetchNextPage, isFetchingNextPage, hasNextPage, refetch } = useGetItems(items, queryKey, route);

    // queryClient.invalidateQueries(['catalog_' + params.catalog_slug]);

    useEffect(() => {
        if (searchParams.get('view_type'))
            setSeen_style(searchParams.get('view_type'));
        else
            setSeen_style(default_style);
        refetch();
    }, [searchParams, default_style, refetch]);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);
    return (
        <>
            {data?.pages?.map((item, i) => (
                (similar_style && arr_ids.includes(item.id)) ? 
                '' :
                <ProductCard key={i} href={`/catalog/${catalog_slug}/${item.id}`} seen_style={seen_style} >
                    <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? backend_href + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? backend_href + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
                    <ProductCardContent fetch_route={fetch_route} item={item} />
                </ProductCard>
            ))}
            <div className="col-span-full flex items-center justify-center">
                {isFetchingNextPage && hasNextPage ? (
                    <LoadingMoreData />
                ) : (
                    // <p className="text-center">No more posts found</p>
                    <></>
                )}
            </div>
            <div className="col-span-3 lg:col-span-4" ref={ref} />
        </>
    );
};

export default CatalogItemsWrapper;