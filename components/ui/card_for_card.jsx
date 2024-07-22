"use client"
import * as React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import { CiCreditCard1 } from "react-icons/ci";

const CardForCard = React.forwardRef(({ className, href, children, ...props }, ref) => {
    return (
        <div
            ref={ref} className={"flex flex-col items-start justify-start space-x-1 p-5 bg-gray-800/5 border-2 border-gray-700 rounded-lg cursor-pointer text-lg relative" + (className ? className : "")} {...props}
        >
            {children}
        </div>
    );
});
CardForCard.displayName = "CardForCard";

const CardForCardContent = React.forwardRef(({ className, default_state, card_data, ...props }, ref) => {
    return (
        <>
            {default_state &&
                <div className="p-1 bg-neutral-200 rounded-lg justify-center items-center gap-2 inline-flex">
                <div className=" text-xl font-['Inter'] ">По умолчанию</div>
            </div>
            }
            <div className={'flex items-center justify-center w-full gap-1' + (className ? className : "")} ref={ref} {...props}>
                <div className='gap-2 flex justify-center w-full items-center flex-1'>
                    <CiCreditCard1 className='text-3xl' />
                    <span className="border border-black p-2 rounded-3xl ">Mir &#x2022;&#x2022; 0375</span>
                </div>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger className="">
                        <BsThreeDotsVertical className='mr-4' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-40 bg-black/20 font-semibold" align="end">
                        {!default_state && (
                            <>
                                <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                                    <button className="w-full">Установить по умолчанию</button>
                                </DropdownMenuItem>
                            </>
                        )}
                        <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                            <button className="w-full">Удалить</button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </>
    );
});
CardForCardContent.displayName = "CardForCardContent";

export { CardForCard, CardForCardContent };