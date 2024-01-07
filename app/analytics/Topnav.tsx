import { ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons'
import React from 'react'

const Topnav = () => {
    const currentDate = new Date().toLocaleDateString("default", { month: "long" })
    return (
        <div className="fixed bg-secondary text-muted-foreground flex max-w-[76rem]  w-full mx-auto items-center justify-start px-4 py-2 space-x-2 sm:ml-[20rem]">
            <button className="bg-card p-2 rounded-xl hover:shadow-sm">
                <ArrowLeftIcon/>
            </button>
            <button className="bg-card p-2 rounded-xl hover:shadow-sm">
                <ArrowRightIcon/>
            </button>
            <div className='pl-2 inline-flex gap-1'>
                <CalendarIcon className='m-1'/>
                <p className='text-sm m-[2px]'>{currentDate}</p>
            </div>
        </div>
    )
}

export default Topnav