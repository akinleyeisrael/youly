import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.nextUrl)
    const username = url.searchParams.get("username");

    console.log("url params github", username);

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
        const repositories = await response2.data;

        const login = repositories[0].owner.login

        const url = repositories[0].owner.html_url

        const numRepos = Object.keys(repositories).length

        const totalStars = repositories.reduce((acc: any, repo: { stargazers_count: any; }) => acc + repo.stargazers_count, 0);

        var forksCount = 0
        repositories.forEach((f: { forks_count: number; }) => {
            forksCount += f.forks_count
        })
        const openIssues = repositories.reduce((acc: any, repo: { open_issues: any; }) => acc + repo.open_issues, 0);

        return NextResponse.json({ url, login, followers, numRepos, totalStars, forksCount, openIssues });
    } catch (error) {
        console.error("GitHub API Error:", error);
        throw error;
    }
}
