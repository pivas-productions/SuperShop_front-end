"use client";

import * as React from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa";
import { cva } from "class-variance-authority";
import { RxDividerHorizontal } from "react-icons/rx";

const CheckboxRootVariants = cva("flex appearance-none items-center justify-center outline-none overflow-hidden", {
    variants: {
        colors: {
            default: "hover:bg-pink-300 bg-white transition-colors",
            blacked: "hover:bg-pink-300/20 bg-black transition-colors text-white"
        },
        effect: {
            default: 'shadow-black/20 shadow-[0_2px_10px] focus:shadow-[0_0_0_2px_black]',
            sm: 'shadow-black/10 shadow-[0_1px_5px] focus:shadow-[0_0_0_1px_black]',
            smBlacked: 'shadow-white/10 shadow-[0_1px_5px] focus:shadow-[0_0_0_1px_white]'
        },
        size: {
            default: "h-6 w-6 rounded",
            xs: "h-3.5 w-3.5 rounded text-xs",
            sm: "h-4 w-4 rounded text-sm",
            xss: "h-6 rounded-md px-1 text-xs",
            lg: "h-10 rounded-md px-8",
            xl: "h-16 rounded-md px-10",
            icon: "h-9 w-9",
        },
    },
    defaultVariants: {
        colors: "default",
        effect: "default",
        size: "default",
    },
});

const CheckboxRoot = React.forwardRef(({ children, colors, effect, size, checked, onCheckedChange, className, ...props }, forwardedRef) => (
    <Checkbox.Root className={CheckboxRootVariants({ colors, effect, size, className })}
        checked={checked}
        onCheckedChange={onCheckedChange}
        {...props}
        ref={forwardedRef}
    >
        {children}
    </Checkbox.Root>
));
CheckboxRoot.displayName = Checkbox.Root.displayName;

const CheckboxIndicator = React.forwardRef(({ className, ...props }, forwardedRef) => (
    <Checkbox.Indicator className={
        'text-violet11 p-1'
        + (className ? className : '')}
        {...props}
        ref={forwardedRef}
    >
        <FaCheck className="text-inherit" />
    </Checkbox.Indicator>
));
CheckboxIndicator.displayName = Checkbox.Indicator.displayName;

const CheckboxIndicatorGroup = React.forwardRef(({ className, checked, ...props }, forwardedRef) => {
    console.log('gg', checked)
    return (
    <Checkbox.Indicator className={
        'text-violet11 '
        + (className ? className : '')}
        {...props}
        ref={forwardedRef}
    >
        {checked === 'indeterminate' && <RxDividerHorizontal className="text-white" size={'1.5em'} /> }
        {checked === true && <FaCheck className="text-inherit" />
        }
    </Checkbox.Indicator>
)});
CheckboxIndicatorGroup.displayName = Checkbox.Indicator.displayName;


export { CheckboxRoot, CheckboxIndicator, CheckboxIndicatorGroup };
