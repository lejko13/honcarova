import { createContext, useContext, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext({ lang: "sk", toggle: () => {}, tr: () => "" });

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("sk");
  const toggle = () => setLang((l) => (l === "sk" ? "en" : "sk"));
  const tr = (path) => {
    const keys = path.split(".");
    let val = translations[lang];
    for (const k of keys) val = val?.[k];
    return val ?? path;
  };
  return (
    <LanguageContext.Provider value={{ lang, toggle, tr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Translate a bilingual {sk, en} object */
export function t(obj, lang) {
  if (typeof obj === "string") return obj;
  return obj?.[lang] ?? obj?.en ?? "";
}