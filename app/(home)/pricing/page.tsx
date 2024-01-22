import React from 'react'

const Pricingpage = () => {
    return (
        <section className="flex items-center justify-center mt-[10rem] pb-10">
            <div className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
                <h3 className="text-5xl font-semibold text-center flex gap-2 justify-center mb-10">No Pay, use forever</h3>
                <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="ring-1 ring-primary rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h3 id="tier-standard" className="text-primary text-2xl font-semibold leading-8">Standard</h3>
                        </div>
                        <p className="mt-4 text-base leading-6 text-muted-foreground">without signin</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="line-through text-2xl font-sans text-primary">$</span><span
                                className="text-5xl font-bold tracking-tight text-primary">free</span>
                        </p>
                        <a href=""
                            aria-describedby="tier-standard"
                            className="text-primary ring-1 ring-inset ring-primary hover:ring-primary mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            target="_blank">Buy now</a>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-primary xl:mt-10">
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Lifetime access
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>All AI features
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Youtube analytics
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mo">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Use your own OpenAI key
                            </li>
                        </ul>
                    </div>
                    <div className="ring-1 ring-primary rounded-3xl p-8 xl:p-10">
                        <div className="flex items-center justify-between gap-x-4">
                            <h3 id="tier-standard" className="text-primary text-2xl font-semibold leading-8">Pro</h3>
                        </div>
                        <p className="mt-4 text-base leading-6 text-muted-foreground">google or github signin</p>
                        <p className="mt-6 flex items-baseline gap-x-1">
                            <span className="line-through text-2xl font-sans text-primary">$</span><span
                                className="text-5xl font-bold tracking-tight text-primary">free</span>
                        </p>
                        <a href=""
                            aria-describedby="tier-standard"
                            className="text-primary ring-1 ring-inset ring-primary hover:ring-primary mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            target="_blank">Buy now</a>
                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-primary xl:mt-10">
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Lifetime access
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Youtube analytics
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Github analytics
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>All AI features
                            </li>
                            <li className="flex gap-x-3 text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-mountainmeadow">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>Use your own OpenAI key
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricingpage