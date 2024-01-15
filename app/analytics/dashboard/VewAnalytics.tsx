/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getVideoAnalytics } from "@/lib/actions";
import { analyticsAtom } from "@/lib/atoms";
import { VideoIdProvider, useVideoId } from "@/lib/videoIdContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Label,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface YoutubeResource {
    viewCount: number;
    likeCount: number;
    favoriteCount: number;
    commentCount: number;
}

export const ViewAnalytics = () => {
    const { videoId, setVideoId } = useVideoId();
    const [inputVideoId, setInputVideoId] = useState("");

    const { data, isLoading, isError, isPending } = useQuery<YoutubeResource>({
        queryKey: ["viewCount", videoId], // Include videoId in the queryKey
        queryFn: async () =>
            await axios
                .get(`/api/youtube?videoId=${videoId}`)
                .then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVideoId(inputVideoId);
    };

    if (isLoading) return <Skeleton />;

    if (isError) return "error...";

    const chartData = [
        { name: "Views", value: data?.viewCount },
        { name: "Likes", value: data?.likeCount || 0 },
        { name: "Favorites", value: data?.favoriteCount || 0 },
        { name: "Comments", value: data?.commentCount || 0 },
    ];
    return (
        <div className="mx-auto items-center flex flex-col">
            <div className="mt-[4rem]">
                <form onSubmit={onSubmit} className="block">
                    <div className="flex items-center space-x-2">
                        <Input
                            value={inputVideoId}
                            placeholder="Youtube ID"
                            onChange={(e) => setInputVideoId(e.target.value)}
                            type="text"
                            className="w-[20rem]"
                        />
                        <Button type="submit">search</Button>
                    </div>
                </form>
            </div>
            <div className="pl-40 pt-6">
                <Card className="w-[60rem] p-6 px-6">
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" style={{ fill: "hsl(var(--primary))" }} />
                        </BarChart>
                    </ResponsiveContainer>

                    <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="step"
                                dataKey="value"
                                stroke="#8884d8"
                                strokeWidth={2}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </Card>
                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="ai">ai</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when youre done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label >Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="space-y-1">
                                    <Label>Username</Label>
                                    <Input id="username" defaultValue="@peduarte" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label >Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label >New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="ai">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label >Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label >New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            



                viewcount - {data?.viewCount}
                likecount -{data?.likeCount}
                favoriteCount - {data?.favoriteCount}
                comments - {data?.commentCount}
            </div>
        </div>
    );
};
