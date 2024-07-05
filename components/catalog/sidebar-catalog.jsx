import React from 'react'

const SidebarCatalog = React.forwardRef(({ className, ...props }, ref) => {
  return (
      <aside className={"sidebarCatalog bg-white/40 p-4 rounded-xl " + className} ref={ref} {...props}>
      <nav>
          <ol>
              <li className='px-10 py-2 hover:bg-black/5 cursor-pointer rounded-xl my-1'><a href="bikes">Велосипеды</a></li>
              <li className='px-10 py-2 hover:bg-black/5 cursor-pointer rounded-xl my-1'><a href="bikes/bmx">BMX</a></li>
              <li className='px-10 py-2 hover:bg-black/5 cursor-pointer rounded-xl my-1'>Jump Bike 3000</li>
          </ol>
      </nav>
  </aside>
  );
});
SidebarCatalog.displayName = "SidebarCatalog";
export { SidebarCatalog };
export default SidebarCatalog