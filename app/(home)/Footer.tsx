/* eslint-disable react/no-unescaped-entities */
import { ModeToggle } from "@/components/ModeToggle";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
    return (
        <>
            <footer className="relative z-10 bg-primary-foreground pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] mt-20">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <Link href="/#" className="mb-6 inline-block max-w-[160px]">
                                    <Image
                                        src="/youlylogo.png"
                                        alt="logo"
                                        className="max-w-full rounded-2xl"
                                        width={"100"}
                                        height={100}
                                    />
                                </Link>
                                <p className="mb-7 text-base text-body-color dark:text-dark-6">
                                    Access your YouTube analytics on the go! Stay in control of
                                    your channel's performance anytime, anywhere.
                                </p>

                                <p className="flex items-center text-sm font-medium text-dark dark:text-white">
                                    <span className="mr-3 text-primary">
                                        <AiOutlineMail />
                                    </span>
                                    <span>akinleyeisrael12@gmail.com</span>
                                </p>
                                <div className="pt-10">
                                <ModeToggle />
                                </div>
                            </div>
                        </div>

                        <LinkGroup header="Resources">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Open Ai" />
                            <NavLink link="/#" label="Analytics" />
                        </LinkGroup>
                        <LinkGroup header="Company">
                            <NavLink link="/product" label="Youly" />
                            <NavLink link="/#" label="Github" />
                            <NavLink link="/#" label="Youtube" />
                        </LinkGroup>
                        <LinkGroup header="Quick Links">
                            <NavLink link="/analytics/youtube" label="Get started" />
                            <NavLink link="/analytics/github" label="Github analytics" />
                            <NavLink link="/analytics/youtube" label="Youtube analytics" />
                        </LinkGroup>

                        <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
                            <div className="mb-10 w-full">
                                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                                    Follow Us On
                                </h4>
                                <div className="mb-6 flex items-center">
                                    <Link href={"https://github.com/akinleyeisrael"}>
                                        <GitHubLogoIcon className="h-20 w-10" />
                                    </Link>
                                </div>
                                <Link href={"https://github.com/akinleyeisrael/youly"}>
                                    source: https://github.com/akinleyeisrael/youly
                                </Link>
                                <p className="text-base text-body-color dark:text-dark-6 pt-10">
                                    &copy; 2024 Youly
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="absolute bottom-0 left-0 z-[-1]">
                        <svg
                            width={217}
                            height={229}
                            viewBox="0 0 217 229"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                                fill="url(#paint0_linear_1179_5)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_5"
                                    x1="76.5"
                                    y1={281}
                                    x2="76.5"
                                    y2="1.22829e-05"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#3056D3" stopOpacity="0.08" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>

                    <span className="absolute right-10 top-10 z-[-1]">
                        <svg
                            width={75}
                            height={75}
                            viewBox="0 0 75 75"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                                fill="url(#paint0_linear_1179_4)"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_1179_4"
                                    x1="-1.63917e-06"
                                    y1="37.5"
                                    x2={75}
                                    y2="37.5"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#13C296" stopOpacity="0.31" />
                                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;

interface LinkGroupProps {
    children: React.ReactNode;
    header: string;
}

const LinkGroup = ({ children, header }: LinkGroupProps) => {
    return (
        <>
            <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
                <div className="mb-10 w-full">
                    <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                        {header}
                    </h4>
                    <ul className="space-y-3">{children}</ul>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ link, label }: any) => {
    return (
        <li>
            <Link
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
            >
                {label}
            </Link>
        </li>
    );
};
