import * as React from "react";
import { cva } from "class-variance-authority";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { RateUI } from "./rate";
import CarouselWithOpenFullscreen from "../carousel-with-open-fullscreen";


const reviewCardVariants = cva("ReviewCard flex-col cursor-default justify-start items-start gap-6 flex rounded-lg", {
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

const ReviewCardHeader = React.forwardRef(({ className, src_avatar, username, rate, createdAt, ...props }, ref) => {
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
                <span className="text-lg">{username}</span>
            </div>
            <div className="rightBlock space-x-4 text-center flex items-center">
                <span>
                    {(new Date(createdAt)).toLocaleDateString()}
                </span>
                <RateUI disabled defaultValue={rate} />
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
            {item?.advantages && <div className="Advantages space-y-2">
                <p className="font-bold w-fit">Advantages</p>
                <p className="whitespace-pre-wrap w-fit">
                    {/* {text.trim().replace(/^\s+/gm, '')} */}
                    {item?.advantages}
                </p>
            </div>}
            {item?.disadvantages && <div className="Disadvantages space-y-2">
                <p className="font-bold w-fit">Disadvantages</p>
                <p className="whitespace-pre-wrap w-fit">
                    {/* {`без неожиданностей`.replace(/^\s+/gm)} */}
                    {item?.disadvantages}

                </p>
            </div>}

            {item?.comments && <div className="comments py-2">
                <p className="whitespace-pre-wrap">
                    {item?.comments}
                </p>
            </div>}
        </div>
    );
});
ReviewCardContent.displayName = "ReviewCardContent";

const ReviewCardPhoto = React.forwardRef(({ className, items, route, cover, ...props }, ref) => {
    const items_edited = items.reduce((acc, val, ind) => {
        acc.push({
            src: val?.photo,
            alt: 'ImageReview' + ind
        })
        return acc;
    }, [])
    return (
        <div className={"ReviewCardPhoto group relative w-full h-36 flex gap-2 px-2 " + (className ? className : '')} ref={ref} {...props}>
            <CarouselWithOpenFullscreen slidesToShow={3} loop={false} items={
                items_edited
            } />
        </div>
    );
});
ReviewCardPhoto.displayName = "ReviewCardPhoto";


export { ReviewCard, ReviewCardHeader, ReviewCardContent, ReviewCardPhoto, reviewCardVariants };