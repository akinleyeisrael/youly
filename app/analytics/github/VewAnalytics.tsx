/* eslint-disable react/no-unescaped-entities */
"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { githubAtom } from "@/lib/atoms";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
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
    login: string,
    url: string,
    followers: number;
    numRepos: number;
    totalStars: number;
    forksCount: number;
    openIssues: number;
}

export const ViewAnalyticsGithub = () => {
    const [inputUsername, setUserInputname] = useState("");

    const { data, isLoading, isError, refetch } = useQuery<GithubResource>({
        queryKey: ["github", inputUsername], // Include videoId in the queryKey
        queryFn: async () =>
            await axios
                .get(`/api/github?username=${inputUsername}`)
                .then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
        enabled: false, // Ensure the query is only enabled when a valid username 
    });

    console.log(data);
    console.log(inputUsername, "inputusername")

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
        await axios.post('/api/analyze', data)
    };

    const onChangeInputGithubName = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInputname(e.target.value)
    }

    if (isLoading) return <Skeleton />;

    if (isError) {
        return (
            <Alert variant="destructive">
                <ExclamationTriangleIcon className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                    Your session has expired. Please log in again.
                </AlertDescription>
            </Alert>
        )
    }


    const chartData = [
        { name: "Followers", value: data?.followers || 0 },
        { name: "Repositories", value: data?.numRepos || 0 },
        { name: "Total Stars", value: data?.totalStars || 0 },
        { name: "Forks Count", value: data?.forksCount || 0 },
        { name: "Open Issues", value: data?.openIssues || 0 },
    ];

    const analytics = [
        { id: 1, name: "Followers", value: data?.followers },
        { id: 2, name: "Repositories", value: data?.numRepos },
        { id: 3, name: "Total Stars", value: data?.totalStars },
        { id: 3, name: "Fork Count", value: data?.forksCount },
        { id: 3, name: "Open Issues", value: data?.openIssues },
    ];

    return (
        <div className="mx-auto items-center flex flex-col px-4 lg:pl-32 xl:pl-[19rem] bg-background">
            <Card className="w-full lg:w-[74rem] mt-16 mx-10 items-center flex-1 px-5 lg:mt-16 bg-primary-foreground">
                <div className="mt-8 lg:mt-[2rem]">
                    <form onSubmit={onSubmit} className="w-full ">
                        <div className="flex items-center space-x-2 justify-center">
                            <Input
                                value={inputUsername}
                                placeholder="Github username"
                                onChange={onChangeInputGithubName}
                                type="text"
                                className="w-full lg:w-[20rem] rounded-2xl"
                            />
                            <Button type="submit">Search</Button>
                        </div>
                    </form>
                </div>
                <div className="">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart width={400} height={400}>
                            <Pie
                                dataKey="value"
                                isAnimationActive={false}
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            />
                            <Pie dataKey="value" data={chartData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height={200} className={'pt-2'}>
                        <BarChart data={chartData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" className="bg-mountainmeadow" fill="hsl(var(--mountain-meadow))" />
                        </BarChart>
                    </ResponsiveContainer>

                    <Tabs defaultValue="analytics" className="pt-4">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="analytics">Github Analytics</TabsTrigger>
                            <TabsTrigger value="ai">AI Analysis</TabsTrigger>
                        </TabsList>

                        <TabsContent value="analytics" className="bg-secondary">
                            <div className="py-24 sm:py-10 rounded-md">
                                <div className="text-center mb-20">
                                    <h1 className="font-bold">{data?.login}</h1>
                                    {data?.url &&
                                        <Link href={data?.url} className="hover:cursor-pointer text-muted-foreground">
                                            <p>{data?.url}</p>
                                        </Link>
                                    }
                                </div>
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                        {analytics.map((stat) => (
                                            <div
                                                key={stat.id}
                                                className="mx-auto flex max-w-xs flex-col gap-y-4"
                                            >
                                                <dt className="text-base leading-7 text-primary">
                                                    {stat.name}
                                                </dt>
                                                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                                                    {stat.value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="ai" className="bg-secondary">
                            <div className="h-60 text-center">
                                needs open ai api key
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </Card>
        </div>
    );
};
