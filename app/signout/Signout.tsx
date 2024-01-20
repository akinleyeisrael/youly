
"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Signout() {
    const router = useRouter()
    return (
        <p
            className="w-full hover:cursor-pointer"
            onClick={(() => {
                signOut()
                router.push("/")
            })}
        >
            Log out
        </p >
    );
}
