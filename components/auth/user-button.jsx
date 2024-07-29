"use client";
import { FaUser } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/auth/logout-button";
import Link from "next/link";
import { useSession } from "@/hooks/sessionProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const UserButton = () => {
    const { session } = useSession();
    const pathname = usePathname();
    const [_, setState] = useState(); // Unused state to force re-render

    useEffect(() => {
        setState(session); // Force re-render on session state change
    }, [session]);
    // console.log(pathname, 'pathname')
    // console.log(session, 'session in userButton')
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger className=" hover:shadow-black hover:shadow-inner">
                <span className="relative flex w-14 h-14 md:h-10 md:w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-button-bg/20 text-primary-foreground">
                        <FaUser className="h-8 w-8" />
                    </span>
                </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 bg-black/20 font-semibold" align="end">
                {session ? (
                    <>
                        <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                            <Link href={'/profile'} className="w-full">Профиль</Link>
                        </DropdownMenuItem>
                        <LogoutButton>
                            <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                                <ImExit className="h-4 w-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </LogoutButton>
                    </>
                ) : (
                    <DropdownMenuItem className="hover:bg-button-bg/20 py-2 focus:bg-button-bg/20 hover:text-primary-foreground focus:text-primary-foreground flex text-center items-center justify-center">
                        <Link href={`/auth/login?callbackUrl=${pathname}`} className="w-full">Войти</Link>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>);
};
export default UserButton;
