"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Smartphone, Radar, Network, Database } from "lucide-react";

const items = [
  { icon: Cpu, label: "Full‑Stack" },
  { icon: Smartphone, label: "Android" },
  { icon: Shield, label: "Security" },
  { icon: Database, label: "Data" },
  { icon: Network, label: "Networking" },
  { icon: Radar, label: "AI/ML" }
];

export function TechOrbit() {
  return (
    <div
      className="panel"
      style={{
        marginTop: 14,
        position: "relative",
        overflow: "hidden",
        padding: 12
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: -80,
          background:
            "radial-gradient(circle at 10% 0%, rgba(83,243,195,.18), transparent 55%), radial-gradient(circle at 90% 100%, rgba(124,92,255,.18), transparent 55%)",
          opacity: 0.7
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          height: 220
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            width: 96,
            height: 96,
            borderRadius: "999px",
            display: "grid",
            placeItems: "center",
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,.55), transparent 60%), linear-gradient(135deg, rgba(83,243,195,.95), rgba(124,92,255,.85))",
            boxShadow: "0 18px 60px rgba(0,0,0,.45)",
            color: "#05080e",
            fontWeight: 800,
            letterSpacing: ".02em"
          }}
        >
          DK
        </motion.div>

        {items.map((item, index) => {
          const angle = (index / items.length) * Math.PI * 2;
          const radius = 80;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8, x, y }}
              animate={{ opacity: 1, scale: 1, x, y }}
              transition={{ delay: 0.15 + index * 0.05, type: "spring", stiffness: 120, damping: 15 }}
              style={{
                position: "absolute",
                display: "grid",
                placeItems: "center",
                width: 58,
                height: 58,
                borderRadius: 999,
                background: "rgba(5,8,14,.94)",
                border: "1px solid rgba(255,255,255,.16)",
                boxShadow: "0 10px 30px rgba(0,0,0,.5)"
              }}
              whileHover={{ scale: 1.08 }}
            >
              <Icon size={18} aria-hidden="true" />
              <span
                style={{
                  fontSize: 10,
                  marginTop: 2,
                  color: "rgba(234,240,255,.7)",
                  fontWeight: 700
                }}
              >
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

