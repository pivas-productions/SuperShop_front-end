import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const OrderCard = React.forwardRef(({ className, children, order_date, order_number, order_cost, ...props }, ref) => {
    return (
        <div className="bg-white/30 rounded-[30px] pt-4" ref={ref} {...props}>
            <div className="flex justify-between items-center px-8 mb-2">
                <div className='space-y-2'>
                    <div className="text-2xl  font-['Abel']">{order_date}</div>
                    <div className="text-[#184af8] text-sm  font-['Abel']">{order_number}</div>
                </div>
                <div className="flex text-2xl font-['Abel']">{order_cost} ₽</div>
            </div>
            {children}
        </div>
    );
});
OrderCard.displayName = "OrderCard";


const OrderCardContent = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <section className={"space-y-10" + (className ? className : "")} ref={ref} {...props}>
            {children}
        </section>
    );
});
OrderCardContent.displayName = "OrderCardContent";

const OrderCardItem = React.forwardRef(({ className, children, item, ...props }, ref) => {
    return (
        <div className={"bg-white/80 flex justify-around rounded-lg" + (className ? className : "")} ref={ref} {...props} >
            <div className="self-center space-y-2">
                <div className="flex space-x-5 items-center">
                    <span className="text-center text-2xl  font-['Abel']">Доставка домой</span>
                    <div className=" p-1 bg-neutral-200 rounded-lg justify-center items-center gap-2 inline-flex">
                        <span className="text-xl font-['Inter'] ">{item.item_status}</span>
                    </div>
                </div>
                <div className="rounded-lg space-y-2">
                    <span className="  text-sm  font-['Inter'] ">Дата отмены:</span>
                    <span className="text-sm  font-['Inter'] ">{item.item_status_date}</span>
                    <p className="font-['Inter'] underline ">Почему заказ отменен?</p>
                </div>
            </div>
            {children}
        </div>
    );
});
OrderCardItem.displayName = "OrderCardItem";

const OrderCardLinkPhoto = React.forwardRef(({ className, href, src_main, ...props }, ref) => {
    return (
        <Link href={href} className={"cursor-pointer" + (className ? className : "")} ref={ref} {...props} >
            <Image width={200} height={100} className="m-2 Image transition-all w-36 h-36 rounded-lg" src={src_main} alt="" />
        </Link>
    );
});
OrderCardLinkPhoto.displayName = "OrderCardLinkPhoto";


export { OrderCard, OrderCardLinkPhoto, OrderCardContent, OrderCardItem };