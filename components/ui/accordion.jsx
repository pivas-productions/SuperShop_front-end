"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
// import { ChevronDownIcon } from "@radix-ui/react-icons";
import { FaChevronDown } from "react-icons/fa";

const AccordionRoot = Accordion.Root;


const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger
            className={
                'text-violet11 cursor-pointer shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 items-center justify-between px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none'
                + className}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <FaChevronDown 
                className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
            />
        </Accordion.Trigger>
    </Accordion.Header>
));
AccordionTrigger.displayName = Accordion.Trigger.displayName;

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={
            'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]' +
            className
        }
        {...props}
        ref={forwardedRef}
    >
        <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
));
AccordionContent.displayName = Accordion.Content.displayName;

const AccordionItem = React.forwardRef(({ className, inset, children, ...props }, ref) => (<Accordion.Item ref={ref} className={"flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent " + inset && " pl-8 " + (className ? className : "")} {...props}>
    {children}
</Accordion.Item>));
AccordionItem.displayName = Accordion.Item.displayName;

export { AccordionRoot, AccordionTrigger, AccordionContent, AccordionItem, };
