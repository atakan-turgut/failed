"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Opportunity Engine</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Name" className="w-full border p-2 rounded" />
        <input name="age" placeholder="Age" className="w-full border p-2 rounded" />
        <input name="schooling" placeholder="Schooling" className="w-full border p-2 rounded" />
        <input name="topSubjects" placeholder="Top Subjects" className="w-full border p-2 rounded" />
        <input name="country" placeholder="Country of Origin" className="w-full border p-2 rounded" />
        <input name="languages" placeholder="Languages Spoken" className="w-full border p-2 rounded" />
        <input name="passions" placeholder="Strong Passions" className="w-full border p-2 rounded" />
        <input name="issues" placeholder="Frustrations Experienced" className="w-full border p-2 rounded" />
        <input name="expertise" placeholder="Your Expertise" className="w-full border p-2 rounded" />
        <input name="parentsJobs" placeholder="Parents Jobs" className="w-full border p-2 rounded" />
        <input name="income" placeholder="Household Income" className="w-full border p-2 rounded" />
        <input name="businessesNear" placeholder="Businesses Near Residence" className="w-full border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
          {loading ? "Generating..." : "Submit"}
        </button>
      </form>
      {result && <div className="mt-6 p-4 border rounded bg-gray-50">{result}</div>}
    </main>
  );
}
