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
        { label: "youtube", href: "/analytics/youtube", icon: AiFillYoutube},
        { label: "Github", href: "/analytics/github", icon: AiFillGithub },
    ];

    return (
        //make this sidebar open
        <div ref={sidebarRef} className={`sidebar ${isOpen ? "sidebar-block" : "hidden"} sm:block w-[320px] fixed left-0 top-0 bg-secondary text-primary`}>
            <div className="h-screen flex flex-col">
                <div className="flex items-center justify-between h-20 px-8">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
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
                                        className="flex items-center gap-4 px-6 py-2 rounded-lg text-muted-foreground hover:bg-background hover:shadow-sm hover:text-primary"
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
                <div className="flex items-center justify-start h-16 px-6 border-t border-gray-700">
                    <Image
                        alt="Avatar"
                        className="rounded-full"
                        height="32"
                        src="/placeholder.svg"
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                        width="32"
                    />
                    <span className="ml-3">User</span>
                </div>
            </div>
        </div>
    );
};

export default SidebarNav;
