'use client';
import useGetItems from "@/hooks/useGetItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import LoadingMoreData from "../ui/loading-more-data";
import { ProductCard, ProductCardContent, ProductCardPhoto } from "../ui/product_card";
const { useInView } = require('react-intersection-observer');

const CatalogItemsWrapper = ({ items, catalog_slug, route }) => {
    const { ref, inView } = useInView();
    const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetItems(items, catalog_slug, route);

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView, fetchNextPage]);

    return (
        <>
            {data?.pages?.map((item, i) => (
                // TODO: ProductCard from component
                <ProductCard key={i} href={`/catalog/${catalog_slug}/${item.id}`} >
                    <ProductCardPhoto src_main={item?.general_photo_one?.photo?.photo ? route + item?.general_photo_one?.photo?.photo : '/435x366.png'} src_hover={item?.general_photo_two?.photo?.photo ? route + item?.general_photo_two?.photo?.photo : '/hover_image.jpg'} />
                    <ProductCardContent item={item} />
                </ProductCard>
                // <Link key={i} href={`/catalog/${catalog_slug}/${item.id}`} className="ProductCard first:row-span-2 first:col-span-2 [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n+1)]:col-span-2 [&:nth-child(10n+8)]:row-span-2 [&:nth-child(10n+8)]:col-span-2 w-full pb-5 min-h-96 bg-white flex-col justify-start items-start gap-6 inline-flex rounded-lg">
                //     <div className="CardPhoto group relative w-full h-4/5">
                //         <Image fill className="Image delay-75 duration-500 hover:opacity-0 transition-all w-96 h-96 rounded-lg" src="/435x366.png" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
                //         <Image fill className="Image opacity-0 hover:opacity-100 group-has-[:hover]:block transition-opacity duration-1000 ease-out hidden w-96 h-96 rounded-lg" src="/hover_image.jpg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
                //     </div>
                //     <div className="Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2">
                //         <div className="FeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{item.name}</div>
                //         <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${item.price_with_discount}</div>
                //     </div>
                // </Link>
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