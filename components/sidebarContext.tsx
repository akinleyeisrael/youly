"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type SidebarContextType = {
    isOpen: boolean;
    toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: PropsWithChildren) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const sidebarContext = useContext(SidebarContext);
    if (!sidebarContext) {
        throw new Error("Sidebar context is undefined");
    }
    return sidebarContext;
};

export default SidebarContext;
