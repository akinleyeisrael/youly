import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const paramsUrl = new URL(request.nextUrl);
    const username = paramsUrl.searchParams.get("username");

    if (!username) {
        console.error('Username is missing');
        return NextResponse.json({ error: 'Username is missing' });
    }


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
        const followers = response1.data.length; // Fix: Use response1.data directly

        const response2 = await axios.get(`${baseURL}/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            },
        });
        const repositories = response2.data;

        if (repositories.length === 0) {
            console.error('No repositories found');
            return NextResponse.json({ error: 'No repositories found' });
        }


        const firstRepo = repositories[0];
        const login = firstRepo.owner.login;
        const url = firstRepo.owner.html_url;
        const numRepos = repositories.length; // Fix: Use repositories.length directly

        const totalStars = repositories.reduce((acc: any, repo: { stargazers_count: any; }) => acc + repo.stargazers_count, 0);

        const forksCount = repositories.reduce((acc: any, repo: { forks_count: any; }) => acc + repo.forks_count, 0);

        const openIssues = repositories.reduce((acc: any, repo: { open_issues: any; }) => acc + repo.open_issues, 0);

        return NextResponse.json({ url, login, followers, numRepos, totalStars, forksCount, openIssues });
    } catch (error) {
        console.error("GitHub API Error:", error);
        throw error;
    }
}
