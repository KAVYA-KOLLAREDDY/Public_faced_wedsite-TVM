import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ParallaxWatermark } from "@/components/ParallaxWatermark";
import privacyPolicyHtml from "@/content/privacyPolicy.html?raw";

/** Drop Termly styles + collapse spacer markup that inflates scroll height. */
function stripEmbeddedStyles(html: string) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/style="[^"]*"/gi, "")
    .replace(/style='[^']*'/gi, "")
    .replace(/(?:<br\s*\/?>\s*){2,}/gi, "<br />")
    .replace(/<div[^>]*>\s*<\/div>/gi, "")
    .replace(/<span[^>]*>\s*<\/span>/gi, "")
    .replace(/(?:&nbsp;\s*){2,}/gi, " ");
}

const PrivacyPolicy = () => {
  const html = useMemo(() => stripEmbeddedStyles(privacyPolicyHtml), []);

  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip">
      <Navbar />
      <SocialSidebar />

      {/* Themed hero — compact so headers don’t leave large empty bands */}
      <section className="relative overflow-hidden pt-20 pb-5 md:pt-24 md:pb-6">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-light)) 50%, hsl(var(--teal-dark)) 100%)",
          }}
        />
        <div className="absolute inset-0 math-pattern opacity-20" aria-hidden />
        <div className="absolute top-20 left-10 h-12 w-12 rotate-45 border-2 border-gold/30 animate-float" aria-hidden />
        <div className="absolute bottom-6 right-16 h-14 w-14 rounded-full border-2 border-teal-light/20 animate-float-slow" aria-hidden />
        <ParallaxWatermark text="PRIVACY" className="top-1/3 -left-16" speed={0.12} />

        <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
          <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-vedic-gold md:text-sm">
            Legal
          </p>
          <h1 className="font-display text-3xl font-bold leading-none text-white md:text-4xl lg:text-[2.75rem]">
            Privacy Policy
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm leading-snug text-white/75 md:text-base">
            How Tiny Vivid Minds collects, uses, and protects your information.
          </p>
        </div>
      </section>

      <main className="relative w-full py-4 md:py-5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background" aria-hidden />
        <div className="container relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
          <article
            className="privacy-policy-content w-full rounded-2xl border border-border/70 bg-card/90 p-4 shadow-lg backdrop-blur-sm sm:p-5 md:p-6"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
