import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { RateUI } from "./rate";


const reviewCardVariants = cva("ProductCard flex-col cursor-default justify-start items-start gap-6 flex rounded-lg", {
    variants: {
        variant: {
            default: "bg-white text-black shadow-lg shadow-inner transition-colors duration-700"
        },
        size: {
            default: "w-full min-h-96 pb-5"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

const ReviewCard = React.forwardRef(({ className, variant, size, seen_style, children, ...props }, ref) => {
    return (
        <div className={reviewCardVariants({ variant, size, seen_style, className })} ref={ref} {...props}>
            {children}
        </div>

    );
});
ReviewCard.displayName = "ReviewCard";

const ReviewCardHeader = React.forwardRef(({ className, src_avatar, ...props }, ref) => {
    return (
        <div className={"CardHeader w-full h-1/5 px-4 py-2 flex justify-between items-center" + (className ? className : '')} ref={ref} {...props}>
            <div className="userBlock flex items-center gap-4">
                <span className="relative flex w-14 h-14 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-full overflow-hidden ">
                    {src_avatar ?
                        <Image
                            fill
                            className="Image w-14 h-14 rounded-lg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%'
                            src={src_avatar}
                            alt='user avatar'
                        /> :
                        <FaUser className="h-8 w-8" />}
                </span>
                <span className="text-lg">UserName</span>
            </div>
            <div className="rightBlock space-x-4 text-center flex items-center">
                <span>
                    26.04.2024
                </span>
                <RateUI disabled defaultValue={4} />
            </div>
        </div>
    );
});
ReviewCardHeader.displayName = "ReviewCardHeader";

const ReviewCardContent = React.forwardRef(({ className, item, ...props }, ref) => {
    const text = `
        стандартный, норм.  
        эластичный и гибкий.
    `;
    return (
        <div className={"ReviewContent min-h-24 space-y-2 flex-col justify-center items-start gap-1 flex py-2 px-14 " + className} ref={ref} {...props}>
            <div className="Advantages space-y-2">
                <p className="font-bold w-fit">Advantages</p>
                <p className="whitespace-pre-wrap w-fit">
                    {text.trim().replace(/^\s+/gm, '')}
                </p>
            </div>
            <div className="Disadvantages space-y-2">
                <p className="font-bold w-fit">Disadvantages</p>
                <p className="whitespace-pre-wrap w-fit">
                    {`без неожиданностей`.replace(/^\s+/gm)}
                </p>
            </div>
            
            <div className="comments py-2">
                <p className="whitespace-pre-wrap">
                    Очень классный товар, покупаю уже 5 раз, всем доволен и кайфую
                </p>
            </div>
        </div>
    );
});
ReviewCardContent.displayName = "ReviewCardContent";

const ReviewCardPhoto = React.forwardRef(({ className, src_main, src_hover, ...props }, ref) => {
    // TODO: add block photos
    return (
        <div className={"CardPhoto group relative w-full h-4/5 " + className} ref={ref} {...props}>
            <Image fill className="Image delay-75 duration-500 hover:opacity-0 transition-all w-96 h-96 rounded-lg" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' src={src_main} alt='' />
            <Image fill className="Image opacity-0 hover:opacity-100 group-has-[:hover]:block transition-opacity duration-1000 ease-out hidden w-96 h-96 rounded-lg" src={src_hover} sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='' />
        </div>
    );
});
ReviewCardPhoto.displayName = "ReviewCardPhoto";


export { ReviewCard, ReviewCardHeader, ReviewCardContent, ReviewCardPhoto, reviewCardVariants };