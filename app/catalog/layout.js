import { Suspense } from 'react'
import Loading from '@/components/Loading';
import SidebarCatalog from '@/components/catalog/sidebar-catalog';
import HeaderCatalog from '@/components/catalog/header-catalog';
import dynamic from 'next/dynamic';

const ToolbarCatalog = dynamic(() => import('@/components/catalog/toolbar-catalog'), { ssr: false });
export default async function CatalogPage({
    children, // will be a page or nested layout
}) {

    return (
        <>
            <section className='rounded min-h-screen text-center '>
                <Suspense fallback={<Loading />}>
                    <HeaderCatalog route={process.env.REACT_APP_API_URL} />
                </Suspense>
                <ToolbarCatalog route={process.env.REACT_APP_API_URL} />
                <section className="catalog_main col-span-full grid grid-cols-12 mt-4 py-2 px-10">
                    <Suspense fallback={<Loading />}>
                        <SidebarCatalog />
                    </Suspense>
                    <main className="catalogitems min-h-96 md:min-h-[30rem] col-span-10 grid grid-cols-4 grid-rows-3 gap-4 pl-4">
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </main>
                </section>
            </section>
        </>
    );
}