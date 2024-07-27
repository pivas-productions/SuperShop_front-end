import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-button-bg text-primary-foreground shadow hover:bg-button-bg/50  transition-colors shadow-mega-shadow",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            select: "bg-[#d0d2d2] hover:shadow-shadowInset rounded flex flex-col items-center border p-1 ",
            susses: "bg-green-500/40 hover:shadow-shadowInset rounded flex flex-col items-center border p-1 ",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-grey-100 underline-offset-4 hover:underline",
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 py-4 text-xs",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-16 rounded-md px-10",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (<Comp className={buttonVariants({ variant, size, className })} ref={ref} {...props} />);
});
Button.displayName = "Button";


const buttonSlideVariants = cva("Button relative appearance-none gap-2 flex leading-none transition-all overflow-hidden justify-center items-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-zinc-800 rounded-2xl border border-zinc-800 text-neutral-100 hover:text-black group/buttonbuy",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            select: "bg-[#d0d2d2] hover:shadow-shadowInset rounded flex flex-col items-center border p-1 ",
            susses: "bg-green-500/40 hover:shadow-shadowInset rounded flex flex-col items-center border p-1 ",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-grey-100 underline-offset-4 hover:underline",
        },
        size: {
            default: "w-full h-full p-3",
            sm: "h-8 rounded-md px-3 py-4 text-xs",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-16 rounded-md px-10",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const ButtonSlide = React.forwardRef(({ className, variant, size, children, ...props }, ref) => {
    return (
        <button className={buttonSlideVariants({ variant, size, className })} ref={ref} {...props}>

            <span className="absolute inset-0 bg-white transition-all w-full duration-300 -left-full group-hover/buttonbuy:left-0 z-0"></span>
            <span className="relative z-10">{children}</span>
            <span className="absolute h-full bg-white transition-all w-full duration-300 -right-full group-hover/buttonbuy:right-0 z-0"></span>
        </button>
    );
});
ButtonSlide.displayName = "ButtonSlide";

export { Button, ButtonSlide, buttonSlideVariants, buttonVariants };
