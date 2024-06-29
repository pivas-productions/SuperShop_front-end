import * as React from "react";
import { cva } from "class-variance-authority";
const TextAreaVariants = cva("rounded-md border border-input bg-transparent text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "flex resize-none",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            select: "bg-[#d0d2d2] hover:shadow-shadowInset rounded flex flex-col items-center border p-1 ",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-white underline-offset-4 hover:underline",
            inputdialog: " rounded focus:outline-none border-solid border divide-[#bdbdbd] focus:shadow-[-10px_9px_10px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] flex items-center flex-row justify-between w-fit transition-all",
        },
        size: {
            default: "h-9 w-full px-3 py-1",
            sm: "h-8 rounded-md px-3 text-xs",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-14 w-full px-3 py-1",
            xxl: "h-24 w-full px-3 py-1",
            inputdialog: "h-9 p-1 w-11/12"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Textarea = React.forwardRef(({ className,variant, size, ...props }, ref) => {

    return (
        <textarea className={TextAreaVariants({ variant, size, className })} ref={ref} {...props}></textarea>);

        // <input type={type} className={InputVariants({ variant, size, type, className })} ref={ref} {...props} />);
});

Textarea.displayName = "Input";
export { Textarea };
// w-1/2 text-pretty self-center resize-none border border-black rounded