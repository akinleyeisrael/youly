"use client"
import {
    BarChartIcon,
    BoxIcon,
    DashboardIcon,
    HomeIcon,
    PersonIcon,
    StackIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { label: "Dashboard", href: "/analytics/dashboard", icon: HomeIcon },
        { label: "Dashboard", href: "/analytics/dashboard", icon: HomeIcon },
        { label: "Dashboard", href: "/analytics/dashboard", icon: HomeIcon },
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggling isOpen state directly
    };


    return (
        <div className="h-screen w-[320px] fixed left-0 top-0 bg-secondary text-primary flex flex-col">
            <div className="flex items-center justify-between h-20 px-8">
                <Link className="flex items-center gap-2 font-semibold" href="#">
                    <DashboardIcon className="h-24 w-8 text-primary" />
                    <span className="">Youly <p className="text-muted-foreground text-xs">analytics</p></span>
                </Link>
                <div className="">
                    he
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
    );
};

export default Sidebar;
