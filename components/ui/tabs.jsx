'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const TabsRoot = React.forwardRef(
    ({children, className, ...props }, forwardedRef) => (
    <TabsPrimitive.Root className={'flex flex-col w-full  shadow-black/20 shadow-md ' + (className ? className : '')} {...props} ref={forwardedRef} >
        {children}
    </TabsPrimitive.Root>
  )
);
TabsRoot.displayName = 'TabsRoot';

const TabsList = React.forwardRef(({className, color, ...props}, forwardedRef) => (
  
    <TabsPrimitive.List
      className={"flex-shrink-0 w-full flex" + (className ? className : '')}
      data-accent-color={color}
      {...props}
      asChild={false}
      ref={forwardedRef}
    />
  )
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.Trigger
        className={"rounded-tl-lg overflow-hidden data-[state='active']:text-[#BAA7FF] data-[state='active']:border-b data-[state='active']:border-b-[#BAA7FF] hover:text-[#BAA7FF] focus:relative focus:outline-none flex-1 focus:ring-black font-inherit bg-white px-20 py-4 h-45 flex items-center justify-center text-base leading-none text-[#B5B2BC] select-none" + (className ? className : '')}
        {...props}
        asChild={false}
        ref={forwardedRef}
      >
        <span className="rt-BaseTabListTriggerInner rt-TabsTriggerInner">{children}</span>
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = React.forwardRef(
  ({className, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.Content
        className={"hidden data-[state='active']:flex p-2 pt-4 flex-wrap flex-row justify-between items-center gap-4 flex-1 duration-300 transition-all" + (className ? className : '')}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { TabsRoot, TabsList, TabsTrigger, TabsContent };