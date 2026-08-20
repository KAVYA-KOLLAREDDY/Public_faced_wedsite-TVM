import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const moments = [
  {
    when: "During a live class",
    title: "They learn to think, not just remember",
    detail:
      "Through guided practice and personalized instruction, children learn how to approach numbers, words, and new concepts with clarity instead of hesitation.",
    tone: "teal",
    time: "9:40 AM",
  },
  {
    when: "At school",
    title: "Confidence shows up on the page",
    detail:
      "Clearer handwriting, stronger number sense, and better phonetic awareness help children participate more confidently in class and complete their work with greater independence.",
    tone: "gold",
    time: "12:15 PM",
  },
  {
    when: "At home",
    title: "Learning becomes part of everyday life",
    detail:
      "The strategies practiced during class begin to feel natural — homework becomes less overwhelming, reading becomes smoother, and children start believing, “I can do this.”",
    tone: "navy",
    time: "7:05 PM",
  },
] as const;

const toneStyles = {
  teal: {
    bar: "from-vedic-teal to-vedic-teal-light",
    chip: "bg-vedic-teal/15 text-vedic-teal",
    glow: "bg-vedic-teal/25",
    time: "text-vedic-teal",
  },
  gold: {
    bar: "from-vedic-gold to-vedic-gold-light",
    chip: "bg-vedic-gold/15 text-vedic-gold",
    glow: "bg-vedic-gold/25",
    time: "text-vedic-gold",
  },
  navy: {
    bar: "from-navy to-navy-light",
    chip: "bg-navy/10 text-navy dark:bg-vedic-gold/10 dark:text-vedic-gold",
    glow: "bg-navy/20",
    time: "text-navy dark:text-vedic-gold",
  },
} as const;

const GlobalFoundationsSection = () => {
  return (
    <section
      id="learning-journey"
      className="relative overflow-hidden py-14 md:py-20 bg-gradient-to-b from-muted/30 via-background to-background"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-px w-[min(90%,40rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-vedic-gold/35 to-transparent" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-vedic-gold/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-vedic-teal/10 blur-[110px]" />
      </div>

      <div className="container relative z-10 px-4">
        <AnimatedSection animation="fade-up" className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <span className="mb-4 inline-block rounded-full bg-vedic-teal/10 px-4 py-1.5 text-sm font-medium text-vedic-teal">
            What learning looks like beyond the classroom
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            From live lessons to{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              everyday confidence
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A great lesson doesn&apos;t end when the class ends. The real impact appears in the little
            moments that follow — when a child approaches a maths problem with confidence, writes more
            clearly, or reads a new word without hesitation.
          </p>
        </AnimatedSection>

        <div className="mx-auto mb-10 flex max-w-4xl items-center gap-3" aria-hidden>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-vedic-teal/40" />
          <span className="shrink-0 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            One lesson. Skills that stay with them.
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-vedic-gold/40" />
        </div>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {moments.map((moment, index) => {
            const styles = toneStyles[moment.tone];
            return (
              <AnimatedSection key={moment.title} animation="fade-up" delay={index * 120}>
                <motion.article
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card p-6 shadow-lg md:p-7"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 340, damping: 24 }}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${styles.bar}`} />
                  <div
                    className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full ${styles.glow} blur-2xl`}
                    aria-hidden
                  />

                  <div className="relative z-10 mb-5 flex items-center justify-between gap-3">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.chip}`}>
                      {moment.when}
                    </span>
                    <span className={`font-mono text-xs font-medium tabular-nums ${styles.time}`}>
                      {moment.time}
                    </span>
                  </div>

                  <h3 className="relative z-10 mb-3 font-display text-xl font-bold leading-snug text-foreground md:text-2xl">
                    {moment.title}
                  </h3>
                  <p className="relative z-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {moment.detail}
                  </p>

                  <div className="relative z-10 mt-auto pt-6">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                      Moment {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection animation="fade-up" delay={360} className="mx-auto mt-12 max-w-3xl text-center md:mt-14">
          <h3 className="mb-3 font-display text-2xl font-bold text-foreground md:text-3xl">
            Small skills.{" "}
            <span className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light bg-clip-text text-transparent">
              Big everyday wins...
            </span>
          </h3>
          
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GlobalFoundationsSection;
