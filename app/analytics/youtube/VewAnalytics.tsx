/* eslint-disable react/no-unescaped-entities */
"use client";
import { IconCommentDots, VideoIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useVideoId } from "@/lib/videoIdContext";
import { BellIcon, BoxIcon, ClockIcon, EyeOpenIcon, HeartIcon, PlayIcon, Share1Icon, StarIcon, TextIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import { AiOutlineComment, AiOutlineLike, AiOutlineMessage, AiOutlineVideoCamera } from "react-icons/ai"
import YoutubeLite from "@/lib/YoutubeLite";
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { useAtom } from "jotai";
import { githubAtom } from "@/lib/atoms";


interface YoutubeResource {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
}

export const ViewAnalytics = () => {
    const [githubId, setGitHubId] = useAtom(githubAtom)
    const [inputGithubId, setInputGithubId] = useState("");

    const { data, isLoading, isError, isPending } = useQuery<YoutubeResource>({
        queryKey: ["viewCount", githubId], // Include videoId in the queryKey
        queryFn: async () =>
            await axios
                .get(`/api/github?githubId=${githubId}`)
                .then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
    });



    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setGitHubId(inputGithubId);
    };

    if (isLoading) return <Skeleton />;

    if (isError) return "error...";

    const chartData = [
        { name: "x", value: data?.viewCount },
        { name: "x", value: data?.likeCount },
        { name: "x", value: data?.favoriteCount },
        { name: "x", value: data?.commentCount },
    ];
    const totalNum = (data?.commentCount || 0) + (data?.viewCount || 0) + (data?.favoriteCount || 0) + (data?.likeCount || 0);
    return (
        <div className="mx-auto items-center flex flex-col pl-4 lg:pl-32 xl:pl-[20rem]">
            <Card className="w-full lg:w-[72rem] mt-16 mx-auto items-center flex-1 px-5">
                <div className="mt-8 lg:mt-[2rem]">
                    <form onSubmit={onSubmit} className="w-full ">
                        <div className="flex items-center space-x-4 justify-center">
                            <Input
                                value={inputGithubId}
                                placeholder="Youtube ID"
                                onChange={(e) => setInputGithubId(e.target.value)}
                                type="text"
                                className="w-full lg:w-[20rem]"
                            />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>
                </div>
                <div className="mt-8">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="hsl(var(--mountainmeadow))" />
                        </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>

                    <Tabs defaultValue="overview" className="pt-4">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="overview">Overview</TabsTrigger>
                            <TabsTrigger value="analytics">Video Analytics</TabsTrigger>
                            <TabsTrigger value="ai">AI Analysis</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview">
                            <div className="w-full p-4 grid gap-4">
                                <div className="relative group">
                                    <YoutubeLite id={githubId} thumbnail={""} title={""} />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">

                                        <div className="flex items-center gap-1">
                                            <EyeOpenIcon className="h-4 w-4" />
                                            <span>{data?.viewCount} views</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <HeartIcon className="h-4 w-4" />
                                            <span>{data?.likeCount} likes</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <TextIcon className="h-4 w-4" />
                                            <span>{data?.commentCount} comments</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </TabsContent>
                        <TabsContent value="analytics">
                            <div className="w-full p-10 grid gap-10">
                                <div className="flex flex-col items-center space-y-0 gap-4 p-0">
                                    <div className="grid gap-1 text-center">
                                        <p className="text-xs">Views, Likes, Comments, favorites</p>
                                    </div>
                                    <div className="bg-gray-100 px-3 rounded-full flex items-center py-2 dark:bg-gray-800">
                                        <AiOutlineVideoCamera className="w-6 h-6 fill-primary" />
                                        <span className="text-sm ml-4 text-gray-500 dark:text-gray-400">{totalNum}</span>
                                    </div>
                                    <div className="p-0 grid gap-4">
                                        <div className="flex items-center gap-4 text-sm">
                                            <div className="flex gap-2 items-center">
                                                <HeartIcon className="w-4 h-4 shrink-0 fill-primary" />
                                                <span className="text-gray-500 dark:text-gray-400">{data?.viewCount}</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <HeartIcon className="w-4 h-4 shrink-0 fill-primary" />
                                                <span className="text-gray-500 dark:text-gray-400">{data?.likeCount}</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <AiOutlineComment className="w-4 h-4 shrink-0 fill-primary" />
                                                <span className="text-gray-500 dark:text-gray-400">{data?.commentCount}</span>
                                            </div>
                                            <div className="flex gap-2 items-center">
                                                <StarIcon className="w-4 h-4 shrink-0 fill-primary" />
                                                <span className="text-gray-500 dark:text-gray-400">{data?.favoriteCount}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </TabsContent>
                        <TabsContent value="ai">23333333333</TabsContent>
                    </Tabs>
                </div>
            </Card >
        </div >







    );
};
