"use client";

import { useState } from "react";
import { Bot, Send, Sparkles } from "lucide-react";
import { portfolioContext } from "@/lib/portfolioContext";

type Msg = { role: "user" | "assistant"; text: string };

function answerQuestion(raw: string): string {
  const text = raw.trim();
  if (!text) return "Ask me about Davis’s projects, experience, skills, or how to contact him.";
  const lower = text.toLowerCase();
  const { contact, projects, experience, roles, summary, highlights } = portfolioContext;

  if (lower.includes("email")) return `You can email Davis at ${contact.email} (mailto:${contact.email}).`;
  if (lower.includes("phone") || lower.includes("call")) {
    return `Davis’s phone is ${contact.phone} (tel:${contact.phone}).`;
  }
  if (lower.includes("linkedin")) return `LinkedIn: ${contact.linkedin}`;
  if (lower.includes("github")) return `GitHub: ${contact.github}`;

  if (lower.includes("who are you") || lower.includes("who is davis") || lower.includes("summary")) {
    return `${summary}\n\nCurrent focus: ${highlights.join(" • ")}`;
  }

  if (lower.includes("experience") || lower.includes("work")) {
    return experience.map((e) => `- ${e.title} at ${e.org} (${e.dates}, ${e.location})`).join("\n");
  }

  if (lower.includes("project")) {
    return projects
      .map((p) => `- ${p.title}${p.repo ? ` — repo: ${p.repo}` : ""} [${p.tags.join(", ")}]`)
      .join("\n");
  }

  if (lower.includes("skills") || lower.includes("stack") || lower.includes("tech")) {
    return `Davis works across: ${roles.join(", ")}.\n\nHighlights:\n- ${highlights.join("\n- ")}`;
  }

  if (lower.includes("hire") || lower.includes("job") || lower.includes("opportunit")) {
    return `Davis is open to roles in cybersecurity, software engineering, AI, and blockchain.\n\nBest way to start:\n- Email: ${contact.email}\n- LinkedIn: ${contact.linkedin}`;
  }

  return (
    "I’m a portfolio assistant focused on Davis Kunyu only.\n" +
    "Try asking about: projects, experience, skills, summary, or how to contact him."
  );
}

function quickAnswers() {
  const c = portfolioContext.contact;
  return [
    { q: "Email Davis", a: `Email: ${c.email}\nmailto:${c.email}` },
    { q: "Call Davis", a: `Phone: ${c.phone}\ntel:${c.phone}` },
    { q: "LinkedIn", a: c.linkedin },
    { q: "GitHub", a: c.github }
  ];
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Ask me about Davis’s experience, projects, skills, or how to contact him."
    }
  ]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text }, { role: "assistant", text: answerQuestion(text) }]);
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
                  Runs fully in your browser, no external API.
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
            <button className="btn btn--primary" type="button" onClick={() => void send()}>
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

