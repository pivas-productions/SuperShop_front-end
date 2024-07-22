import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { RxCross1 } from "react-icons/rx";
import { cva } from 'class-variance-authority';

const DialogContentVariants = cva("rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none overflow-y-auto", {
    variants: {
        variant: {
            default: "",
            editDialog: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]",
            addDialog: "data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%]",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;
// 
const DialogContent = React.forwardRef(
    ({ children, variant, className, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className='fixed inset-0 bg-black bg-opacity-50 data-[state=open]:animate-overlayShow' />
            <DialogPrimitive.Content className={DialogContentVariants({variant, className})} {...props} ref={forwardedRef}>
                {children}

            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    )
);
DialogContent.displayName = "DialogContent";

const DialogTitle = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <DialogPrimitive.Title {...props} ref={forwardedRef}>
            {children}
        </DialogPrimitive.Title>
    )
)
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <DialogPrimitive.Description {...props} ref={forwardedRef}>
            {children}

        </DialogPrimitive.Description>
    )
)
DialogDescription.displayName = "DialogDescription"

const DialogClose = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <DialogPrimitive.Close aria-label="Close" {...props} ref={forwardedRef}>
            <RxCross1 />
        </DialogPrimitive.Close>
    )
);
DialogClose.displayName = "DialogClose";

export { Dialog, DialogTrigger, DialogPortal, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogContentVariants, };