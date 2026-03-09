"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Loader2, Send, Sparkles } from "lucide-react";
import { portfolioContext } from "@/lib/portfolioContext";

type Msg = { role: "user" | "assistant"; text: string };

const SYSTEM_PROMPT = `You are Davis Kunyu's portfolio assistant for the site davis.dvtechnologies.xyz.
You must answer using ONLY the portfolio context provided below.
If asked for contact/actions, provide mailto: and tel: links and LinkedIn/GitHub URLs. You cannot place phone calls or send emails directly, but you can generate messages the user can copy.
Be concise, professional, and accurate. If something is unknown, say you don't have that detail.`;

function buildContextBlock() {
  return JSON.stringify(portfolioContext, null, 2);
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState<"idle" | "loading" | "ready" | "fallback">("idle");
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Ask me about Davis’s experience, projects, skills, or how to contact him."
    }
  ]);

  const engineRef = useRef<any>(null);
  const ctx = useMemo(() => buildContextBlock(), []);

  useEffect(() => {
    if (!open) return;
    if (ready === "ready" || ready === "fallback" || ready === "loading") return;

    const load = async () => {
      setReady("loading");
      try {
        // Lazy-load only when opened so the homepage stays fast.
        const webllm = await import("@mlc-ai/web-llm");
        if (!("gpu" in navigator)) {
          setReady("fallback");
          return;
        }

        const engine = await webllm.CreateMLCEngine(
          // Small, runs locally in browser WebGPU. Users can change later if desired.
          "Llama-3.1-8B-Instruct-q4f16_1-MLC",
          {
            initProgressCallback: () => {
              // keep minimal; state already shows loading
            }
          }
        );
        engineRef.current = engine;
        setReady("ready");
      } catch {
        setReady("fallback");
      }
    };

    void load();
  }, [open, ready]);

  const quickAnswers = () => {
    const c = portfolioContext.contact;
    return [
      { q: "Email Davis", a: `Email: ${c.email}\nMailto: mailto:${c.email}` },
      { q: "Call Davis", a: `Phone: ${c.phone}\nTel: tel:${c.phone}` },
      { q: "LinkedIn", a: c.linkedin },
      { q: "GitHub", a: c.github }
    ];
  };

  async function send() {
    const text = input.trim();
    if (!text || busy) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }]);

    if (ready !== "ready" || !engineRef.current) {
      // fallback: deterministic, no model
      const c = portfolioContext.contact;
      const lower = text.toLowerCase();
      let reply =
        "I can answer with portfolio details and provide contact links. Try: “summarize Davis”, “projects”, or “how do I contact?”.";

      if (lower.includes("email")) reply = `Email: ${c.email}\nmailto:${c.email}`;
      else if (lower.includes("phone") || lower.includes("call")) reply = `Phone: ${c.phone}\ntel:${c.phone}`;
      else if (lower.includes("linkedin")) reply = c.linkedin;
      else if (lower.includes("github")) reply = c.github;
      else if (lower.includes("projects"))
        reply = portfolioContext.projects.map((p) => `- ${p.title}${p.repo ? ` (${p.repo})` : ""}`).join("\n");
      else if (lower.includes("experience"))
        reply = portfolioContext.experience.map((e) => `- ${e.title} · ${e.org} (${e.dates})`).join("\n");

      setMsgs((m) => [...m, { role: "assistant", text: reply }]);
      return;
    }

    setBusy(true);
    try {
      const engine = engineRef.current;
      const prompt = `${SYSTEM_PROMPT}\n\nPORTFOLIO_CONTEXT_JSON:\n${ctx}\n\nUSER_QUESTION:\n${text}\n`;

      const res = await engine.chat.completions.create({
        messages: [{ role: "system", content: SYSTEM_PROMPT }, { role: "user", content: `Context:\n${ctx}\n\n${text}` }],
        temperature: 0.2,
        max_tokens: 450
      });

      const out = res?.choices?.[0]?.message?.content?.trim() || "I couldn’t generate an answer. Try again.";
      setMsgs((m) => [...m, { role: "assistant", text: out }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          text: "AI assistant failed to load on this device. You can still use the contact links and quick answers."
        }
      ]);
      setReady("fallback");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 60,
        width: open ? 360 : "auto"
      }}
    >
      {open && (
        <div className="panel" style={{ marginBottom: 12, overflow: "hidden" }}>
          <div className="panel__pad" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="row" style={{ gap: 10 }}>
              <Bot size={18} aria-hidden="true" />
              <div>
                <div className="brand__name" style={{ fontSize: 16 }}>
                  Portfolio Assistant
                </div>
                <div className="muted" style={{ fontSize: 12 }}>
                  {ready === "ready"
                    ? "Local AI (WebGPU)"
                    : ready === "loading"
                      ? "Loading model…"
                      : "Quick answers mode"}
                </div>
              </div>
            </div>
            <button className="btn btn--ghost" type="button" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
          <div className="divider" />

          <div
            style={{
              maxHeight: 280,
              overflow: "auto",
              padding: 14,
              display: "grid",
              gap: 10
            }}
          >
            {ready !== "ready" && (
              <div className="card" style={{ background: "rgba(255,255,255,.03)" }}>
                <div className="row">
                  <Sparkles size={18} aria-hidden="true" />
                  <div className="brand__name" style={{ fontSize: 16 }}>
                    Quick actions
                  </div>
                </div>
                <div style={{ marginTop: 10, display: "grid", gap: 8 }}>
                  {quickAnswers().map((qa) => (
                    <button
                      key={qa.q}
                      className="btn"
                      type="button"
                      onClick={() => setMsgs((m) => [...m, { role: "assistant", text: qa.a }])}
                      style={{ justifyContent: "space-between" }}
                    >
                      <span>{qa.q}</span>
                      <span className="muted" aria-hidden="true">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {msgs.map((m, i) => (
              <div
                key={i}
                className="card"
                style={{
                  background: m.role === "user" ? "rgba(83,243,195,.08)" : "rgba(255,255,255,.03)"
                }}
              >
                <div className="muted" style={{ fontSize: 12, fontWeight: 750, letterSpacing: ".02em" }}>
                  {m.role === "user" ? "You" : "Assistant"}
                </div>
                <div className="p" style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
                  {m.text}
                </div>
              </div>
            ))}

            {ready === "loading" && (
              <div className="card" style={{ background: "rgba(255,255,255,.03)" }}>
                <div className="row">
                  <Loader2 className="spin" size={18} aria-hidden="true" />
                  <div className="p">Loading local model (first time can take a bit)…</div>
                </div>
              </div>
            )}
          </div>

          <div className="divider" />
          <div className="panel__pad" style={{ display: "flex", gap: 10 }}>
            <input
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, experience, skills…"
              onKeyDown={(e) => {
                if (e.key === "Enter") void send();
              }}
              style={{ flex: 1 }}
            />
            <button className="btn btn--primary" type="button" onClick={() => void send()} disabled={busy}>
              <Send size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <button className="btn btn--primary" type="button" onClick={() => setOpen((v) => !v)}>
        <Bot size={18} aria-hidden="true" /> AI
      </button>
    </div>
  );
}

