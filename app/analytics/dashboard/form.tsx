
"use client"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getVideoAnalytics } from "@/lib/actions";
import { LoopIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";
// import { analyticsAtom } from "@/lib/atom";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useVideoId } from "@/lib/videoIdContext";
import { ViewAnalytics } from "./VewAnalytics";

export const DashboardForm = () => {
    // const [videoId, setVideoId] = useAtom(analyticsAtom);
    const { videoId, setVideoId } = useVideoId();
    const [inputVideoId, setInputVideoId] = useState("");
    const router = useRouter()

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        setInputVideoId(videoId);
        router.refresh()
    }
    return (
        <div>
            <form onSubmit={onSubmit} className="hidden sm:block">
                <div className="flex items-center space-x-2">
                    <Input
                        // name="videoId"
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
    );
};

export const SearchDashboardForm = () => {
    return (
        <div>
            <MagnifyingGlassIcon />
        </div>
    );
};
