import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import FadeIn from "./FadeIn";
import { ARTWORKS } from "@/lib/artworksData";
import { useLang, t } from "@/lib/LanguageContext";


function ArtworkCard({ work, index, lang ,h}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link to={`/dielo/${work.id}`} className="group block">
        <div className="relative overflow-hidden flex justify-center items-center    aspect-square">
          <img
            src={work.images[0]}
            alt={`${t(work.title, lang)} — ${t(work.technique, lang)}, ${work.year}`}
            loading="lazy"
                style={{ height: h }}
            className="w-auto object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-background/50 transition-colors duration-500" />
        </div>
        <div className="mt-4">
          <p className="font-serif text-xl md:text-2xl font-light italic text-foreground group-hover:text-muted-foreground transition-colors">
            {t(work.title, lang)}
          </p>
          <p className="font-sans text-xs tracking-[0.1em] text-muted-foreground mt-1">
            {t(work.technique, lang)} — {work.year}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ArtworksSection() {
  const { lang, tr } = useLang();
  const navigate = useNavigate();

  const featured = ARTWORKS.filter((a) => a.featured);

  return (
    <section id="artworks" className="py-24 md:py-40 px-6 md:px-12 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {tr("artworks.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light italic text-foreground mb-20">
            {tr("artworks.heading")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {featured.map((work, i) => {

            console.log(work.rozmerY_VYSKAA),
            console.log(work.rozmerX_SIRKA);


            return(
              
              
            <ArtworkCard
            h = {"100%"}
                          key={work.id}
                          work={work}
                          index={i}
                          lang={lang}
                        />
            )
  

           
})}
        </div>

        <FadeIn>
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => navigate("/diela")}
              className="group font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-12 transition-all duration-300 inline-block" />
              {tr("artworks.viewAll")}
              <span className="w-8 h-px bg-muted-foreground group-hover:bg-foreground group-hover:w-12 transition-all duration-300 inline-block" />
            </button>
          </div>
        </FadeIn>
      </div>

    </section>
  );
}