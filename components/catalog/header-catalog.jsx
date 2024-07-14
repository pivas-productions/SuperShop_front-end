'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading';


const HeaderCatalog = ({ route }) => {
    const [image_src, setImage_src] = useState(null);
    const pathname = usePathname()
    useEffect(() => {
        if (pathname.replace('/catalog', '')) {
            fetch(`${route}/api/categories${pathname.replace('/catalog', '')}?format=json`, {
                next: { revalidate: 100 } // 3600
            })
                .then(response => response.json())
                .then(data => {
                    setImage_src(data.photo)
                })
                .catch(error => {
                    console.error('Error fetching catalog data:', error);
                });
        }else{
            setImage_src('/for_all_items.jpg')
        }
    }, [pathname, route]);
    if(!image_src){
        return (
            <header className={"header-photo flex justify-center items-center relative text-white " + "w-full min-h-96 bg-contain"}>
                <Loading/>
            </header>
        )
    }
    return (
        <header className={"header-photo flex justify-center items-center relative text-white " + "w-full min-h-96 bg-origin-content bg-cover bg-center bg-no-repeat"} style={{backgroundImage: `url(${image_src})`}}>
            <div className="absolute bottom-0 -translate-y-1/2 py-6 w-11/12 mix-blend-difference justify-between inline-flex flex-row">
                <nav aria-label="breadcrumbs" className="inline-block text-neutral-300 w-full self-end mb-1">
                    <ol>
                        {Object.values(pathname.split('/').slice(1)).map((val, index, array) => {
                            const isLast = index === array.length - 1;
                            const href = '/' + array.slice(0, index + 1).join('/');
                            return (
                                <li key={val} className="inline-block pr-4">
                                    <a 
                                        className={`relative ` + (isLast ? `` : `after:content-['/'] after:inset-y-0.5 after:absolute after:p-0 after:px-1 after:text-[90%]`) } 
                                        href={href}
                                    >
                                        {val}
                                    </a>
                                </li>
                            )
                        })}
                    </ol>
                </nav>
                <span className="text-shadow-2 text-center w-full text-neutral-300 h-fit text-5xl font-semibold font-['Montaga'] leading-none tracking-widest">{pathname.replace('/catalog/', '')}</span>
            </div>
        </header>
    );
};
export default HeaderCatalog;