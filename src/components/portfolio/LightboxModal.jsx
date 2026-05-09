import { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function LightboxModal({ artworks, currentIndex, onClose, onNavigate }) {
  const { tr } = useLang();
  const isOpen = currentIndex >= 0;
  const touchStart = useRef(null);

  const goNext = useCallback(() => {
    if (currentIndex < artworks.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, artworks.length, onNavigate]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, goNext, goPrev]);

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) { if (diff > 0) goNext(); else goPrev(); }
    touchStart.current = null;
  };

  const artwork = artworks[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center"
          onClick={onClose}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 text-background/70 hover:text-background transition-colors"
            aria-label={tr("lightbox.close")}
          >
            <X size={24} />
          </button>

          {currentIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-background/50 hover:text-background transition-colors"
              aria-label={tr("lightbox.prev")}
            >
              <ChevronLeft size={32} />
            </button>
          )}
          {currentIndex < artworks.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-background/50 hover:text-background transition-colors"
              aria-label={tr("lightbox.next")}
            >
              <ChevronRight size={32} />
            </button>
          )}

          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[90vw] max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={artwork.image}
              alt={artwork.title}
              className="max-w-full max-h-[70vh] object-contain"
            />
            <div className="mt-6 text-center">
              <h3 className="font-serif text-2xl font-light italic text-background/90">{artwork.title}</h3>
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-background/40 mt-2">
                {artwork.dimensions} — {artwork.technique} — {artwork.year}
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {artworks.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); onNavigate(i); }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIndex ? "bg-background/80 scale-125" : "bg-background/30"
                }`}
                aria-label={`${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}