"use client"
import Link from 'next/link'
import React from 'react'
import { useSession } from "next-auth/react";
import { Skeleton } from '@/components/ui/skeleton';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Signout from '../signout/Signout';


const links = [
    { label: "home", href: "/" },
    { label: "pricing", href: "/pricing" },
    { label: "solutions", href: "/solutions" },
    { label: "company", href: "/company" },
]

const NavBar = () => {
    return (
        <>
            <div className='flex py-3 border-b border justify-between'>
                <div className='flex space-x-6 px-4 '>
                    {links.map(link => (
                        <ul key={link.href}>
                            <li><Link href={link.href}>{link.label} </Link></li>
                        </ul>
                    ))}
                </div>
                <div>
                    <AuthStatus />
                </div>
            </div>
        </>
    )
}

const AuthStatus = () => {
    const { status, data: session } = useSession();

    if (status == 'loading') return <Skeleton />

    if (status === "unauthenticated")
        return (
            <Link className="nav-link" href="/signin">
                Login
            </Link>
        );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="text-sm pt-3">
                <Avatar>
                    <AvatarImage referrerPolicy='no-referrer' src={session!.user!.image!} />
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
        </DropdownMenu >
    )
}

export default NavBar