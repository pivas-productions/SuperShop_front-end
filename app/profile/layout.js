import { Suspense } from 'react'
import Loading from '@/components/Loading';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const NavBarProfile = dynamic(() => import('@/components/catalog/toolbar-catalog'), { ssr: false });
export default async function ProfilePage({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <div className="Profile pt-16 flex px-10 pb-16 bg-rose-200">
                <nav className="bg-white/50 p-6 text-center mt-16 space-y-6 rounded-3xl  w-1/3 h-fit">
                    <Link href='/profile' className="block text-center text-black text-3xl font-normal font-['Abel']">My profile</Link>
                    <Link href='/profile/mypurshases' className="block text-center text-black text-3xl font-normal font-['Abel']">My purshases</Link>
                    <Link  href="/profile/favorite/" className="block text-center text-black text-3xl font-normal font-['Abel']">My favorites</Link>
                    <Link href='/profile/mycards' className="block text-center text-black text-3xl font-normal font-['Abel']">My credit cards</Link>
                    <Link href='/profile/myaddress' className="block text-center text-black text-3xl font-normal font-['Abel']">My address</Link>
                    <Link href='/profile/security' className="block text-center text-black text-3xl font-normal font-['Abel']">Security</Link>
                </nav>
                <Suspense fallback={<Loading />}>
                    {children}
                </Suspense>
            </div>
        </>
    );
}