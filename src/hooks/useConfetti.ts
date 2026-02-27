import confetti from 'canvas-confetti';

export const useConfetti = () => {
  const triggerConfetti = () => {
    // First burst - gold colors
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#14b8a6', '#ffffff'],
      shapes: ['circle', 'square'],
      gravity: 0.8,
      scalar: 1.2,
      drift: 0,
    });

    // Second burst after delay - more spread
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.55, x: 0.4 },
        colors: ['#f59e0b', '#fbbf24', '#14b8a6'],
        shapes: ['circle'],
        gravity: 0.9,
        scalar: 1,
      });
    }, 150);

    // Third burst - from right
    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 100,
        origin: { y: 0.55, x: 0.6 },
        colors: ['#fcd34d', '#fbbf24', '#ffffff'],
        shapes: ['square'],
        gravity: 0.9,
        scalar: 1,
      });
    }, 250);
  };

  const triggerCelebration = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

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
        colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#14b8a6'],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#14b8a6'],
      });
    }, 250);
  };

  return { triggerConfetti, triggerCelebration };
};
