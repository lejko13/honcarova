import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";

const PROFILE_IMAGE = "https://media.base44.com/images/public/69feebcd18c7ddc435e04f5d/45b9cfbc4_ja_web.jpg";

export default function ProfileSection() {
  const { tr } = useLang();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section id="profile" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">

        {/* Left: profile image */}
        <div className="md:col-span-4">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              {tr("profile.label")}
            </p>
            <div className="relative w-full aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={PROFILE_IMAGE}
                alt={tr("profile.imageAlt")}
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
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

        {/* Right: bio + body text */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <FadeIn delay={0.15}>
            <h2 className="font-serif text-4xl md:text-5xl font-light italic text-foreground mb-8">
              Leni Hončárová
            </h2>
            <p className="font-sans text-sm leading-[1.9] text-muted-foreground mb-4">
              {tr("profile.bio1")}
            </p>
            <p className="font-sans text-sm leading-[1.9] text-muted-foreground mb-8">
              {tr("profile.bio2")}
            </p>
            <p className="font-sans text-sm leading-[2] text-foreground/80 mb-6">
              {tr("profile.body1")}
            </p>
            <p className="font-sans text-sm leading-[2] text-foreground/80 mb-10">
              {tr("profile.body2")}
            </p>
            <div className="border-t border-border/50 pt-8">
              <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/60 mb-1">
                {tr("profile.curatorRole")}
              </p>
              <p className="font-serif text-base italic text-foreground">
                {tr("profile.curatorName")}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}