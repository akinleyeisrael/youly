"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "@/components/ui/glowing-stars";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BoxIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthStatus } from "./AuthStatus";

export const Home = () => {
    const words = `Copy, Paste, Search`;

    const glowingStars = [
        { title: "Powered By Github", desc: "Github's rest API" },
        {
            title: "Artificial Intelligence",
            desc: "Openai's chatgbt for ai analysis for your videos and repositories",
        },
        { title: "Youtube", desc: "Youtube analytic API" },
    ];

    const router = useRouter();

    return (
        <div>
            <div className="h-[40rem] w-full bg-background flex flex-col items-center overflow-hidden rounded-md">
                {/* <div className="justify-between space-x-3  px-10 mt-[50px] flex items-center lg:ml-auto">
                    <ModeToggle />
                    <AuthStatus />
                </div> */}
                <h1 className="text-7xl md:text-9xl font-bold text-primary text-center pt-[5rem] relative">
                    <Image
                        src="/youlylogo.png"
                        alt="logo"
                        className="rounded-2xl mx-auto mb-6" 
                        width='120'
                        height='100' />
                    Unleash the Power of YouTube Analytics!
                </h1>
                <div className="w-[40rem] h-20 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>

                    <div className="flex items-center justify-center pt-5">
                        {/* ------MagicButton */}
                        <Link
                            href={"/analytics/youtube"}
                            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                        >
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                Start with Youly
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* -----BACKGROUNDGRADIENT */}
            <div className="max-w-6xl mx-auto pt-20 px-4">
                <BackgroundGradient className="rounded-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div
                        className="rounded-lg overflow-hidden"
                        style={{
                            width: "100%",
                            paddingBottom: "0%", // Set the desired aspect ratio (height/width * 100)
                            position: "relative",
                        }}
                    >
                        <Image
                            src={`/youlydashboard.png`}
                            alt="jordans"
                            className="object-cover w-full h-full"
                            width="1400"
                            height="1000"
                        />
                    </div>
                </BackgroundGradient>
            </div>

            <div className="max-w-6xl mx-auto flex py-10 text-9xl text-center lg:pl-20">
                {/* -----TextGenerateEffect */}
                <TextGenerateEffect words={words} />
            </div>

            {/* ------glowing stars */}
            <div className="flex flex-col py-20 max-w-6xl mx-auto px-4  items-center  space-y-4 sm:flex-row sm:space-y-0 sm:space-x-8">
                {glowingStars.map((index) => (
                    <GlowingStarsBackgroundCard
                        key={index.title}
                        className="w-full sm:w-1/2 lg:w-[1200px]"
                    >
                        {/* ... Glowing stars content ... */}
                        <GlowingStarsTitle>{index.title}</GlowingStarsTitle>
                        <div className="flex justify-between items-end">
                            <GlowingStarsDescription>{index.desc}</GlowingStarsDescription>
                            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                <BoxIcon />
                            </div>
                        </div>
                    </GlowingStarsBackgroundCard>
                ))}
            </div>

            {/* -------------dot background */}
            <div className="h-[25rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <p className="text-xl px-10 sm:px-40 sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    Ready to elevate your YouTube experience? Sign up for Youly now and
                    unlock the potential of your YouTube channel with powerful analytics
                    at your fingertips.
                </p>
            </div>

            {/* -------------------call to action */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20">
                <div className="relative isolate overflow-hidden bg-primary px-4 py-20 text-center rounded-3xl sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16 sm:shadow-sm">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                        Join youly today!
                    </h2>

                    <h3 className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                        Sign up to get access to exclusiive AI analysis and github analytics
                    </h3>

                    <div className="mt-8 flex items-center justify-center gap-x-6">
                        <Link
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-150  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/analytics/youtube"
                        >
                            Get Started
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>

                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle
                            cx="512"
                            cy="512"
                            r="512"
                            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                            fill-opacity="0.7"
                        ></circle>
                        <defs>
                            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                <stop stop-color="#3b82f6"></stop>
                                <stop offset="1" stop-color="#1d4ed8"></stop>
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;
