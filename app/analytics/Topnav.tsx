"use client";
import { useSidebar } from "@/lib/sidebarContext";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CalendarIcon,
    MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { useAtom } from "jotai";
import React from "react";
import { Rotate as Hamburger } from "hamburger-react";
import { DashboardForm } from "./dashboard/form";

const Topnav = () => {
    const currentDate = new Date().toLocaleDateString("default", {
        month: "long",
    });

    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div className="fixed bg-secondary text-muted-foreground flex max-w-[76rem] w-full mx-auto items-center justify-between px-4 py-2 space-x-2 sm:ml-[20rem]">
            <div className="items-center flex space-x-2">
                <div className="sm:hidden">
                    <Hamburger size={16} toggled={isOpen} toggle={toggleSidebar} />
                </div>
                <button className="bg-card p-2 rounded-xl hover:shadow-sm">
                    <ArrowLeftIcon />
                </button>
                <button className="bg-card p-2 rounded-xl hover:shadow-sm">
                    <ArrowRightIcon />
                </button>
                <div className="pl-2 inline-flex items-center">
                    <CalendarIcon className="m-1" />
                    <p className="text-sm m-[2px]">{currentDate}</p>
                </div>
                <div className="pl-20">
                    {/* <DashboardForm /> */}
                </div>
            </div>
            <div >
                <MagnifyingGlassIcon />
            </div>
        </div>
    );
};

export default Topnav;
