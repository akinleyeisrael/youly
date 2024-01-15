"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getVideoAnalytics } from "@/lib/actions";
import { analyticsAtom } from "@/lib/atoms";
import { VideoIdProvider, useVideoId } from "@/lib/videoIdContext";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";

interface YoutubeResource {
    viewCount: number;
    likeCount: number;
    dislikeCount: number;
}

export const ViewAnalytics = () => {
    const { videoId, setVideoId } = useVideoId();
    const [inputVideoId, setInputVideoId] = useState("");

    const { data, isLoading, isError, isPending } = useQuery<YoutubeResource>({
        queryKey: ["viewCount", videoId], // Include videoId in the queryKey
        queryFn: async () =>
            await axios.get(`/api/youtube?videoId=${videoId}`).then((res) => res.data),
        staleTime: 60 * 1000,
        retry: 3,
    });

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setVideoId(inputVideoId);
    };

    if (isLoading) return <Skeleton />;

    if (isError) return "error..."; 1

    return (
        <div className="mx-auto items-center flex flex-col ">
            <div className="mt-[5rem]">
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
            <div>
                viewcount - {data?.viewCount}
                likecount -{data?.likeCount}
                dislikecount - {data?.dislikeCount}
            </div>
        </div>
    );
};
