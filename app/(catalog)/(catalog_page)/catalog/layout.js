import { Suspense } from 'react'
import Loading from '@/components/Loading';
import SidebarCatalog from '@/components/catalog/sidebar-catalog';
import HeaderCatalog from '@/components/catalog/header-catalog';
import dynamic from 'next/dynamic';
import ReactQueryProvider from '@/components/ui/ReactQuery';
import { FaArrowRight, FaChevronCircleRight } from 'react-icons/fa';

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
                <section className="catalog_main col-span-full grid grid-cols-12 mt-4 py-2 px-10 lg:px-5 relative gap-4">
                    <Suspense fallback={<Loading />}>
                        <input type="checkbox" name="sidebar_open" id="sidebar_checker" className='peer hidden ' />
                            <label htmlFor="sidebar_checker" className='lg:hidden transition-all peer-checked:rotate-180 h-fit'>
                                {/* <FaArrowRight /> */}
                                <FaChevronCircleRight className='text-xl hover:text-red-600/60' />
                            </label>
                        <aside className={"sidebarCatalog peer-checked:block peer-checked:absolute peer-checked:left-0 peer-checked:z-50 lg:col-span-2 bg-white/40 min-h-full mt-8 lg:mt-0 p-4 lg:px-3 box-border peer-checked:bg-white hidden lg:block rounded-r-xl lg:rounded-xl text-xl "}>

                            <SidebarCatalog />
                        </aside>

                    </Suspense>
                    <ReactQueryProvider>
                        <main className="catalogitems min-h-96 md:min-h-[30rem] col-span-12 lg:col-span-10 grid grid-cols-4 grid-rows-3 gap-4 pl-4">
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