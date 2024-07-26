import * as React from "react";
import { cva } from "class-variance-authority";
const InputVariants = cva("rounded-md text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        variant: {
            default: "flex border border-input focus-visible:ring-1 focus-visible:ring-ring bg-white/70 shadow-mega-shadow",
            search: "grow shrink basis-0 text-zinc-500 text-base font-normal font-['Inter'] leading-normal border-none",
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
            search: "h-9 w-full py-1",
            sm: "h-8 rounded-md px-3 text-xs",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9",
            checker: "h-5 mt-0 ",
            inputdialog: "h-9 p-1 w-11/12"
        },
        type: {
            button: '',
            checkbox: 'cursor-pointer',
            color: '',
            date: '',
            'datetime-local': '',
            email: '',
            file: '',
            image: '',
            month: '',
            number: '',
            password: '',
            radio: 'cursor-pointer',
            range: '',
            search: '',
            submit: '',
            tel: '',
            text: '',
            time: '',
            url: '',
            week: '',

        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Input = React.forwardRef(({ className,variant, size, type, ...props }, ref) => {

    return (
        <input type={type} className={InputVariants({ variant, size, type, className })} ref={ref} {...props} />);
});
Input.displayName = "Input";
export { Input };
