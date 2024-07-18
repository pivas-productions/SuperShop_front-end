'use client';
import useGetItems from "@/hooks/useGetItems";
import { useEffect, useState } from "react";
import LoadingMoreData from "../ui/loading-more-data";
import { ProductCard, ProductCardContent, ProductCardPhoto } from "../ui/product_card";
import { useSearchParams } from "next/navigation";
const { useInView } = require('react-intersection-observer');

const CatalogItemsWrapper = ({ items, catalog_slug, route, backend_href, fetch_key, default_style = 'list' }) => {
    const { ref, inView } = useInView();
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetItems(items, fetch_key,  route);
    const [seen_style, setSeen_style] = useState(default_style)
    const searchParams = useSearchParams();

    useEffect(() => {
        if(searchParams.get('view_type') )
            setSeen_style(searchParams.get('view_type'));
        else
            setSeen_style(default_style);
    }, [searchParams, default_style]);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);
    // console.log(backend_href, 'data',data)
    return (
        <>
            {data?.pages?.map((item, i) => (
                <ProductCard key={i} href={`/catalog/${catalog_slug}/${item.id}`} seen_style={seen_style} >
                    <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? backend_href + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? backend_href + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
                    <ProductCardContent item={item} />
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
            <div className="col-span-full" ref={ref} />
        </>
    );
};

export default CatalogItemsWrapper;