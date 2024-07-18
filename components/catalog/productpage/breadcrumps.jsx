'use client'
import { usePathname } from 'next/navigation';
import React from 'react'

const Breadcrumps = () => {
    const pathname = usePathname();
    return (
        <nav aria-label="breadcrumbs" className="hidden lg:inline-block text-black w-fit self-center ">
            <ol>
                <li className="inline-block pr-4">
                    <span className={`relative after:content-['/'] after:inset-y-0.5 after:absolute after:p-0 after:px-1 after:text-[90%]`}>..</span>
                </li>
                {Object.values(pathname.split('/').slice(1)).map((val, index, array) => {
                    const isLast = index === array.length - 1;
                    const href = '/' + array.slice(0, index + 1).join('/');
                    if(isLast) 
                        return
                    return (
                        <li key={val} className="inline-block pr-4">
                            <a
                                className={`relative ` + (isLast ? `` : `after:content-['/'] after:inset-y-0.5 after:absolute after:p-0 after:px-1 after:text-[90%]`)}
                                href={href}
                            >
                                {val}
                            </a>
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export default Breadcrumps