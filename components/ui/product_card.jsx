import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";


const productCardVariants = cva("ProductCard flex-col cursor-pointer justify-start items-start gap-6 inline-flex rounded-lg", {
    variants: {
        variant: {
            default: "bg-white text-black hover:bg-button-bg/40 transition-colors duration-700"
        },
        size: {
            default: "w-full min-h-96 pb-5"
        },
        seen_style: {
            grid: 'first:row-span-2 first:col-span-2 [&:nth-child(10n+1)]:row-span-2 [&:nth-child(10n+1)]:col-span-2 [&:nth-child(10n+8)]:row-span-2 [&:nth-child(10n+8)]:col-span-2 ',
            list: '',
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        seen_style: 'grid'
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
    return (
        <div className={"CardPhoto group relative w-full h-4/5 " + className} ref={ref} {...props}>
            {/* <Image fill className="Image w-96 h-96 rounded-lg" src={src} alt='' /> */}
            <Image fill className="Image delay-75 duration-500 hover:opacity-0 transition-all w-96 h-96 rounded-lg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' src={src_main} alt='' />
            <Image fill className="Image opacity-0 hover:opacity-100 group-has-[:hover]:block transition-opacity duration-1000 ease-out hidden w-96 h-96 rounded-lg" src={src_hover} sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
        </div>
    );
});
ProductCardPhoto.displayName = "ProductCardPhoto";

const ProductCardContent = React.forwardRef(({ className, item, ...props }, ref) => {
    return (
        <div className={"Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2" + (className ? className : "")} ref={ref} {...props}>
            <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{item.name}</div>
            {/* <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{item.description}</div> */}
            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${item.price}</div>
        </div>
    );
});
ProductCardContent.displayName = "ProductCardContent";

export { ProductCard, ProductCardPhoto, ProductCardContent, productCardVariants };