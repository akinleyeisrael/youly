/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const ProductPage = () => {
    return (
        <div className='mx-auto items-center max-w-2xl flex flex-col justify-center px-6'>
            <div className='pt-[10rem]'>
                <Image
                    src={`/youlylogo.png`}
                    alt="jordans"
                    className=""
                    width="400"
                    height="400"
                />
            </div>

            <div className='font-medium text-2xl pt-8 tracking-tighter text-muted-foreground break-words'>
                <div>
                    Welcome to Youly - Unleash the Power of YouTube Analytics!
                    Are you ready to take your YouTube game to the next level? Look no further than Youly, your ultimate YouTube analytics companion. Whether you're a content creator, marketer, or just a YouTube enthusiast, Youly is here to empower you with insightful data and robust analytics tools, all in one user-friendly platform.
                </div>

                <div className='pt-8'>
                    <b>Github Analytics:</b> We also provide github analysis of your github account. This feature is only available to users signed in.
                </div>
                <div className='pt-8'>
                    <b>Comprehensive Analytics:</b> Dive deep into your YouTube performance with detailed insights on views.
                </div>
                <div className='pt-8'>
                    🚀 <b>Performance Tracking: </b> Keep a close eye on the growth of your channel. Track your video views, subscriber count, and engagement trends over time.
                </div>
                <div className='pt-8'>

                    <b>Comprehensive Analytics:</b> Dive deep into your YouTube performance with detailed insights on views, engagement, demographics, and more. Understand your audience.

                </div>
            </div>
        </div>
    )
}

export default ProductPage