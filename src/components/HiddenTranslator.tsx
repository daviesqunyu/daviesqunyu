"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "sw";

const translations: Record<Lang, Record<string, string>> = {
  en: {},
  sw: {
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.projects": "Miradi",
    "nav.experience": "Uzoefu",
    "nav.contact": "Wasiliana",
    "hero.title":
      "Najenga mifumo salama, inayokua vizuri, na yenye manufaa kwa wavuti, simu, mitandao na AI ya vitendo.",
    "hero.lead":
      "Mtaalamu wa Sayansi ya Kompyuta · Msanidi wa Full‑Stack · Mhandisi wa Mitandao · Usalama wa Mtandao · Uchambuzi wa Data · Blockchain"
  }
};

export function HiddenTranslator() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setLang((prev) => (prev === "en" ? "sw" : "en"));
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;

    const map = translations[lang];
    const elements = document.querySelectorAll<HTMLElement>("[data-i18n-key]");
    elements.forEach((el) => {
      const key = el.dataset.i18nKey;
      if (!key) return;
      if (!el.dataset.i18nEn) {
        el.dataset.i18nEn = el.innerText;
      }
      const base = el.dataset.i18nEn;
      const t = lang === "en" ? base : map[key];
      if (t) el.innerText = t;
    });
  }, [lang]);

  return null;
}

