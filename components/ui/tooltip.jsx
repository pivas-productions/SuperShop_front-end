'use client'
import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react';

const TooltipProvider = Tooltip.Provider;

const TooltipRoot = Tooltip.Root;


const TooltipTrigger = React.forwardRef(({ children, ...props }, forwardedRef) => (
        <Tooltip.Trigger asChild
            {...props}
            ref={forwardedRef}
        >
            {children}
        </Tooltip.Trigger>
));
TooltipTrigger.displayName = Tooltip.Trigger.displayName;

const TooltipContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Tooltip.Portal>
        <Tooltip.Content
            className={
                'rounded-md px-4 py-2 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade  data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade will-change-[transform,opacity] select-none leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_35%)_0px_10px_20px_-15px] ' +
                className
            }
            {...props}
            ref={forwardedRef}
        >
            {children}
            <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
    </Tooltip.Portal>
));
TooltipContent.displayName = Tooltip.Content.displayName;

export { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent, };
