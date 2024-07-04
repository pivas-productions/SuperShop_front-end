import { Suspense } from 'react'
import Loading from '@/components/Loading';
export default async function AllPage({
    children, // will be a page or nested layout
}) {
    return (
        <>
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        </>
    );
}