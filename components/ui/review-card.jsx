import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { RateUI } from "./rate";
import { CarouselBlaze } from "./carousel-blaze";


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

const ReviewCardPhoto = React.forwardRef(({ className, items, route, cover, ...props }, ref) => {
    // TODO: add block photos
    return (
        <div className={"ReviewCardPhoto group relative w-full min-h-24 flex " + (className ? className : '')} ref={ref} {...props}>
            <CarouselBlaze>
                {Object.values(items?.photo).map((item, i) => {
                    console.log(item.photo, 'item carouselBlaze')
                    return (
                        <div key={i} className="h-4/5 lg:h-full" style={{ position: "relative", width: '100%' }}>
                            <Image 
                                className="h-24 w-24"
                                fill
                                alt={item.name ? item.name : ''}
                                src={route + item.photo}
                                loading="eager"
                                draggable={false}
                                placeholder={item.blurDataURL ? "blur" : undefined}
                                style={{
                                    objectFit: cover ? "cover" : "contain",
                                    offsetPosition: 'center',
                                    cursor: "pointer",
                                }}
                                sizes={`100vw`}
                            />
                        </div>
                    )
                })}
            </CarouselBlaze>
        </div>
    );
});
ReviewCardPhoto.displayName = "ReviewCardPhoto";


export { ReviewCard, ReviewCardHeader, ReviewCardContent, ReviewCardPhoto, reviewCardVariants };