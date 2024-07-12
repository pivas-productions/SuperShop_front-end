import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";
import { Input } from './ui/input';
import UserButton from './auth/user-button';
import Link from 'next/link';
import Image from 'next/image';
import './header.css'
import { SessionProvider } from '@/hooks/sessionProvider';
const HeaderMain = () => {
    return (
        <header className='Header fixed z-10 w-full h-16 border-b-fuchsia-800 border-b flex flex-row gap-6 md:gap-0 justify-center md:justify-around items-center'>
            <div className="Logo w-16 h-16 justify-center items-center inline-flex relative order-2 md:-order-none" >
                <Image fill className="Logo_shop object-contain" src="/57x55.png" sizes='(max-width: 768px) 100%, (max-width: 1200px) 50%, 50%' alt='Logo shop' />
            </div>
            <div className="nav-container md:hidden relative block w-16 mr-auto h-[60px]">
                <input className="open-hamburger-menu-main absolute block h-[32px] w-[32px] top-5 left-5 z-[5] opacity-0 cursor-pointer" type="checkbox" name="" id="" />
                <div className="hamburger-lines flex flex-col justify-between z-[2] left-5 top-[17px] absolute w-[32px] h-[26px]">
                    <span className="line block h-[4px] w-full bg-gray-900 rounded line1 duration-400 ease-in-out transition-transform origin-top-left"></span>
                    <span className="line block h-[4px] w-full bg-gray-900 rounded line2 duration-200 ease-in-out transition-transform "></span>
                    <span className="line block h-[4px] w-full bg-gray-900 rounded line3 duration-400 ease-in-out transition-transform origin-bottom-left"></span>
                </div>
                <nav className="main-nav-items peer-checked/main-menu-check:translate-x-0 menu-items w-72 rounded-r-xl pt-20 duration-500 ease-in-out transition-transform pl-6 -ml-10 flex flex-col -translate-x-full shadow-inner h-screen z-40 text-white text-5xl font-normal font-['Jaldi'] leading-10 text-center bg-black/20">
                    <Link href={"/"} className="MainBut p-4 hover:pr-2 hover:font-semibold hover:bg-black/10">
                        Main
                    </Link>
                    <Link href={"/catalog"} className="CatalogBut p-4 hover:pr-2 hover:font-semibold hover:bg-black/10">
                        Catalog
                    </Link>
                    <Link href={"/additation"} className="AdditationBut p-4 hover:pr-2 hover:font-semibold hover:bg-black/10">
                        Additation
                    </Link>
                </nav>
            </div>
            <nav className="Nav hidden md:inline-flex h-16 justify-center items-start self-start">
                <Link href={"/"} className="MainBut grow shrink basis-0 self-stretch py-0.5 justify-center items-center inline-flex hover:pr-2 hover:bg-black/10">
                    <div className="Main w-64 text-center text-white text-5xl font-normal font-['Jaldi'] leading-10">Main</div>
                </Link>
                <Link href={"/catalog"} className="CatalogBut grow shrink basis-0 self-stretch py-0.5 justify-center items-center inline-flex hover:pr-2 hover:bg-black/10">
                    <div className="Catalog w-64 text-center text-white text-5xl font-normal font-['Jaldi'] leading-10">Catalog</div>
                </Link>
                <Link href={"/additation"} className="AdditationBut grow shrink basis-0 self-stretch py-0.5 justify-center items-center inline-flex hover:pr-2 hover:bg-black/10">
                    <div className="Additation w-64 text-center text-white text-5xl font-normal font-['Jaldi'] leading-10">Additation</div>
                </Link>
            </nav>
            <div className="SearchInput order-1 md:-order-none inline-flex md:w-72 h-10 md:pl-3 md:pr-4 md:py-2 md:bg-white rounded-lg md:border border-neutral-200 justify-start items-center gap-3 focus-within:border-blue-700">
                <label htmlFor="globalSearch">
                    <CiSearch className='Search w-10 h-10 md:w-6 md:h-6 relative text-black' />
                </label>
                <Input id="globalSearch" className={'hidden md:block'} type={'text'} variant='search' size="search" placeholder={'Search'} ></Input>
            </div>
            <div className="iconsButtons order-3 md:-order-none h-16 flex justify-center items-center gap-10 mr-auto md:mr-0">
                <div className="CartBut h-16 justify-center items-center inline-flex">
                    <RiShoppingCartLine className='inline-flex md:ml-auto items-center p-2 rounded-full hover:shadow-black hover:shadow-inner w-14 h-14 md:w-10 md:h-10 cursor-pointer' />
                </div>
                <div className="AccountBut h-16 justify-center items-center inline-flex">
                    <SessionProvider route={process.env.REACT_APP_API_URL_CLIENT}>
                        <UserButton />
                    </SessionProvider>
                </div>
            </div>


        </header>
    )
}

export default HeaderMain