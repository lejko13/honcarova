import { useLang } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
    >
      {lang === "sk" ? "EN" : "SK"}
    </button>
  );
}