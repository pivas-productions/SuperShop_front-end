import React from 'react'
import { FaPlus } from 'react-icons/fa'

const FavoriteTabs = () => {
    return (
        <div className="FavoriteTabs pt-10 flex ml-8 space-x-6 text-center">
            <div className=" bg-white/60  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl hover:scale-110 border-solid border-2 border-black cursor-pointer ">
                <FaPlus className="text-3xl"/>
            </div>
            <div className="bg-white/60  p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl cursor-pointer  border-solid border-2 border-black backdrop-blur-sm">
                <div className="text-center text-black text-base font-normal font-['Inter'] leading-normal">Список 1 </div>
            </div>
            <div className="bg-white/60 p-2 flex justify-center hover:shadow-mega-shadow duration-75 hover:-translate-y-2 items-center rounded-3xl cursor-pointer  border-solid border-2 border-black backdrop-blur-sm">
                <div className=" text-center text-black text-base font-normal font-['Inter'] leading-normal">Список 2 </div>
            </div>
        </div>
    )
}

export default FavoriteTabs