"use client";
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";

type videoIdContextType = {
    videoId: string;
    setVideoId: Dispatch<SetStateAction<string>>
};

const VideoIdContext = createContext<videoIdContextType | undefined>(undefined);

export const VideoIdProvider = ({ children }: PropsWithChildren) => {
    const [videoId, setVideoId] = useState('');

    return (
        <VideoIdContext.Provider value={{ videoId, setVideoId }}>
            {children}
        </VideoIdContext.Provider>
    );
};

export const useVideoId = () => {
    const videoIdContext = useContext(VideoIdContext);
    if (!videoIdContext) {
        throw new Error("Sidebar context is undefined");
    }
    return videoIdContext;
};

export default VideoIdContext;
