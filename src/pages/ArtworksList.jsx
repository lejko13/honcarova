import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ARTWORKS, TECHNIQUE_KEYS, YEAR_KEYS } from "@/lib/artworksData";
import { useLang, t } from "@/lib/LanguageContext";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";
import FadeIn from "@/components/portfolio/FadeIn";
import ContactSection from "@/components/portfolio/ContactSection";

function FilterPill({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`font-sans text-xs tracking-[0.12em] px-4 py-2 border transition-all duration-200 ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

export default function ArtworksList() {
  const { lang, tr } = useLang();
  const [filterYear, setFilterYear] = useState("all");
  const [filterTechnique, setFilterTechnique] = useState("all");

  const filtered = useMemo(() => {
    return ARTWORKS.filter((a) => {
      const yearOk = filterYear === "all" || a.year === filterYear;
      const techOk = filterTechnique === "all" || a.technique.en === filterTechnique;
      return yearOk && techOk;
    });
  }, [filterYear, filterTechnique]);

  return (
    <div className="min-h-screen bg-card flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        <div className="px-6 md:px-12 pt-12 pb-0 max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {tr("artworks.label")}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-light italic text-foreground mb-16">
              {tr("artworks.heading")}
            </h1>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.1}>
            <div className="mb-12 space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mr-2 w-20">
                  {tr("artworks.year")}
                </span>
                <FilterPill active={filterYear === "all"} onClick={() => setFilterYear("all")}>
                  {tr("artworks.all")}
                </FilterPill>
                {YEAR_KEYS.map((y) => (
                  <FilterPill key={y} active={filterYear === y} onClick={() => setFilterYear(y)}>
                    {y}
                  </FilterPill>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mr-2 w-20">
                  {tr("artworks.technique")}
                </span>
                <FilterPill active={filterTechnique === "all"} onClick={() => setFilterTechnique("all")}>
                  {tr("artworks.all")}
                </FilterPill>
                {TECHNIQUE_KEYS.map((tech) => (
                  <FilterPill
                    key={tech}
                    active={filterTechnique === tech}
                    onClick={() => setFilterTechnique(tech)}
                  >
                    {lang === "sk"
                      ? ARTWORKS.find((a) => a.technique.en === tech)?.technique.sk ?? tech
                      : tech}
                  </FilterPill>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid — click goes to /dielo/[id], no lightbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 pb-24">
            <AnimatePresence mode="popLayout">
              {filtered.map((work, i) => (
                <motion.div
                  key={work.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Link to={`/dielo/${work.id}`} className="group block">
                    <div className="relative overflow-hidden  aspect-square flex justify-center items-center">
                      <img
                        src={work.images[0]}
                        alt={`${t(work.title, lang)} — ${t(work.technique, lang)}, ${work.year}`}
                        loading="lazy"
                        className="w-auto h-[100%] object-cover transition-transform duration-700 "
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-background/50 transition-colors duration-500" />
                    </div>
                    <div className="mt-4">
                      <p className="font-serif text-xl font-light italic text-foreground group-hover:text-muted-foreground transition-colors">
                        {t(work.title, lang)}
                      </p>
                      <p className="font-sans text-xs tracking-[0.1em] text-muted-foreground mt-1">
                        {t(work.technique, lang)} — {work.year} — {work.dimensions}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
        <ContactSection />
      <Footer />
    </div>
  );
}