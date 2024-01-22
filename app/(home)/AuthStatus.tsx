"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Signout from "../signout/Signout";
import { Button } from "@/components/ui/button";

export const AuthStatus = () => {
    const { status, data: session } = useSession();

    if (status == 'loading') return <Skeleton />

    if (status === "unauthenticated")
        return (
            <Link className="nav-link" href="/signin">
                <Button className="rounded-2xl">
                    Signin
                </Button>
            </Link>
        );

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="text-sm pt-1">
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
        </DropdownMenu >
    )
}