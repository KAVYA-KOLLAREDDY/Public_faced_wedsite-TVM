import { useCallback } from "react";
import confetti from "canvas-confetti";

const BRAND_COLORS = ["#f59e0b", "#fbbf24", "#fcd34d", "#14b8a6", "#ffffff", "#fb7185"];

export const useConfetti = () => {
  const triggerConfetti = useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: BRAND_COLORS,
      shapes: ["circle", "square"],
      gravity: 0.8,
      scalar: 1.2,
      drift: 0,
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.55, x: 0.4 },
        colors: ["#f59e0b", "#fbbf24", "#14b8a6"],
        shapes: ["circle"],
        gravity: 0.9,
        scalar: 1,
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.55, x: 0.6 },
        colors: ["#fcd34d", "#fbbf24", "#ffffff"],
        shapes: ["square"],
        gravity: 0.9,
        scalar: 1,
      });
    }, 250);
  }, []);

  const triggerCelebration = useCallback(() => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#f59e0b", "#fbbf24", "#fcd34d", "#14b8a6"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#f59e0b", "#fbbf24", "#fcd34d", "#14b8a6"],
      });
    }, 250);
  }, []);

  const triggerSoftPop = useCallback((x = 0.5) => {
    confetti({
      particleCount: 28,
      spread: 55,
      startVelocity: 18,
      gravity: 0.55,
      ticks: 120,
      scalar: 0.9,
      origin: { x, y: 0.62 },
      colors: BRAND_COLORS,
      zIndex: 9999,
    });
  }, []);

  const triggerLaunchCelebration = useCallback(() => {
    const duration = 5500;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 22,
      spread: 360,
      ticks: 140,
      gravity: 0.45,
      drift: 0.15,
      scalar: 1.05,
      zIndex: 9999,
      colors: BRAND_COLORS,
    };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    confetti({
      ...defaults,
      particleCount: 90,
      spread: 90,
      startVelocity: 28,
      origin: { x: 0.5, y: 0.55 },
    });

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 36 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.08, 0.28), y: Math.random() * 0.35 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.72, 0.92), y: Math.random() * 0.35 },
      });
    }, 320);
  }, []);

  return {
    triggerConfetti,
    triggerCelebration,
    triggerSoftPop,
    triggerLaunchCelebration,
  };
};
