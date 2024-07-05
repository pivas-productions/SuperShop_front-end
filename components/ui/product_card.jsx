import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";


const productCardVariants = cva("ProductCard  flex-col cursor-pointer justify-start items-start gap-6 inline-flex rounded-lg", {
    variants: {
        variant: {
            default: "bg-white text-black hover:bg-button-bg/40 transition-colors duration-700"
        },
        size: {
            default: "w-full h-96 pb-5"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

const ProductCard = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
    return (
        <div className={productCardVariants({ variant, size, className })} ref={ref} {...props}>
            {children}
        </div>

    );
});
ProductCard.displayName = "ProductCard";

const ProductCardPhoto = React.forwardRef(({ className, src, ...props }, ref) => {
    return (
        <div className={"CardPhoto relative w-full h-4/5 " + className} ref={ref} {...props}>
            <Image fill className="Image w-96 h-96 rounded-lg" src={src} alt='' />
        </div>
    );
});
ProductCardPhoto.displayName = "ProductCardPhoto";

const ProductCardContent = React.forwardRef(({ className, item, ...props }, ref) => {
    return (
        <div className={"Copy self-stretch h-24 flex-col justify-center items-start gap-1 flex p-2" + className} ref={ref} {...props}>
            <div className="FeaturedProduct self-stretch  text-black text-xl font-medium font-['Inter'] leading-loose">{item.name}</div>
            <div className="DescriptionOfFeaturedProduct self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">{item.description}</div>
            <div className="XxYy self-stretch text-black text-xl font-medium font-['Inter'] leading-loose">${item.price}</div>
        </div>
    );
});
ProductCardContent.displayName = "ProductCardContent";

export { ProductCard, ProductCardPhoto, ProductCardContent, productCardVariants };