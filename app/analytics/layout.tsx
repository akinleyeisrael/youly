import { Metadata } from "next"
import { Inter } from "next/font/google"
import Sidebar from "./Sidebar"

// export const metadata: Metadata = {
//     title: "Akinola Akinleye",
//     description: "web app portfolio with admin dashbpard",
//     metadataBase: new URL('https://akinolaakinleye.com')
// }

const inter = Inter({ subsets: ['greek'] })
export default function HomeLayout({ children, }: { children: React.ReactNode }) {
    return (
        <section className={inter.className}>
            <Sidebar />
            {children}
        </section>
    )
}