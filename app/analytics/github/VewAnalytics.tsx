/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { githubAtom } from "@/lib/atoms";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import React, { FormEvent, useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
    Bar,
    BarChart,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface GithubResource {
    followers: number;
    numRepos: number;
    totalStars: number;
    forksCount: number;
    openIssues: number;
}

export const ViewAnalyticsGithub = () => {
    const [username, setUsername] = useAtom(githubAtom);
    const [inputUsername, setUserInputname] = useState("");

    const { data, isLoading, isError, isPending } = useQuery({
        queryKey: ["github", username], // Include videoId in the queryKey
        queryFn: async () =>
            await axios
                .get(`/api/github?username=${username}`)
                .then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
    });

    console.log(data);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUsername(inputUsername);
    };

    if (isLoading) return <Skeleton />;

    if (isError) return "error...";

    const chartData = [
        { name: "Followers", value: data?.followers || 0 },
        { name: "Repositories", value: data?.numRepos || 0 },
        { name: "Total Stars", value: data?.totalStars || 0 },
        { name: "Forks Count", value: data?.forksCount || 0 },
        { name: "Open Issues", value: data?.openIssues || 0 },
    ];

    const analytics = [
        { id: 1, name: "Transactions every 24 hours", value: "44 million" },
        { id: 2, name: "Assets under holding", value: "$119 trillion" },
        { id: 3, name: "New users annually", value: "46,000" },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
    return (
        <div className="mx-auto items-center flex flex-col pl-4 lg:pl-32 xl:pl-[20rem]">
            <Card className="w-full lg:w-[72rem] mt-16 mx-auto items-center flex-1 px-5">
                <div className="mt-8 lg:mt-[2rem]">
                    <form onSubmit={onSubmit} className="w-full ">
                        <div className="flex items-center space-x-4 justify-center">
                            <Input
                                value={inputUsername}
                                placeholder="Github username"
                                onChange={(e) => setUserInputname(e.target.value)}
                                type="text"
                                className="w-full lg:w-[20rem]"
                            />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>
                </div>
                <div className="mt-8">
                    {/* <ResponsiveContainer width="100%" height={200}>
                        <PieChart width={800} height={400}>
                            <Pie
                                data={chartData}
                                cx={120}
                                cy={200}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                            <Pie
                                data={chartData}
                                cx={420}
                                cy={200}
                                startAngle={180}
                                endAngle={0}
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer> */}

                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="hsl(var(--mountainmeadow))" />
                        </BarChart>
                    </ResponsiveContainer>

                    <Tabs defaultValue="analytics" className="pt-4">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="analytics">Github Analytics</TabsTrigger>
                            <TabsTrigger value="ai">AI Analysis</TabsTrigger>
                        </TabsList>

                        <TabsContent value="analytics">
                            <div className="bg-white py-24 sm:py-32">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                        {analytics.map((stat) => (
                                            <div
                                                key={stat.id}
                                                className="mx-auto flex max-w-xs flex-col gap-y-4"
                                            >
                                                <dt className="text-base leading-7 text-gray-600">
                                                    {stat.name}
                                                </dt>
                                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                                    {stat.value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="ai">23333333333</TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    );
};
