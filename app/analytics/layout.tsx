import { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./Sidebar";
import { SidebarProvider } from "@/lib/sidebarContext";
import Topnav from "./Topnav";

// export const metadata: Metadata = {
//     title: "Akinola Akinleye",
//     description: "web app portfolio with admin dashbpard",
//     metadataBase: new URL('https://akinolaakinleye.com')
// }

export default function AnalyticsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <SidebarProvider>
                <Topnav />
                <Sidebar />
                {children}
            </SidebarProvider>
        </section>
    );
}
