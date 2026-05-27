import { SYSTEM_PROMPT } from "@/lib/system-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  let messages;

  try {
    const body = await req.json();
    messages = body.messages;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!messages || messages.length === 0) {
    return new Response(JSON.stringify({ error: "No messages provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing GROQ_API_KEY in .env.local" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
      max_tokens: 350,
      stream: true,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    return new Response(
      JSON.stringify({ error: err?.error?.message || `Groq error ${response.status}` }),
      { status: response.status, headers: { "Content-Type": "application/json" } }
    );
  }

  // Stream the response back using the AI SDK data stream format
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n").filter((l) => l.startsWith("data: "));

          for (const line of lines) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const token = parsed.choices?.[0]?.delta?.content;
              if (token) {
                // AI SDK data stream format: "0:<json_string>\n"
                controller.enqueue(
                  encoder.encode(`0:${JSON.stringify(token)}\n`)
                );
              }
            } catch {
              // skip malformed lines
            }
          }
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Vercel-AI-Data-Stream": "v1",
    },
  });
}
