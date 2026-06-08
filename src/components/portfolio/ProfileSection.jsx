import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";

const PROFILE_IMAGE = "https://media.base44.com/images/public/69feebcd18c7ddc435e04f5d/45b9cfbc4_ja_web.jpg";

export default function ProfileSection() {
  const { tr } = useLang();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="profile" className="py-16 sm:py-24 md:py-40 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 lg:gap-20 items-start">

        <div className="md:col-span-4 w-full max-w-sm mx-auto md:max-w-none">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-5 md:mb-6">
              {tr("profile.label")}
            </p>

            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={PROFILE_IMAGE}
                alt={tr("profile.imageAlt")}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
              />

              {!imgLoaded && (
                <div className="absolute inset-0 flex items-end p-4">
                  <p className="font-sans text-xs tracking-[0.12em] uppercase text-muted-foreground/40">
                    {tr("profile.imageAlt")}
                  </p>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-8 flex flex-col justify-center text-left">
          <FadeIn delay={0.15}>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light italic text-foreground mb-6 md:mb-8">
              Leni Hončárová
            </h2>

            <p className="font-sans text-sm sm:text-[15px] leading-[1.8] md:leading-[1.9] text-muted-foreground mb-4">
              {tr("profile.bio1")}
            </p>

            <p className="font-sans text-sm sm:text-[15px] leading-[1.8] md:leading-[1.9] text-muted-foreground mb-6 md:mb-8">
              {tr("profile.bio2")}
            </p>

            <p className="font-sans text-sm sm:text-[15px] leading-[1.9] md:leading-[2] text-foreground/80 mb-6">
              {tr("profile.body1")}
            </p>

            <div className="border-t border-border/50 pt-6 md:pt-8">
              <p className="font-sans text-[11px] sm:text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                {tr("profile.curatorRole")}
              </p>

              <p className="font-serif text-base sm:text-lg italic text-foreground">
                {tr("profile.curatorName")}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}