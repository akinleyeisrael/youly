import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const videoId = request.nextUrl.searchParams.get('vidoId');
        console.log("url params search", videoId)

        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/videos/",
            {
                params: {
                    part: "statistics",
                    id: videoId,
                    key: process.env.YOUTUBE_API_KEY,
                },
            }
        );

        console.log(response);
        console.log(response.data);

        // Handle the response and extract the view count and other analytics data
        const { items } = response.data;

        const { viewCount, likeCount, dislikeCount } = items[0].statistics;

        return NextResponse.json({
            viewCount,
            likeCount,
            dislikeCount,
        });
    } catch (error) {
        console.error("Error fetching video analytics:", error);
        return { viewCount: 0, likeCount: 0, dislikeCount: 0 };
    }
}
