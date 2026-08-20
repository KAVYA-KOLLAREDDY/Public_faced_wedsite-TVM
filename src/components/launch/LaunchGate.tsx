import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart, Sparkles, GraduationCap } from "lucide-react";
import { useConfetti } from "@/hooks/useConfetti";
import logoForDarkBg from "@/assets/TVM_logo/tiny_vivid_minds_logo_dark_theme_high_res.png";
import { cn } from "@/lib/utils";

type LaunchGateProps = {
  onComplete: () => void;
};

const CURTAIN_MS = 4800;
const CARD_FADE_MS = 1200;
const BOTH_CLICKED_PAUSE_MS = 700;

type GuestKey = "mom" | "teacher";

export function LaunchGate({ onComplete }: LaunchGateProps) {
  const { triggerSoftPop, triggerLaunchCelebration } = useConfetti();
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);
  const [joined, setJoined] = useState<Record<GuestKey, boolean>>({
    mom: false,
    teacher: false,
  });
  const revealStarted = useRef(false);

  const bothJoined = joined.mom && joined.teacher;

  useEffect(() => {
    if (!bothJoined) return;
    const t = window.setTimeout(() => {
      if (revealStarted.current) return;
      revealStarted.current = true;
      setOpening(true);
      triggerLaunchCelebration();
      window.setTimeout(() => setVisible(false), CURTAIN_MS);
    }, BOTH_CLICKED_PAUSE_MS);
    return () => window.clearTimeout(t);
  }, [bothJoined, triggerLaunchCelebration]);

  const handleJoin = (key: GuestKey) => {
    if (opening || joined[key]) return;
    setJoined((prev) => ({ ...prev, [key]: true }));
    triggerSoftPop(key === "mom" ? 0.35 : 0.65);
  };

  const guests: {
    key: GuestKey;
    label: string;
    sub: string;
    icon: typeof Heart;
    accent: string;
  }[] = [
    {
      key: "mom",
      label: "Mom",
      sub: "Tap to bless the launch",
      icon: Heart,
      accent: "from-rose-400/20 to-gold/15 border-rose-300/40",
    },
    {
      key: "teacher",
      label: "Teacher",
      sub: "Tap to cheer with us",
      icon: GraduationCap,
      accent: "from-teal/25 to-gold/15 border-teal/40",
    },
  ];

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          aria-modal="true"
          role="dialog"
          aria-label="Website launch reveal"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 45%, hsl(220 55% 18% / 0.55) 0%, hsl(220 70% 10% / 0.25) 50%, transparent 72%)",
            }}
            animate={opening ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
          />

          {!opening && (
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              {[
                { left: "12%", top: "18%", delay: 0 },
                { left: "82%", top: "22%", delay: 0.4 },
                { left: "18%", top: "72%", delay: 0.8 },
                { left: "78%", top: "68%", delay: 1.1 },
                { left: "50%", top: "12%", delay: 0.2 },
              ].map((dot) => (
                <motion.span
                  key={dot.left + dot.top}
                  className="absolute h-2 w-2 rounded-full bg-gold/50"
                  style={{ left: dot.left, top: dot.top }}
                  animate={{ y: [0, -12, 0], opacity: [0.35, 0.9, 0.35] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    delay: dot.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}

          <motion.div
            className="absolute inset-y-0 left-0 z-[1] w-[52%] origin-left will-change-transform"
            style={{
              background:
                "linear-gradient(90deg, hsl(220 70% 10%) 0%, hsl(220 55% 20%) 48%, hsl(220 48% 26%) 100%)",
              boxShadow: "inset -28px 0 48px hsl(220 70% 6% / 0.5)",
            }}
            initial={false}
            animate={
              opening
                ? { x: "-108%", rotateY: -32, skewY: -1.5 }
                : { x: 0, rotateY: 0, skewY: 0 }
            }
            transition={{ duration: CURTAIN_MS / 1000, ease: [0.22, 0.05, 0.2, 1] }}
          >
            <div className="absolute inset-y-0 right-0 w-3.5 bg-gradient-to-l from-gold via-gold/50 to-transparent" />
            <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(90deg,transparent,transparent_18px,hsl(45_100%_50%/0.07)_18px,hsl(45_100%_50%/0.07)_20px)]" />
            <div className="absolute inset-y-[8%] right-6 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          </motion.div>

          <motion.div
            className="absolute inset-y-0 right-0 z-[1] w-[52%] origin-right will-change-transform"
            style={{
              background:
                "linear-gradient(270deg, hsl(220 70% 10%) 0%, hsl(220 55% 20%) 48%, hsl(220 48% 26%) 100%)",
              boxShadow: "inset 28px 0 48px hsl(220 70% 6% / 0.5)",
            }}
            initial={false}
            animate={
              opening
                ? { x: "108%", rotateY: 32, skewY: 1.5 }
                : { x: 0, rotateY: 0, skewY: 0 }
            }
            transition={{ duration: CURTAIN_MS / 1000, ease: [0.22, 0.05, 0.2, 1] }}
          >
            <div className="absolute inset-y-0 left-0 w-3.5 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
            <div className="absolute inset-0 opacity-35 bg-[repeating-linear-gradient(90deg,transparent,transparent_18px,hsl(45_100%_50%/0.07)_18px,hsl(45_100%_50%/0.07)_20px)]" />
            <div className="absolute inset-y-[8%] left-6 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
          </motion.div>

          <motion.div
            className="relative z-[2] mx-4 flex max-w-xl flex-col items-center rounded-3xl border border-white/10 bg-navy-dark/85 px-5 py-8 text-center shadow-[0_24px_80px_hsl(220_70%_6%/0.55)] backdrop-blur-md sm:px-10 sm:py-10"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={
              opening
                ? { opacity: 0, y: -20, scale: 1.05 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={
              opening
                ? { duration: CARD_FADE_MS / 1000, ease: "easeIn" }
                : { duration: 0.75, ease: "easeOut" }
            }
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-medium tracking-wide text-gold sm:text-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              A happy surprise awaits
            </motion.div>

            <img
              src={logoForDarkBg}
              alt="Tiny Vivid Minds"
              className="mb-4 h-auto w-[min(14rem,68vw)] drop-shadow-[0_8px_32px_hsl(45_100%_50%/0.28)] sm:w-[18rem]"
            />

            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Let&apos;s open the curtains!
            </h2>
            <p className="mt-2 mb-6 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Two special people make this moment complete.
              <span className="mt-1 block text-white/55">
                Mom and Teacher — each tap once, then the magic begins.
              </span>
            </p>

            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {guests.map(({ key, label, sub, icon: Icon, accent }) => {
                const isJoined = joined[key];
                return (
                  <motion.button
                    key={key}
                    type="button"
                    onClick={() => handleJoin(key)}
                    disabled={opening || isJoined}
                    whileHover={!isJoined && !opening ? { scale: 1.03 } : undefined}
                    whileTap={!isJoined && !opening ? { scale: 0.97 } : undefined}
                    className={cn(
                      "relative flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br px-4 py-5 transition-all",
                      accent,
                      isJoined
                        ? "border-gold bg-gold/20 shadow-[0_0_24px_hsl(45_100%_50%/0.25)]"
                        : "bg-white/5 hover:bg-white/10",
                      opening && "cursor-wait opacity-80"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full",
                        isJoined ? "bg-gold text-navy-dark" : "bg-white/10 text-gold"
                      )}
                    >
                      {isJoined ? (
                        <Check className="h-6 w-6" strokeWidth={2.5} />
                      ) : (
                        <Icon className="h-6 w-6" />
                      )}
                    </span>
                    <span className="font-display text-lg font-semibold text-white">{label}</span>
                    <span className="text-xs text-white/55 sm:text-sm">
                      {isJoined ? "You're in — yay!" : sub}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <p
              className={cn(
                "mt-5 min-h-[1.5rem] text-sm font-medium transition-colors",
                bothJoined ? "text-gold" : "text-white/45"
              )}
              aria-live="polite"
            >
              {bothJoined
                ? "Yay! Both are here — opening the website…"
                : joined.mom || joined.teacher
                  ? "One more special tap to go!"
                  : "Waiting for Mom & Teacher…"}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
