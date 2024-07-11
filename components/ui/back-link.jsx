'use client'
import * as React from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
const buttonVariants = cva("", {
    variants: {
        variant: {
            default: " text-primary-foreground hover:text-gray-500  transition-colors",
        },
        size: {
            default: " p-1 ",
            sm: "h-8 rounded-md px-3 text-xs",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-16 rounded-md px-10"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const LinkBack = React.forwardRef(({ children, href, className, variant, size, ...props }, ref) => {
    const pushBack = (ev) => {
        ev.preventDefault();
        history.back();
    }
    return (<Link href='#' onClick={pushBack} className={buttonVariants({ variant, size, className })} ref={ref} {...props}>
        <FaArrowLeft className="h-16 w-16 lg:h-8 lg:w-8 p-1" />
    </Link>);
});
LinkBack.displayName = "Link";
export { LinkBack, buttonVariants };
