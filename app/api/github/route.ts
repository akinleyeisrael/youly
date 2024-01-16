import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const username = request.nextUrl.searchParams.get("username");
    console.log("url params search", username);
    
    const baseURL = "https://api.github.com";

    try {
        const response1 = await axios.get(
            `${baseURL}/users/${username}/followers`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                },
            }
        );
        const followers = await response1.data.length;

        const response2 = await axios.get(`${baseURL}/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });
        const repositories = await  response2.data; 

        const numRepos = Object.keys(repositories).length
        
        const totalStars = repositories.reduce((acc: any, repo: { stargazers_count: any; }) => acc + repo.stargazers_count, 0);

        var forksCount = 0
        repositories.forEach((f: { forks_count: number; }) => {
            forksCount += f.forks_count
        })
        const openIssues = repositories.reduce((acc: any, repo: { open_issues: any; }) => acc + repo.open_issues, 0);

        return NextResponse.json({ followers, numRepos, totalStars, forksCount, openIssues});
    } catch (error) {
        console.error("GitHub API Error:", error);
        throw error;
    }
}
