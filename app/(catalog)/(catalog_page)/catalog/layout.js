import { Suspense } from 'react'
import Loading from '@/components/Loading';
import SidebarCatalog from '@/components/catalog/sidebar-catalog';
import HeaderCatalog from '@/components/catalog/header-catalog';
import dynamic from 'next/dynamic';
import ReactQueryProvider from '@/components/ui/ReactQuery';

const ToolbarCatalog = dynamic(() => import('@/components/catalog/toolbar-catalog'), { ssr: false });
export default async function CatalogPage({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <section className='rounded min-h-screen text-center '>
                <Suspense fallback={<Loading />}>
                    <HeaderCatalog route={process.env.REACT_APP_API_URL_CLIENT} />
                </Suspense>
                <ToolbarCatalog route={process.env.REACT_APP_API_URL_CLIENT} />
                <section className="catalog_main col-span-full grid grid-cols-12 mt-4 py-2 px-10">
                    <Suspense fallback={<Loading />}>
                        <SidebarCatalog />
                    </Suspense>
                    <ReactQueryProvider>
                        <main className="catalogitems min-h-96 md:min-h-[30rem] col-span-10 grid grid-cols-4 grid-rows-3 gap-4 pl-4">
                            <Suspense fallback={<Loading />}>
                                {children}
                            </Suspense>
                        </main>
                    </ReactQueryProvider>
                </section>
            </section>
        </>
    );
}