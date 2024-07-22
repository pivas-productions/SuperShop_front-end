import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import AddToFavorite from "../add-to-favorite";
import AddToCartCard from "../add-to-cart-card";

const productCardVariants = cva("ProductCard flex-col cursor-pointer justify-start items-start gap-3 lg:gap-6 inline-flex rounded-lg", {
    variants: {
        variant: {
            default: "bg-white text-black hover:bg-button-bg/5 transition-colors duration-700"
        },
        size: {
            default: "w-full min-h-96 pb-5"
        },
        seen_style: {
            list: 'first:row-span-2 first:col-span-2 [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n+1)]:col-span-2 [&:nth-child(10n+8)]:row-span-2 [&:nth-child(10n+8)]:col-span-2 ',
            grid: '',
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        seen_style: 'list'
    },
});

const ProductCard = React.forwardRef(({ className, href, variant, size, seen_style, children, ...props }, ref) => {
    return (
        <Link href={href} className={productCardVariants({ variant, size, seen_style, className })} ref={ref} {...props}>
            {children}
        </Link>

    );
});
ProductCard.displayName = "ProductCard";

const ProductCardPhoto = React.forwardRef(({ className, src_main, src_hover, ...props }, ref) => {
    // console.log(src_main, 'main and hover Photo', src_hover)
    return (
        <div className={"CardPhoto group relative w-full h-4/5 " + (className ? className : "")} ref={ref} {...props}>
            {/* <Image fill className="Image w-96 h-96 rounded-lg" src={src} alt='' /> */}
            <div className="IconButton rounded-full p-2 absolute gap-2 z-10 right-0 ">
                {/* <div className="Heart w-5 h-5 px-[1.29px] pt-[2.50px] pb-[2.31px] justify-center items-center flex" /> */}
                <AddToFavorite />

            </div>
            <Image fill className="Image delay-75 duration-500 hover:opacity-0 transition-all w-96 h-96 rounded-lg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' src={src_main} alt='' />
            <Image fill className="Image opacity-0 hover:opacity-100 group-has-[:hover]:block transition-opacity duration-1000 ease-out hidden w-96 h-96 rounded-lg" src={src_hover} sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />

        </div>
    );
});
ProductCardPhoto.displayName = "ProductCardPhoto";

const ProductCardContent = React.forwardRef(({ className, fetch_route, item, ...props }, ref) => {
    console.log(item, 'item')
    return (
        <div className={"Copy self-stretch h-24 flex-col justify-center items-start gap-1 xl:gap-2 flex py-2 lg:p-2" + (className ? className : "")} ref={ref} {...props}>
            <div className="FeaturedProduct self-stretch  text-black text-lg lg:text-2xl font-medium font-['Inter'] leading-loose">{item.name}</div>
            {/* <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{item.description}</div> */}
            <div className="XxYy text-black text-base lg:text-xl font-['Inter'] leading-loose space-x-1 lg:space-x-2 flex flex-wrap justify-center w-full">
                <span>${item.price}</span>
                <sup className="line-through text-zinc-400 text-sm lg:text-lg">${item.price}</sup>
            </div>
            <AddToCartCard fetch_route={fetch_route} color={item.colors} size={item.sizes} id={item.id} />
        </div>
    );
});
ProductCardContent.displayName = "ProductCardContent";

export { ProductCard, ProductCardPhoto, ProductCardContent, productCardVariants };