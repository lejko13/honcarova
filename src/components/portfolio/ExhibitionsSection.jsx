import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";

const SOLO_EXHIBITIONS = [
  { year: "2022", title: { sk: "Tichá poézia", en: "Silent Poetry" }, location: "Galéria Čin Čin, Bratislava" },
  { year: "2021", title: { sk: "Vnútorný svet", en: "Inner World" }, location: "Kultúrne centrum, Poprad" },
  { year: "2019", title: { sk: "Prvé slová", en: "First Words" }, location: "Škola úžitkového umenia, Kežmarok" },
];

const GROUP_EXHIBITIONS = [
  { year: "2023", title: { sk: "Súčasná slovenská abstrakcia", en: "Contemporary Slovak Abstraction" }, location: "Slovenská národná galéria, Bratislava" },
  { year: "2022", title: { sk: "Ženy v umení", en: "Women in Art" }, location: "Galéria mesta Bratislavy" },
  { year: "2021", title: { sk: "Nové hlasy", en: "New Voices" }, location: "Art Spot Gallery, Košice" },
  { year: "2020", title: { sk: "Farba a slovo", en: "Color and Word" }, location: "Dom umenia, Poprad" },
];

function ExhibitionList({ items, lang }) {
  return (
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-6 items-start border-b border-border/30 pb-6">
          <span className="font-sans text-xs tracking-[0.15em] text-muted-foreground/50 w-10 shrink-0 pt-0.5">
            {item.year}
          </span>
          <div>
            <p className="font-serif text-lg font-light italic text-foreground mb-1">
              {item.title[lang] ?? item.title.en}
            </p>
            <p className="font-sans text-xs tracking-[0.08em] text-muted-foreground">
              {item.location}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ExhibitionsSection() {
  const { lang, tr } = useLang();

  return (
    <section id="exhibitions" className="py-24 md:py-40 px-6 md:px-12 bg-card border-b border-border/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {tr("exhibitions.label")}
          </p>
          <h2 className="font-serif text-4xl md:text-6xl font-light italic text-foreground mb-20">
            {tr("exhibitions.heading")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <FadeIn delay={0.1}>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
              {tr("exhibitions.solo")}
            </h3>
            <ExhibitionList items={SOLO_EXHIBITIONS} lang={lang} />
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
              {tr("exhibitions.group")}
            </h3>
            <ExhibitionList items={GROUP_EXHIBITIONS} lang={lang} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}