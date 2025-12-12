import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
  const body = await req.json();
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `
  Based on this user's background, identify 3–5 real-world problems
  they are uniquely positioned to solve. Keep answers specific, actionable,
  and avoid generic recommendations.

  User Profile:
  Name: ${body.name}
  Age: ${body.age}
  Schooling: ${body.schooling}
  Top Subjects: ${body.topSubjects}
  Country of Origin: ${body.countryOrigin}
  Languages: ${body.languages}
  Strong Passions: ${body.passions}
  First-hand Frustrations: ${body.frustrations}
  Expertise & Family Expertise: ${body.expertise}
  Household Income: ${body.income}
  Nearby Businesses: ${body.localBiz}
  `;

  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You analyze user backgrounds to identify unique real-world problems and opportunities they can solve." },
      { role: "user", content: prompt }
    ]
  });

  return NextResponse.json({
    result: completion.choices[0].message.content
  });
}
