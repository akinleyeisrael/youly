import { Metadata } from "next"
import { Inter } from "next/font/google"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { ModeToggle } from "@/components/ModeToggle"
import { AuthStatus } from "./AuthStatus"

// export const metadata: Metadata = {
//     title: "Akinola Akinleye",
//     description: "web app portfolio with admin dashbpard",
//     metadataBase: new URL('https://akinolaakinleye.com')
// }

const inter = Inter({ subsets: ['greek'] })
export default function HomeLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section className={inter.className}>
            <div className="justify-end flex m-1 sm:m-5 md:m-5 lg:p-[36px] ">
                {/* <ModeToggle /> */}
                <AuthStatus />
            </div>
            <NavBar />
            {children}
            <Footer />
        </section>
    )
}