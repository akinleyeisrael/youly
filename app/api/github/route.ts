import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {

    const github = request.nextUrl.searchParams.get('github');
    console.log("url params search", github);

    

    
}