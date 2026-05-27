"use client";
import { useState, useRef, useEffect } from "react";
import { Send, X, Sparkles, MessageCircle } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "¿Con qué tecnologías trabajás?",
  "Contame sobre Watch The Match",
  "What's your experience with React?",
  "¿Estás abierto a trabajo remoto?",
];

export default function AskMe() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (messages.length > 0 && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;
    setError(null);
    const userMessage: Message = { role: "user", content: text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Error desconocido" }));
        throw new Error(err.error || `HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          for (const line of chunk.split("\n")) {
            if (line.startsWith("0:")) {
              try {
                const parsed = JSON.parse(line.slice(2));
                assistantText += parsed;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = { role: "assistant", content: assistantText };
                  return updated;
                });
              } catch { /* skip */ }
            }
          }
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al conectar");
      setMessages((prev) => prev.filter((m) => m.content !== ""));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Chat popup */}
      {open && (
        <div
          className="fixed bottom-24 right-5 z-50 w-[360px] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-blue-500/20 bg-[#060d1c] shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
          style={{ maxHeight: "min(520px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-blue-500/10 bg-gradient-to-r from-blue-950/40 to-[#060d1c] shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                <Sparkles size={13} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white leading-tight">Ask me anything</p>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-xs text-zinc-500">Online · Before the interview</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-zinc-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
              aria-label="Cerrar chat"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3"
            style={{ minHeight: hasMessages ? "200px" : "100px" }}
          >
            {!hasMessages && (
              <div className="flex-1 flex items-center justify-center py-4">
                <p className="text-zinc-600 text-xs text-center leading-relaxed">
                  Preguntame sobre la experiencia de Matias,<br />sus proyectos o lo que quieras saber.
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "assistant" && (
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
                    <Sparkles size={9} className="text-white" />
                  </div>
                )}
                <div className={`max-w-[82%] text-xs rounded-2xl px-3 py-2 leading-relaxed ${
                  m.role === "user"
                    ? "bg-white/[0.08] text-zinc-100 rounded-br-sm"
                    : "bg-blue-500/10 border border-blue-500/15 text-zinc-200 rounded-bl-sm"
                }`}>
                  {m.content || (
                    <span className="flex gap-1 items-center h-3">
                      {[0, 1, 2].map((j) => (
                        <span key={j} className="w-1 h-1 rounded-full bg-blue-400 animate-pulse"
                          style={{ animationDelay: `${j * 0.2}s` }} />
                      ))}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="mx-4 mb-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-1.5 shrink-0">
              ⚠️ {error}
            </div>
          )}

          {/* Suggestions */}
          {!hasMessages && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5 shrink-0">
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => sendMessage(s)} disabled={isLoading}
                  className="text-xs px-2.5 py-1 rounded-full border border-blue-500/20 text-blue-400 hover:bg-blue-500/10 transition-colors disabled:opacity-40">
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 border-t border-blue-500/10 shrink-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribí tu pregunta..."
                disabled={isLoading}
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-2 text-xs text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500/40 transition-all disabled:opacity-50"
              />
              <button type="submit" disabled={isLoading || !input.trim()}
                className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
                aria-label="Enviar">
                <Send size={12} className="text-white" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-5 right-5 z-50 h-12 rounded-full shadow-lg shadow-black/40 flex items-center gap-2.5 px-4 transition-all duration-200 ${
          open ? "bg-zinc-800 hover:bg-zinc-700" : "bg-blue-600 hover:bg-blue-500 hover:scale-105"
        }`}
        aria-label="Chat con IA"
      >
        {open ? <X size={18} className="text-white" /> : <MessageCircle size={18} className="text-white" />}
        <span className="text-sm text-white font-medium whitespace-nowrap">
          {open ? "Cerrar" : "Ask me before the interview"}
        </span>
      </button>
    </>
  );
}
