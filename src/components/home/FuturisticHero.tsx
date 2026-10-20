import { Link } from "react-router-dom";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { Mail, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroClassroomImg from "@/assets/students-learning/hero_Section.png";

export const FuturisticHero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-dark">
      {/* Full-bleed photo */}
      <div className="absolute inset-0">
        <img
          src={heroClassroomImg}
          alt="Children exploring an abacus together in class"
          className="absolute inset-0 h-full w-full object-cover object-[68%_40%] sm:object-[72%_35%]"
        />
      </div>

      {/* Left veil */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              100deg,
              hsl(222 55% 8% / 0.86) 0%,
              hsl(222 50% 10% / 0.72) 30%,
              hsl(222 45% 12% / 0.34) 52%,
              hsl(222 40% 14% / 0.1) 72%,
              transparent 100%
            ),
            linear-gradient(
              to top,
              hsl(222 55% 8% / 0.28) 0%,
              transparent 24%
            )
          `,
        }}
      />

      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{ background: "hsl(45 100% 50% / 0.14)", opacity: 0.55 }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] items-end pb-16 pt-28 sm:items-center sm:pb-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-vedic-gold sm:w-10" />
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-vedic-gold sm:text-sm">
                Tiny Vivid Minds
              </p>
            </div>

            <h1 className="mb-5 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-white sm:mb-6 sm:text-5xl md:text-6xl lg:text-[3.6rem]">
              Unlock Your Child&apos;s
              <br />
              Potential to{" "}
              <span className="text-vedic-gold">Learn, Grow &amp; Shine</span>
            </h1>

            <p
              className="mb-8 max-w-md text-base leading-relaxed text-white sm:mb-10 sm:text-lg"
              style={{ textShadow: "0 1px 12px hsl(222 55% 8% / 0.65)" }}
            >
              Mathematics (with IXL), Abacus, Vedic Mathematics, Handwriting, and Phonics
              &amp; Grammar — live classes that build confidence and curiosity.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                className="h-auto w-full rounded-full bg-gold px-8 py-4 font-display text-base font-semibold text-navy-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light sm:w-auto sm:py-5 sm:text-lg"
                style={{
                  boxShadow: "0 12px 40px hsl(45 100% 45% / 0.35)",
                }}
                asChild
              >
                <DiscoverProgramsLink className="inline-flex items-center justify-center gap-2">
                  <Play className="h-5 w-5 shrink-0 fill-navy-dark text-navy-dark" />
                  Explore Programs
                </DiscoverProgramsLink>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-auto w-full rounded-full border-2 border-white bg-transparent px-8 py-4 font-display text-base font-medium text-white transition-all duration-300 hover:bg-white hover:text-navy-dark sm:w-auto sm:py-5 sm:text-lg"
                asChild
              >
                <Link
                  to="/contact#contact-form"
                  className="inline-flex items-center justify-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturisticHero;
