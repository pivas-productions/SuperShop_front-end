'use client';
import useGetItems from "@/hooks/useGetItems";
import { useEffect } from "react";
import LoadingMoreData from "../ui/loading-more-data";
import { ProductCard, ProductCardContent, ProductCardPhoto } from "../ui/product_card";
const { useInView } = require('react-intersection-observer');

const CatalogItemsWrapper = ({ items, catalog_slug, route, fetch_key }) => {
    const { ref, inView } = useInView();
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetItems(items, fetch_key,  route);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);
    console.log('data',data)
    return (
        <>
            {data?.pages?.map((item, i) => (
                <ProductCard key={i} href={`/catalog/${catalog_slug}/${item.id}`} >
                    <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? route + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? route + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
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