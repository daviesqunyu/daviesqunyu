"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const CHAT_URL = process.env.NEXT_PUBLIC_LLM_URL || "";

export function LLMLabModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [canEmbed, setCanEmbed] = useState(false);

  useEffect(() => {
    if (!open) return;
    setCanEmbed(Boolean(CHAT_URL));
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        background: "rgba(3,4,8,0.86)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 12,
          borderBottom: "1px solid rgba(255,255,255,.14)"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 800 }}>AI Lab</span>
          <span style={{ fontSize: 12, opacity: 0.75 }}>
            {canEmbed ? "Embedded chat from your external LLM project." : "Owner needs to plug in an LLM URL."}
          </span>
        </div>
        <button className="btn btn--ghost" type="button" onClick={onClose}>
          <X size={18} aria-hidden="true" /> Close
        </button>
      </div>

      <div style={{ flex: 1, position: "relative" }}>
        {canEmbed ? (
          <iframe
            src={CHAT_URL}
            title="AI Lab"
            style={{ border: "none", width: "100%", height: "100%" }}
          />
        ) : (
          <div
            style={{
              padding: 20,
              maxWidth: 640,
              margin: "40px auto",
              textAlign: "left"
            }}
          >
            <p className="p">
              To connect your existing free LLM project here, set{" "}
              <code>NEXT_PUBLIC_LLM_URL</code> in Vercel to the public URL of that project (for example a Hugging Face
              Space, custom chat app, or similar).
            </p>
            <p className="p" style={{ marginTop: 10 }}>
              Once configured, this panel will show the live chat inside your portfolio domain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

