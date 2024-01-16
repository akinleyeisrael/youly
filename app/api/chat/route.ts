import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);
export const runtime = "edge";

export async function POST(request: NextRequest) {
    const { messages } = await request.json();

    const response = await openai.createChatCompletion({
        model: "gpt-4",
        stream: true,
        messages: [{ role: "system", content: "helpful assist" }, ...messages],
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}
