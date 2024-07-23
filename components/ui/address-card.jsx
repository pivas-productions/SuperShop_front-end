"use client"
import * as React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";



const AddressCard = React.forwardRef(({ className, href, children, ...props }, ref) => {
    return (
        <div ref={ref} className={" bg-white/80 rounded-2xl p-3 space-y-2" + (className ? className : "")} {...props}>
            {children}
        </div>
    );
});
AddressCard.displayName = "AddressCard";

const AddressCardContent = React.forwardRef(({ className, default_state, address, ...props }, ref) => {
    return (
        <>
            {default_state &&
                <div className=" p-1 bg-neutral-200 rounded-lg justify-center items-center gap-2 inline-flex">
                    <span className="text-xl font-['Inter'] ">По умолчанию</span>
                </div>
            }
            <div className={"flex items-center gap-1" + (className ? className : "")} ref={ref} {...props}>
                <div className='gap-2 flex items-center flex-1'>
                    <FaMapMarkerAlt className='text-xl' />
                    <span className="text-xl font-['Inter'] ">Адрес: </span>
                    <span className="text-xl font-['Inter'] ">{address}</span>
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
AddressCardContent.displayName = "AddressCardContent";

export { AddressCard, AddressCardContent };