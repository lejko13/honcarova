import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";

const SOLO_EXHIBITIONS = [
  {
    year: "2026",
    title: { sk: "Obrazobásne", en: "Image Poems" },
    location: { sk: "Mestská výstavná sieň, Kežmarok", en: "Municipal Exhibition Hall, Kežmarok" },
  },
  {
    year: "2024",
    title: { sk: "Okamihy", en: "Moments" },
    location: { sk: "Podtatranská knižnica, Poprad - západ", en: "Podtatranská Library, Poprad - West" },
  },
  {
    year: "2022",
    title: { sk: "PozitiviTy", en: "PozitiviTy" },
    location: { sk: "Galéria Scherfelov dom, Poprad", en: "Scherfel House Gallery, Poprad" },
  },
  {
    year: "2022",
    title: { sk: "PozitiviTy", en: "PozitiviTy" },
    location: { sk: "Galéria Mikuláša Galandu, Turčianske Teplice", en: "Mikuláš Galanda Gallery, Turčianske Teplice" },
  },
  {
    year: "2017",
    title: { sk: "Tento deň", en: "This Day" },
    location: { sk: "Podtatranská knižnica Poprad, Poprad - Spišská Sobota", en: "Podtatranská Library Poprad, Poprad - Spišská Sobota" },
  },
  {
    year: "2016",
    title: { sk: "Iný uhol pohľadu", en: "A Different Point of View" },
    location: { sk: "Galéria Scherfelov dom, Poprad", en: "Scherfel House Gallery, Poprad" },
  },
];

const GROUP_EXHIBITIONS = [
  {
    year: "2019",
    title: { sk: "Učiteľ a žiak (alebo naopak)", en: "Teacher and Student (or Vice Versa)" },
    location: { sk: "Galéria na Tehelnej, Zvolen", en: "Gallery on Tehelná Street, Zvolen" },
  },
  {
    year: "2017",
    title: { sk: "Čtvero ročních období ve fotografiích a obrazech", en: "Four Seasons in Photographs and Paintings" },
    location: { sk: "Kulturní institut Zlín", en: "Cultural Institute Zlín" },
  },
  {
    year: "2014",
    title: { sk: "ŠVOČ, Študentská vedecká odborná činnosť výtvarných odborov", en: "Student Scientific and Professional Activity of Art Departments" },
    location: { sk: "Galéria Slovenského rozhlasu Bratislava", en: "Slovak Radio Gallery, Bratislava" },
  },
  {
    year: "2010",
    title: { sk: "Výtvarný salón popradských výtvarníkov", en: "Art Salon of Poprad Artists" },
    location: { sk: "Podtatranská knižnica Poprad, Spišská Sobota", en: "Podtatranská Library Poprad, Spišská Sobota" },
  },
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
              {item.title[lang] ?? item.title.sk}
            </p>
            <p className="font-sans text-xs tracking-[0.08em] text-muted-foreground">
              {item.location[lang] ?? item.location.sk}
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