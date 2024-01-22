"use client";
import { useSidebar } from "@/lib/sidebarContext";
import {
    Cross1Icon,
    DashboardIcon,
    HomeIcon,
    LockClosedIcon,
    LockOpen1Icon
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from 'framer-motion';
import { AiFillApi, AiFillGithub, AiFillLock, AiFillYoutube, AiOutlineLock, AiOutlinePoweroff } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import Signout from "../signout/Signout";

export const SidebarNav = () => {

    const { isOpen, toggleSidebar } = useSidebar();   //false by default
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                toggleSidebar();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, toggleSidebar]);

    const links = [
        { label: "youtube", href: "/analytics/youtube", icon: AiFillYoutube },
        { label: "Github", href: "/analytics/github", icon: AiFillGithub },
    ];

    const { status, data: session } = useSession();


    return (
        //make this sidebar open
        <div ref={sidebarRef} className={`sidebar ${isOpen ? "block" : "hidden"} sm:block w-[310px] z-50 fixed left-0 top-0 bg-background text-primary`}>
            <div className="h-screen flex flex-col">
                <div className="flex items-center justify-between h-20 px-8">
                    <Link className="flex items-center gap-2 font-semibold" href="/">
                        <DashboardIcon className="h-24 w-8 text-primary" />
                        <span className="">
                            Youly <p className="text-muted-foreground text-xs">analytics</p>
                        </span>
                    </Link>
                    <div className="sm:hidden" onClick={toggleSidebar}>
                        <Cross1Icon />
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-8 pl-2 pt-4">
                    <ul className="space-y-4">
                        {links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <li key={link.href}>
                                    <Link
                                        className="flex items-center gap-4 px-6 py-2 rounded-lg text-muted-foreground hover:bg-secondary hover:shadow-sm hover:text-primary"
                                        href={link.href}
                                    >

                                        <Icon className="h-4 w-4" />
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="flex items-center justify-start h-16 px-6 border-t border-muted">
                    {session ?
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="text-sm pt-1 mx-auto flex">
                                <Avatar>
                                    <AvatarImage className="rounded-full h-8 w-8" referrerPolicy='no-referrer' src={session!.user!.image!} />
                                    <AvatarFallback>{session?.user?.name}</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    {session?.user?.email}
                                </DropdownMenuLabel>
                                <DropdownMenuItem>
                                    <Signout />
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu > : <div className="inline-flex items-center">
                            <Image
                                src="/youlylogo.png"
                                alt="logo"
                                className="rounded-xl"
                                width='50'
                                height='50' />
                            <span className="ml-3">Guest</span>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default SidebarNav;
