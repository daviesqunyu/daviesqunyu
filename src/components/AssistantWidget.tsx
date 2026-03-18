"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Send, X, Mail, Phone, Linkedin, Github } from "lucide-react";
import { portfolioContext } from "@/lib/portfolioContext";

type Msg = { role: "user" | "assistant"; text: string };
type Note = { text: string; createdAt: string };

function linkify(text: string): string {
  return text.replace(
    /(https?:\/\/[^\s)]+)/g,
    '<a href="$1" target="_blank" rel="noreferrer" style="color:var(--accent);text-decoration:underline">$1</a>'
  ).replace(
    /(mailto:[^\s)]+)/g,
    '<a href="$1" style="color:var(--accent);text-decoration:underline">$1</a>'
  ).replace(
    /(tel:[^\s)]+)/g,
    '<a href="$1" style="color:var(--accent);text-decoration:underline">$1</a>'
  );
}

function answerQuestion(raw: string, notes: Note[]): string {
  const text = raw.trim();
  if (!text) return "Ask me about Davis's projects, experience, skills, or how to contact him.";
  const lower = text.toLowerCase();
  const { contact, projects, experience, roles, summary, highlights } = portfolioContext;

  if (lower.includes("email")) return `You can email Davis at **${contact.email}**\nmailto:${contact.email}`;
  if (lower.includes("phone") || lower.includes("call"))
    return `Davis's phone is **${contact.phone}**\ntel:${contact.phone}`;
  if (lower.includes("linkedin")) return `LinkedIn: ${contact.linkedin}`;
  if (lower.includes("github")) return `GitHub: ${contact.github}`;
  if (lower.includes("website") || lower.includes("site") || lower.includes("domain"))
    return `Main website: ${contact.website}\nPortfolio: https://davis.dvtechnologies.xyz`;

  if (lower.includes("who are you") || lower.includes("who is davis") || lower.includes("summary") || lower.includes("about"))
    return `${summary}\n\n**Current focus:**\n${highlights.map((h) => `• ${h}`).join("\n")}`;

  if (lower.includes("experience") || lower.includes("work"))
    return experience.map((e) => `**${e.title}** at ${e.org}\n  ${e.dates} · ${e.location}`).join("\n\n");

  if (lower.includes("project"))
    return projects
      .map((p) => `**${p.title}**\n  ${p.tags.join(", ")}${p.repo ? `\n  ${p.repo}` : ""}`)
      .join("\n\n");

  if (lower.includes("skills") || lower.includes("stack") || lower.includes("tech"))
    return `Davis works across: **${roles.join(", ")}**.\n\n**Highlights:**\n${highlights.map((h) => `• ${h}`).join("\n")}`;

  if (lower.includes("hire") || lower.includes("job") || lower.includes("opportunit"))
    return `Davis is open to roles in cybersecurity, software engineering, AI, and blockchain.\n\n**Best way to start:**\n• Email: ${contact.email}\n• LinkedIn: ${contact.linkedin}`;

  if (lower.includes("education") || lower.includes("school") || lower.includes("university") || lower.includes("degree"))
    return "**BSc Computer Science** — Catholic University of Eastern Africa\nSept 2021 – Aug 2025 · Second Class Upper Division";

  if (lower.includes("d&v") || lower.includes("dv tech") || lower.includes("company") || lower.includes("business"))
    return "**D&V Technologies** is Davis's company (founded 2025) delivering web development, digital solutions, domain management, and ICT consulting from Nairobi.";

  if (lower.includes("notes") || lower.includes("remember")) {
    if (!notes.length) return "I don't have any extra notes yet. You can teach me with messages starting with \"note:\" or \"remember:\".";
    return "Here's what you asked me to remember:\n" + notes.slice(-5).map((n) => `• ${n.text}`).join("\n");
  }

  return "I'm a portfolio assistant focused on Davis Kunyu.\n\nTry asking about: **projects**, **experience**, **skills**, **education**, **contact**, or **D&V Technologies**.";
}

const quickActions = [
  { label: "Email", icon: Mail, action: () => window.open("mailto:daviskunyu@gmail.com") },
  { label: "Call", icon: Phone, action: () => window.open("tel:+254759075816") },
  { label: "LinkedIn", icon: Linkedin, action: () => window.open("https://www.linkedin.com/in/davis-kunyu-980673295/", "_blank") },
  { label: "GitHub", icon: Github, action: () => window.open("https://github.com/daviesqunyu", "_blank") }
];

function formatText(text: string) {
  let html = text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text)">$1</strong>');
  html = linkify(html);
  return html;
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "assistant", text: "Hi! I'm Davis's portfolio assistant. Ask me about his **projects**, **experience**, **skills**, or how to **contact** him." }
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem("dk-assistant-notes");
      if (!raw) return;
      const parsed = JSON.parse(raw) as Note[];
      if (Array.isArray(parsed)) setNotes(parsed);
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try { window.localStorage.setItem("dk-assistant-notes", JSON.stringify(notes)); }
    catch { /* ignore */ }
  }, [notes]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  function send() {
    const text = input.trim();
    if (!text) return;
    setInput("");

    const lower = text.toLowerCase();
    if (lower.startsWith("note:") || lower.startsWith("remember:")) {
      const clean = text.replace(/^note:\s*/i, "").replace(/^remember:\s*/i, "").trim();
      if (clean) {
        const note: Note = { text: clean, createdAt: new Date().toISOString() };
        setNotes((prev) => [...prev, note]);
        setMsgs((m) => [...m, { role: "user", text }, { role: "assistant", text: "Got it — I'll remember that." }]);
        return;
      }
    }

    setMsgs((m) => [...m, { role: "user", text }]);
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "assistant", text: answerQuestion(text, notes) }]);
      setTyping(false);
    }, 400 + Math.random() * 300);
  }

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 60, width: open ? "min(380px, calc(100vw - 32px))" : "auto" }}>
      {open && (
        <div style={{
          marginBottom: 12,
          borderRadius: 20,
          overflow: "hidden",
          background: "var(--bg-solid)",
          border: "1px solid var(--line)",
          boxShadow: "0 24px 64px rgba(0,0,0,.45)",
          display: "flex",
          flexDirection: "column",
          maxHeight: "min(520px, 70vh)"
        }}>
          {/* gradient accent bar */}
          <div style={{
            height: 3,
            background: "linear-gradient(90deg, var(--accent), var(--accent2))",
            flexShrink: 0
          }} />

          {/* header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 14px",
            borderBottom: "1px solid var(--line)",
            flexShrink: 0
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: 999,
                display: "grid", placeItems: "center",
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                color: "#0A0D12", flexShrink: 0
              }}>
                <Bot size={16} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>Portfolio Assistant</div>
                <div style={{ fontSize: 11, color: "var(--muted2)" }}>Runs in-browser &middot; No API needed</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              style={{
                background: "none", border: "none", color: "var(--muted2)",
                cursor: "pointer", padding: 4, borderRadius: 8
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* quick actions */}
          <div style={{
            display: "flex", gap: 8, padding: "10px 14px",
            borderBottom: "1px solid var(--line)", flexShrink: 0, flexWrap: "wrap"
          }}>
            {quickActions.map((qa) => {
              const Icon = qa.icon;
              return (
                <button
                  key={qa.label}
                  type="button"
                  onClick={qa.action}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "6px 12px", borderRadius: 999,
                    background: "var(--panel)", border: "1px solid var(--line)",
                    color: "var(--text)", fontSize: 12, fontWeight: 700,
                    cursor: "pointer", transition: "background .15s"
                  }}
                >
                  <Icon size={13} /> {qa.label}
                </button>
              );
            })}
          </div>

          {/* messages */}
          <div ref={scrollRef} style={{
            flex: 1, overflowY: "auto", padding: "12px 14px",
            display: "flex", flexDirection: "column", gap: 10,
            minHeight: 0
          }}>
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.role === "user" ? "flex-end" : "flex-start",
                  gap: 8
                }}
              >
                <div style={{
                  maxWidth: "85%",
                  padding: "10px 14px",
                  borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.role === "user"
                    ? "linear-gradient(135deg, rgba(83,243,195,.15), rgba(124,92,255,.10))"
                    : "var(--panel)",
                  border: `1px solid ${m.role === "user" ? "rgba(83,243,195,.20)" : "var(--line)"}`,
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "var(--text)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word"
                }}>
                  <div dangerouslySetInnerHTML={{ __html: formatText(m.text) }} />
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{
                  padding: "10px 14px", borderRadius: "16px 16px 16px 4px",
                  background: "var(--panel)", border: "1px solid var(--line)",
                  display: "flex", gap: 4, alignItems: "center"
                }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} style={{
                      width: 6, height: 6, borderRadius: 999,
                      background: "var(--muted2)",
                      animation: `typingDot .8s ease infinite ${d * .15}s`
                    }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* input */}
          <div style={{
            display: "flex", gap: 8, padding: "10px 14px",
            borderTop: "1px solid var(--line)", flexShrink: 0
          }}>
            <input
              className="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, contact..."
              onKeyDown={(e) => { if (e.key === "Enter") void send(); }}
              style={{ flex: 1, fontSize: 13, padding: "10px 12px" }}
            />
            <button
              type="button"
              onClick={() => void send()}
              style={{
                width: 38, height: 38, borderRadius: 999,
                background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                border: "none", color: "#0A0D12", cursor: "pointer",
                display: "grid", placeItems: "center", flexShrink: 0
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "12px 18px", borderRadius: 999,
          background: "linear-gradient(135deg, rgba(83,243,195,.95), rgba(124,92,255,.85))",
          border: "none", color: "#0A0D12", fontWeight: 800,
          cursor: "pointer", boxShadow: "0 16px 48px rgba(83,243,195,.18)",
          fontSize: 14, letterSpacing: ".01em"
        }}
      >
        <Bot size={18} /> {open ? "Close" : "AI Assistant"}
      </button>

      <style>{`
        @keyframes typingDot {
          0%, 60%, 100% { opacity: .3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
      `}</style>
    </div>
  );
}
