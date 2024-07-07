import { Suspense } from 'react'
import Loading from '@/components/Loading';
import SidebarCatalog from '@/components/catalog/sidebar-catalog';
import { HeaderCatalog } from '@/components/catalog/header-catalog';
// import ToolbarCatalog from '@/components/catalog/toolbar-catalog';
import dynamic from 'next/dynamic';

const ToolbarCatalog = dynamic(() => import('@/components/catalog/toolbar-catalog'), { ssr: false });
export default async function CatalogPage({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <section className='rounded min-h-screen text-center '>
                <Suspense fallback={<Loading />}>
                    <HeaderCatalog className='w-full min-h-96' />
                </Suspense>
                <ToolbarCatalog />
                <section className="catalog_main col-span-full grid grid-cols-12 mt-4 py-2 px-10">
                    <Suspense fallback={<Loading />}>
                        <SidebarCatalog className='col-span-2'/>
                    </Suspense>
                    <main className="catalogitems col-span-10 grid grid-cols-4 gap-4 pl-4">
                        <Suspense fallback={<Loading />}>
                            {children}
                        </Suspense>
                    </main>
                </section>
            </section>
        </>
    );
}