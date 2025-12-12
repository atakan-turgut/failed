import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();

  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `User profile: ${JSON.stringify(body)}. Suggest 3–5 meaningful problems they can solve.`;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You suggest specific problems based on the user's profile." },
      { role: "user", content: prompt }
    ]
  });

  return NextResponse.json({ result: completion.choices[0].message.content });
}
