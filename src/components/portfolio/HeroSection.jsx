import { motion } from "framer-motion";
import { useLang } from "@/lib/LanguageContext";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { tr } = useLang();

  return (
    <section
      id="hero"
      className="md:min-h-screen h-[800px] flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center max-w-3xl"
      >
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light italic text-foreground mb-8 leading-[0.95]">
          Leni
        </h1>
        <p className="font-serif text-lg md:text-xl font-light italic text-muted-foreground mb-4 leading-relaxed">
          {tr("hero.quote")}
        </p>
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground/60">
          {tr("hero.quoteAuthor")}
        </p>
      </motion.div>

   <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.5 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      {/* <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/30">
        scroll
      </span> */}

      <motion.div
        animate={{ y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 3,        // 👈 pomalé
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground/30" />
      </motion.div>
    </motion.div>
    </section>
  );
}