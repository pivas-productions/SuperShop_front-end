import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogContent = React.forwardRef(
    ({ children, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className='fixed inset-0 bg-black bg-opacity-50 animate-overlayShow' />
            <DialogPrimitive.Content {...props} ref={forwardedRef}>
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
            <Cross1Icon />
        </DialogPrimitive.Close>
    )
);
DialogClose.displayName = "DialogClose";

export { Dialog, DialogTrigger, DialogPortal, DialogContent, DialogTitle, DialogDescription, DialogClose, };