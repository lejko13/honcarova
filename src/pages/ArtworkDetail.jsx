import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { ARTWORKS } from "@/lib/artworksData";
import { useLang, t } from "@/lib/LanguageContext";
import Navigation from "@/components/portfolio/Navigation";
import Footer from "@/components/portfolio/Footer";

export default function ArtworkDetail() {
  const { id } = useParams();
  const { lang, tr } = useLang();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(0);

  const work = ARTWORKS.find((a) => String(a.id) === String(id));
  const workIndex = ARTWORKS.findIndex((a) => String(a.id) === String(id));
  const prevWork = workIndex > 0 ? ARTWORKS[workIndex - 1] : null;
  const nextWork = workIndex < ARTWORKS.length - 1 ? ARTWORKS[workIndex + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight" && work)
        setLightboxImg((i) => Math.min(i + 1, work.images.length - 1));
      if (e.key === "ArrowLeft") setLightboxImg((i) => Math.max(i - 1, 0));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxOpen, work]);

  if (!work) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <p className="font-serif text-2xl italic text-muted-foreground mb-6">
              {tr("artworks.notFound")}
            </p>
            <Link
              to="/"
              className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              ← {tr("artworks.back")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-20">
        {/* Back link */}
        <div className="px-6 md:px-12 pt-10 pb-0">
          <Link
            to="/diela"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} />
            {tr("artworks.allArtworks")}
          </Link>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          {/* Image area */}
          <div className="lg:col-span-8 px-6 md:px-12 py-12 flex items-center justify-center bg-card">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-2xl"
            >
              <button
                onClick={() => { setLightboxImg(0); setLightboxOpen(true); }}
                className="group block w-full cursor-zoom-in"
              >
                <img
                  src={work.images[0]}
                  alt={t(work.title, lang)}
                  className="w-full max-h-[70vh] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </button>

              {/* Thumbnails if multiple images */}
              {work.images.length > 1 && (
                <div className="flex gap-3 mt-6 justify-center">
                  {work.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => { setLightboxImg(i); setLightboxOpen(true); }}
                      className="w-16 h-16 overflow-hidden border-2 border-border hover:border-foreground transition-colors"
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sticky info panel */}
          <div className="lg:col-span-4 px-6 md:px-12 lg:px-10 py-12 lg:sticky lg:top-20 lg:self-start border-t lg:border-t-0 lg:border-l border-border/50">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="font-serif text-3xl md:text-4xl font-light italic text-foreground mb-8 leading-[1.2]">
                {t(work.title, lang)}
              </h1>

              <div className="space-y-5 mb-10">
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                    {tr("artworks.yearLabel")}
                  </p>
                  <p className="font-sans text-base text-foreground">{work.year}</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                    {tr("artworks.techniqueLabel")}
                  </p>
                  <p className="font-sans text-base text-foreground">{t(work.technique, lang)}</p>
                </div>
                <div>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                    {tr("artworks.dimensionsLabel")}
                  </p>
                  <p className="font-sans text-base text-foreground">{work.dimensions}</p>
                </div>
              </div>

              {/* Description */}
              {work.description && (
                <div className="border-t border-border/50 pt-8">
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-4">
                    {tr("artworks.descriptionLabel")}
                  </p>
                  <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                    {t(work.description, lang)}
                  </p>
                </div>
              )}

              {/* Prev / Next navigation */}
              <div className="mt-12 pt-8 border-t border-border/50 flex justify-between">
                {prevWork ? (
                  <Link
                    to={`/dielo/${prevWork.id}`}
                    className="flex items-center gap-2 font-sans text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft size={14} />
                    <span className="font-serif italic text-base">{t(prevWork.title, lang)}</span>
                  </Link>
                ) : <span />}
                {nextWork ? (
                  <Link
                    to={`/dielo/${nextWork.id}`}
                    className="flex items-center gap-2 font-sans text-xs tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="font-serif italic text-base">{t(nextWork.title, lang)}</span>
                    <ChevronRight size={14} />
                  </Link>
                ) : <span />}
              </div>
            </motion.div>
          </div>
        </div>
        {/* Placeholder grid — reserved for future content */}
        <div className="px-6 md:px-12 py-16 border-t border-border/30 max-w-7xl mx-auto w-full">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground/40 mb-8">
            {tr("artworks.visualDetails")}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-square bg-muted/50 border border-border/30"
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 p-2 text-background/60 hover:text-background transition-colors"
              aria-label={tr("lightbox.close")}
            >
              <X size={24} />
            </button>

            {lightboxImg > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxImg((i) => i - 1); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-background/50 hover:text-background transition-colors"
                aria-label={tr("lightbox.prev")}
              >
                <ChevronLeft size={32} />
              </button>
            )}
            {lightboxImg < work.images.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxImg((i) => i + 1); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-background/50 hover:text-background transition-colors"
                aria-label={tr("lightbox.next")}
              >
                <ChevronRight size={32} />
              </button>
            )}

            <motion.img
              key={lightboxImg}
              src={work.images[lightboxImg]}
              alt={t(work.title, lang)}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}