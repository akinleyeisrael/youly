/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import {
    Card
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
    Bar,
    BarChart,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

interface GithubResource {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
}

export const ViewAnalyticsYoutube = () => {
    // const { videoId, setVideoId } = useVideoId();
    const [inputVideoId, setInputVideoId] = useState("");
    const { data: session } = useSession()

    const { data, isLoading, isError, refetch } = useQuery<GithubResource>({
        queryKey: ["viewCount", inputVideoId], // Include videoId in the queryKey
        queryFn: async () =>
            await axios
                .get(`/api/youtube?videoId=${inputVideoId}`)
                .then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
        enabled: false,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    };

    if (isLoading) return <Skeleton />;

    if (isError) return "error...";

    const chartData = [
        { name: "Views", value: data?.viewCount },
        { name: "Likes", value: data?.likeCount },
        { name: "Comments", value: data?.commentCount },
        { name: "Favorites", value: data?.favoriteCount },
    ];
    const analytics = [
        { id: 1, name: "Views", value: data?.viewCount },
        { id: 2, name: "Likes", value: data?.likeCount },
        { id: 3, name: "Comments", value: data?.commentCount },
        { id: 3, name: "Favorites", value: data?.favoriteCount },
    ];
    return (
        <div className="mx-auto items-center flex flex-col px-4 lg:pl-32 xl:pl-[19rem] bg-background">
            <Card className="w-full lg:w-[74rem] mt-16 mx-10 items-center flex-1 px-5 lg:mt-16 bg-primary-foreground mb-2">
                <div className="flex-1 items-center justify-center">
                    <div className="mt-8 lg:mt-[2rem]">
                        <form onSubmit={onSubmit} className="w-full ">
                            <div className="flex items-center space-x-4 justify-center">
                                <Input
                                    value={inputVideoId}
                                    placeholder="Youtube ID"
                                    onChange={(e) => setInputVideoId(e.target.value)}
                                    type="text"
                                    className="w-full lg:w-[20rem] rounded-2xl"
                                />
                                <Button
                                    type="submit"
                                    variant={"default"}
                                    className="rounded-2xl"
                                >
                                    Search
                                </Button>
                            </div>
                        </form>
                    </div>
                    <div className="">
                        <ResponsiveContainer width="100%" height={200} className={"mt-6"}>
                            <BarChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="value" fill="hsl(var(--mountain-meadow))" />
                            </BarChart>
                        </ResponsiveContainer>

                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={chartData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#8884d8"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>

                        <Tabs defaultValue="analytics" className="pt-4">
                            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2">
                                <TabsTrigger value="analytics">Video Analytics</TabsTrigger>
                                {session &&
                                    <TabsTrigger value="ai">AI Analysis</TabsTrigger>
                                }
                            </TabsList>
                            <TabsContent value="analytics" className="bg-secondary">
                                <div className="py-24 sm:py-32">
                                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                            {analytics.map((stat) => (
                                                <div
                                                    key={stat.id}
                                                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                                                >
                                                    <dt className="text-base leading-7 ">{stat.name}</dt>
                                                    <dd className="order-first text-3xl font-semibold tracking-tight ">
                                                        {stat.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="ai" className="bg-secondary">
                                <div className="h-60 text-center">needs open ai api key</div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </Card>
        </div>
    );
};
