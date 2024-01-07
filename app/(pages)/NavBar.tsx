import Link from 'next/link'
import React from 'react'

const links = [
    { label: "home", href: "/" },
    { label: "pricing", href: "/pricing" },
    { label: "solutions", href: "/solutions" },
    { label: "company", href: "/company" },
]

const NavBar = () => {
    return (
        <>
            <div className='flex space-x-6 px-4  py-3 border-b border'>
                {links.map(link => (
                    <ul key={link.href}>
                        <li><Link href={link.href}>{link.label} </Link></li>
                    </ul>
                ))}
            </div>
        </>
    )
}

export default NavBar