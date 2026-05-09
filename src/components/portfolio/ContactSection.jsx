import { useState } from "react";
import FadeIn from "./FadeIn";
import { useLang } from "@/lib/LanguageContext";

export default function ContactSection() {
  const { tr } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // TU si môžeš napojiť vlastný backend / EmailJS / Resend
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSent(true);
    } catch (err) {
      console.error("Email send failed:", err);
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        
        <div className="md:col-span-4">
          <FadeIn>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              {tr("contact.label")}
            </p>

            <h2 className="font-serif text-4xl md:text-5xl font-light italic text-foreground mb-10">
              {tr("contact.heading")}
            </h2>

            <div className="space-y-6">
              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                  {tr("contact.emailLabel")}
                </p>
                <a
                  href="mailto:leni@example.com"
                  className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  leni@example.com
                </a>
              </div>

              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                  {tr("contact.instagramLabel")}
                </p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-foreground hover:text-muted-foreground transition-colors"
                >
                  @leni.honcarova
                </a>
              </div>

              <div>
                <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted-foreground/50 mb-1">
                  {tr("contact.locationLabel")}
                </p>
                <p className="font-sans text-sm text-foreground">
                  {tr("contact.locationValue")}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-7 md:col-start-6">
          <FadeIn delay={0.15}>
            {sent ? (
              <div className="py-16">
                <p className="font-serif text-3xl font-light italic text-foreground mb-3">
                  {tr("contact.thankYou")}
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  {tr("contact.successMessage")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <input
                  type="text"
                  placeholder={tr("contact.name")}
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border/50 focus:border-foreground py-3 font-sans text-sm text-foreground outline-none"
                />

                <input
                  type="email"
                  placeholder={tr("contact.email")}
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border/50 focus:border-foreground py-3 font-sans text-sm text-foreground outline-none"
                />

                <textarea
                  rows={5}
                  placeholder={tr("contact.message")}
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border/50 focus:border-foreground py-3 font-sans text-sm text-foreground outline-none resize-none"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="font-sans text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-3 mt-4"
                >
                  <span className="w-8 h-px bg-muted-foreground" />
                  {sending ? "..." : tr("contact.send")}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

      </div>
    </section>
  );
}