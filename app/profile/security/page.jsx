import ChangePasswordForm from '@/components/security/change-passwor-form'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosClose } from "react-icons/io";


export default async function ProfileSecurity() {
    return (
        <div className="Profile  w-full space-y-4 pt-10 flex flex-col px-10 gap-4 bg-rose-200">
            <div className=" text-6xl  font-['Roboto'] ">Безопасность</div>
            <div className="Change password text-center bg-white/30 rounded-[30px] p-8 w-3/4">
                <div className="text-2xl  font-['Inter'] leading-normal">Сменить пароль
                </div>
                <div className="w-5/6 rounded-lg p-2 border border-gray-400 flex-col justify-start items-start gap-6 inline-flex">
                    <ChangePasswordForm />
                </div>
            </div>
            <div className="bg-white/30 rounded-xl p-5 w-3/4">
                <div className="flex justify-center gap-2">
                    <span className="text-center text-black text-2xl  font-['Inter'] leading-normal">Сеансы и устроиства</span>
                    <div className="flex">
                        <DropdownMenu modal={false}>
                            <DropdownMenuTrigger className="">
                                <BsThreeDotsVertical className='' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-40 bg-white/90  font-semibold" sideOffset={10} side="right">
                                <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                                    <button className="w-full">Выйти со всех устройств</button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className=" bg-white/80 flex justify-between  rounded-xl gap-2 p-2 mt-10">
                    <div className="">
                        <div className="flex">
                            <div className="bg-white rounded-lg justify-center items-center gap-2 inline-flex">
                            </div>
                            <div className="">
                                <span className="after:px-3 after:content-['•'] text-black  font-['Inter']">Windows</span>
                                <span className=" text-black text-sm  font-['Inter'] leading-[14px]">Браузер Yandex Browser</span>
                            </div>
                        </div>
                        <div className="">
                            <span className="after:px-3 after:content-['•'] text-black  font-['Inter']">12 июля 2024 в 18:05</span>
                            <span className="after:px-3 after:content-['•'] text-black  font-['Inter']">Ростов-на-Дону, Россия</span>
                            <span className="after:px-3 after:content-['•'] text-black  font-['Inter']">192.168.1.1</span>
                            <span className=" text-black  font-['Inter']">Текущий сеанс</span>
                        </div>
                    </div>
                    <Button type="submit" size='icon' className=" !bg-black !rounded-full text-white">
                        <IoIosClose className='text-3xl'/>
                    </Button>
                </div>
            </div>
        </div>
    )
}