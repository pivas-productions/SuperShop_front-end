import React from 'react'
import Image from "next/image";
import mainPhoto from '@/public/main_page/main_photo.png'
import { FaChevronDown } from "react-icons/fa";

const HeaderPhoto = () => {
  return (
    <div className="header-photo h-screen flex justify-center items-center">
        <Image
          className="relative pointer-events-none object-cover"
          src={mainPhoto}
          alt="Next.js Logo"
          fill
          sizes="100vw"
          placeholder="blur"
          priority={true}
        />

        <div className="absolute top-1/2 -translate-y-1/2 py-6  justify-center items-center inline-flex flex-col">
          <span className="text-shadow-2 text-center text-neutral-300 text-[50px] font-normal font-['Montaga'] leading-[110px] tracking-widest">Welcome to Super Shop</span>

        </div>
        <div className="arrow-down m-8 absolute bottom-20 ">
            <FaChevronDown  className="block absolute w-10 h-10 left-1/2 -translate-x-1/2 animate-arrow_down"/>
            <FaChevronDown  className="block absolute w-10 h-10 left-1/2 -translate-x-1/2 animate-arrow_down animate-delay-[-0.2s]"/>
            <FaChevronDown  className="block absolute w-10 h-10 left-1/2 -translate-x-1/2 animate-arrow_down animate-delay-[-0.1s]"/>
        </div>
      </div>
  )
}

export default HeaderPhoto