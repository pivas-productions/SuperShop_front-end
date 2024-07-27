import { Suspense } from 'react'
import Loading from '@/components/Loading';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaChevronCircleRight } from 'react-icons/fa';

const NavBarProfile = dynamic(() => import('@/components/catalog/toolbar-catalog'), { ssr: false });
export default async function ProfilePage({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <div className="Profile pt-16 flex px-2 lg:px-10 pb-16 bg-rose-200">
                <input type="checkbox" name="sidebar_open" id="sidebar_checker" className='peer hidden ' />
                <label htmlFor="sidebar_checker" className='lg:hidden transition-all mt-5 peer-checked:rotate-180 h-fit'>
                    <FaChevronCircleRight className='text-xl hover:text-red-600/60' />
                </label>
                <aside className={"sidebarCatalog w-1/3 peer-checked:block peer-checked:absolute peer-checked:left-0 peer-checked:z-50 lg:col-span-2  mt-16 lg:mt-0 p-4 lg:px-3 box-border peer-checked:bg-white hidden lg:block rounded-r-xl lg:rounded-xl text-xl "}>
                    <nav className="w-full bg-white/50 p-6 text-center lg:mt-16 space-y-6 rounded-3xl h-fit">
                        <Link href='/profile' className="block text-center text-black text-3xl font-normal font-['Abel']">My profile</Link>
                        <Link href='/profile/mypurshases' className="block text-center text-black text-3xl font-normal font-['Abel']">My purshases</Link>
                        <Link href="/profile/favorite/" className="block text-center text-black text-3xl font-normal font-['Abel']">My favorites</Link>
                        <Link href='/profile/mycards' className="block text-center text-black text-3xl font-normal font-['Abel']">My credit cards</Link>
                        <Link href='/profile/myaddress' className="block text-center text-black text-3xl font-normal font-['Abel']">My address</Link>
                        <Link href='/profile/security' className="block text-center text-black text-3xl font-normal font-['Abel']">Security</Link>
                    </nav>
                </aside>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </>
    );
}