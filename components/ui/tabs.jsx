'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const TabsRoot = React.forwardRef(
    ({children, ...props }, forwardedRef) => (
    <TabsPrimitive.Root {...props} ref={forwardedRef} >
        {children}
    </TabsPrimitive.Root>
  )
);
TabsRoot.displayName = 'TabsRoot';

const TabsList = React.forwardRef(({color, ...props}, forwardedRef) => (
  
    <TabsPrimitive.List
      data-accent-color={color}
      {...props}
      asChild={false}
      ref={forwardedRef}
    />
  )
);
TabsList.displayName = 'TabsList';

const TabsTrigger = React.forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.Trigger
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
  ({ ...props }, forwardedRef) => {
    return (
      <TabsPrimitive.Content
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
TabsContent.displayName = 'TabsContent';

export { TabsRoot, TabsList, TabsTrigger, TabsContent };