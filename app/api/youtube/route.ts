export const dynamic = 'force-dynamic'
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const videoId = request.nextUrl.searchParams.get('videoId');
        console.log("url params search", videoId);
        

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

        const items = response.data.items;

        if (items && items.length > 0 && items[0].statistics) {
            const { viewCount, likeCount, favoriteCount, commentCount } = items[0].statistics;
            return NextResponse.json({
                viewCount,
                likeCount,
                favoriteCount,
                commentCount
            }, { status: 200 });
        } else {
            return NextResponse.json("error");
        }
    } catch (error) {
        console.error("Error fetching video analytics:", error);
        return NextResponse.error();
    }
}
