"use server"

import axios from 'axios';


export async function getVideoAnalytics() {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'statistics',
                id: '1MTyCvS05V4',
                key: process.env.YOUTUBE_API_KEY,
            },
        });

        console.log(response)
        console.log(response.data);

        // Handle the response and extract the view count and other analytics data
        const { items } = response.data;

        const { viewCount, likeCount, dislikeCount } = items[0].statistics;
        return{ viewCount, likeCount, dislikeCount };
     
    } catch (error) {
        console.error('Error fetching video analytics:', error);
        return { viewCount: 0, likeCount: 0, dislikeCount: 0 };
    }
}
