"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Smartphone, Radar, Network, Database } from "lucide-react";

const items = [
  { icon: Cpu, label: "Full-Stack", color: "rgba(83,243,195,.8)" },
  { icon: Smartphone, label: "Android", color: "rgba(124,92,255,.8)" },
  { icon: Shield, label: "Security", color: "rgba(83,243,195,.8)" },
  { icon: Database, label: "Data", color: "rgba(124,92,255,.8)" },
  { icon: Network, label: "Networking", color: "rgba(83,243,195,.8)" },
  { icon: Radar, label: "AI / ML", color: "rgba(124,92,255,.8)" }
];

export function TechOrbit() {
  const radius = 95;

  return (
    <div
      className="panel"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: 12,
        minHeight: 280
      }}
    >
      {/* rotating background glow */}
      <motion.div
        style={{
          position: "absolute",
          inset: -100,
          background:
            "radial-gradient(circle at 10% 0%, rgba(83,243,195,.14), transparent 55%), radial-gradient(circle at 90% 100%, rgba(124,92,255,.14), transparent 55%)",
          opacity: 0.8
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 90, ease: "linear" }}
      />

      <div style={{ position: "relative", display: "grid", placeItems: "center", height: 260 }}>
        {/* orbit ring */}
        <div style={{
          position: "absolute",
          width: radius * 2 + 64,
          height: radius * 2 + 64,
          borderRadius: "999px",
          border: "1px solid var(--line)"
        }} />

        {/* center DK badge */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: "999px",
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,.45), transparent 60%), linear-gradient(135deg, rgba(83,243,195,.95), rgba(124,92,255,.85))",
            boxShadow: "0 0 40px rgba(83,243,195,.20), 0 18px 50px rgba(0,0,0,.45)",
            color: "#05080e",
            fontWeight: 800,
            fontSize: 22,
            letterSpacing: ".02em",
            fontFamily: "var(--font-display), ui-serif, Georgia, serif",
            zIndex: 2
          }}
        >
          DK
        </motion.div>

        {/* orbiting icons -- continuous rotation via wrapper */}
        <motion.div
          style={{
            position: "absolute",
            width: radius * 2 + 64,
            height: radius * 2 + 64
          }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {items.map((item, index) => {
            const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;
            const cx = (radius * 2 + 64) / 2;
            const x = cx + Math.cos(angle) * (radius + 32) - 32;
            const y = cx + Math.sin(angle) * (radius + 32) - 32;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, rotate: -360 }}
                transition={{
                  opacity: { delay: 0.1 + index * 0.08, duration: 0.4 },
                  scale: { delay: 0.1 + index * 0.08, type: "spring", stiffness: 120, damping: 14 },
                  rotate: { repeat: Infinity, duration: 30, ease: "linear" }
                }}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  borderRadius: 999,
                  background: "var(--bg-solid)",
                  border: "1px solid var(--line)",
                  boxShadow: `0 0 18px ${item.color.replace(".8", ".12")}, 0 8px 24px rgba(0,0,0,.4)`
                }}
                whileHover={{ scale: 1.12 }}
              >
                <Icon size={20} aria-hidden="true" style={{ color: item.color }} />
                <span style={{
                  fontSize: 9,
                  marginTop: 2,
                  color: "var(--muted2)",
                  fontWeight: 700,
                  whiteSpace: "nowrap"
                }}>
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
