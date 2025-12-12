"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify(data)
    });

    const json = await res.json();
    setResult(json.result);
    setLoading(false);
  }

  const fields = [
    "name",
    "age",
    "schooling",
    "topSubjects",
    "countryOrigin",
    "languages",
    "passions",
    "frustrations",
    "expertise",
    "income",
    "localBiz"
  ];

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Opportunity Engine</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        {fields.map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            className="w-full p-2 border rounded"
          />
        ))}

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          type="submit"
        >
          {loading ? "Generating..." : "Submit"}
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 border rounded bg-gray-50 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </main>
  );
}
