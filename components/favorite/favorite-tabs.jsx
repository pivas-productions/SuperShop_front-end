import React from 'react'
import { FavoriteDialog } from './favorite-dialog'
import Link from 'next/link'

const FavoriteTabs = () => {
    return (
        <div className="FavoriteTabs pt-10 flex ml-8 space-x-6 text-center">
            <FavoriteDialog fetch_route={process.env.REACT_APP_API_URL_CLIENT} />
            <Link href='/profile/favorite/(slug)' className="bg-white/60  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl cursor-pointer  border-solid border-2 border-black backdrop-blur-sm">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">Список 1 </div>
            </Link>
            <Link href='/profile/favorite/(slug)' className="bg-white/60 p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl cursor-pointer  border-solid border-2 border-black backdrop-blur-sm">
                <div className=" text-center text-black text-base font-normal font-['Inter'] leading-normal">Список 2 </div>
            </Link>
        </div>
    )
}

export default FavoriteTabs