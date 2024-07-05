import React from 'react'

const SidebarCatalog = React.forwardRef(({ className, ...props }, ref) => {
  return (
      <aside className={"sidebarCatalog bg-white/40 p-4 rounded-xl " + className} ref={ref} {...props}>
      <nav>
          <ol>
              <li><a href="bikes">Велосипеды</a></li>
              <li><a href="bikes/bmx">BMX</a></li>
              <li>Jump Bike 3000</li>
          </ol>
      </nav>
  </aside>
  );
});
SidebarCatalog.displayName = "SidebarCatalog";
export { SidebarCatalog };
export default SidebarCatalog