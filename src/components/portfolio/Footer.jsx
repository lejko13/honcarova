import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { tr } = useLang();
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg italic text-muted-foreground">Leni Hončárová</span>
        <p className="font-sans text-xs tracking-[0.1em] text-muted-foreground/40">
          © {new Date().getFullYear()} — {tr("footer.rights")}
        </p>
      </div>
    </footer>
  );
}