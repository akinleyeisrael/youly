"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useSession } from "next-auth/react";
import { Skeleton } from '@/components/ui/skeleton';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Signout from '../signout/Signout';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/nav-menu';
import { cn } from '@/lib/utils';
import { AuthStatus } from './AuthStatus';
import { ModeToggle } from '@/components/ModeToggle';


const links = [
    { label: "home", href: "/" },
    { label: "pricing", href: "/pricing" },
    { label: "solutions", href: "/solutions" },
    { label: "company", href: "/company" },
]


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
        >
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home" >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/">Home</HoveredLink>
                
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Products">
                <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/product">Product</HoveredLink>
                
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/pricing">Pricing</HoveredLink>
                    </div>
                </MenuItem>
                
            </Menu>
        </div>
    );
}



export default Navbar