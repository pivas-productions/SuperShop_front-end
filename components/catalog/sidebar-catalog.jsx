import React, { memo } from 'react'

const SidebarCatalog = memo(async ({ }) => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/categories?format=json`, {
        next: { revalidate: 100 } // 3600
    });
    const items = await res.json();
    return (
        <nav>
            <ol>
                {items.results.map((item) => {
                    return (
                        <li key={item.id} className='px-10 lg:px-0 xl:px-5 2xl:px-10 py-2 hover:bg-black/5 cursor-pointer rounded-xl  my-1'><a href={"/catalog/" + item.slug}>{item.name}</a></li>
                    )
                })}
            </ol>
        </nav>
    );
});
SidebarCatalog.displayName = 'SidebarCatalog'

export default SidebarCatalog