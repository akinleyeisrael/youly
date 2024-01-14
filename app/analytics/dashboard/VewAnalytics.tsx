"use client"
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
  console.log("video id", videoId)

  const { data, isLoading, isError } = useQuery<YoutubeResource>({
    queryKey: ['viewCount'],
    queryFn: () => axios.get(`/api/youtube?videoId=${videoId}`).then(res => res.data),
    staleTime: 0,
    retry: 3,
  });


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
