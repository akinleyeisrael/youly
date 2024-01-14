"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { getVideoAnalytics } from '@/lib/actions';
import { analyticsAtom } from '@/lib/atom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { useQuery } from '@tanstack/react-query';
import { atom, useAtom } from 'jotai'
import { useEffect, useState } from 'react';


// Create your atoms and derivatives


interface YoutubeResource {
    viewCount: number
    likeCount: number
    dislikeCount: number
}
export const ViewAnalytics = () => {
    const [videoId, setVideoId] = useAtom(analyticsAtom);

    const { data, isLoading, isError, isPending } = useQuery<YoutubeResource>({
        queryKey: ['viewCount'],
        queryFn: () => axios.get(`/api/youtube`).then(res => res.data),
        staleTime: 0,
        retry: 3,
    });

    if (isLoading) return <Skeleton />

    if (isError) return 'error...'


    return (
        <div className='mx-auto items-center flex flex-col '>
            <div className='mt-[5rem]'>
                chart
            </div>
            <div>
                viewcount - {data?.viewCount}
                likecount -{data?.likeCount}
                dislikecount - {data?.dislikeCount}
            </div>
        </div>
    )
}
