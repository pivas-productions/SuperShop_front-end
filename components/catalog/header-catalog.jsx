import React from 'react'
import Image from 'next/image'
import mainPhoto from '@/public/main_page/main_photo.png'


const HeaderCatalog = React.forwardRef(({ className, ...props }, ref) => {
    return (
        <header className={"header-photo flex justify-center items-center relative " + className} ref={ref} {...props}>
            <Image
                className="relative pointer-events-none object-cover"
                src={mainPhoto}
                alt="Next.js Logo"
                fill
                sizes="100vw"
                placeholder="blur"
                priority={true}
            />

            <div className="absolute bottom-0 -translate-y-1/2 py-6 w-11/12 justify-between inline-flex flex-row">
                <nav className="inline-block  text-neutral-300 w-full self-end mb-1">
                    <ol>
                        <li className="inline-block pr-4"><a className="relative after:content-['/'] after:inset-y-0.5 after:absolute after:p-0 after:px-1 after:text-white after:text-[80%]" href="/catalog">Main</a></li>
                        <li className="inline-block pr-4"><a className="relative after:content-['/'] after:inset-y-0.5 after:absolute after:p-0 after:px-1 after:text-white after:text-[80%]" href="/catalog/teens">Teens</a></li>
                        <li className="inline-block pr-4">Vibrators</li>
                    </ol>
                </nav>
                <span className="text-shadow-2 text-center w-full text-neutral-300 h-fit text-5xl font-semibold font-['Montaga'] leading-none tracking-widest">Vibrators</span>
            </div>
        </header>
    );
});
HeaderCatalog.displayName = "HeaderCatalog";
export { HeaderCatalog };