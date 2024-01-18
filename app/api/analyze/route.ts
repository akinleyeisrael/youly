import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        console.log("req data", data)

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ "role": "user", "content": "Hello!" }],
                prompt: `Analyze the following data: ${JSON.stringify(data)}\n\n`,
                temperature: 0.5,
                max_tokens: 60,
                frequency_penalty: 0.8,
            }),
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        console.log(response)

        if (!response.ok) {
            // Handle non-successful response (e.g., log the error, return an error response)
            return NextResponse.json({ error: `OpenAI API error: ${response.statusText}` }, { status: response.status });
        }

        const json = await response.json();
        console.log(json)


        if (!json || !json.choices || !json.choices[0] || !json.choices[0].text) {
            // Handle the case where the response doesn't contain the expected JSON structure
            return NextResponse.json({ error: 'Unexpected response from OpenAI API' }, { status: 500 });
        }

        const analysisResult = json.choices[0].text.trim();
        console.log(analysisResult)


        return NextResponse.json(analysisResult, { status: 200 });
    } catch (error) {
        // Handle any other errors that may occur
        return NextResponse.json({ error: "error occured" }, { status: 500 });
        //just have to display the response on frontened
    }
}
