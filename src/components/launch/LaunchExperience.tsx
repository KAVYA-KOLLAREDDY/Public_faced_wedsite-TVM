import { useState, useCallback, useEffect, type ReactNode } from "react";
import { LaunchGate } from "./LaunchGate";

const STORAGE_KEY = "tvm-launch-revealed";

type LaunchExperienceProps = {
  children: ReactNode;
  /** Always show the gate until revealed in this page session (for /launch ceremony). */
  alwaysShow?: boolean;
  /** Called after the curtain reveal finishes (e.g. navigate to `/`). */
  onRevealed?: () => void;
};

function isHomeGateEnabled() {
  return import.meta.env.VITE_LAUNCH_GATE === "true";
}

function wasRevealedBefore() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markRevealed() {
  try {
    localStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* ignore */
  }
}

/**
 * Wraps page content with an optional celebratory curtain + confetti gate.
 * - `/launch` uses alwaysShow so the ceremony is reliable.
 * - Home uses VITE_LAUNCH_GATE=true + localStorage so it can be turned off after launch day.
 */
export function LaunchExperience({
  children,
  alwaysShow = false,
  onRevealed,
}: LaunchExperienceProps) {
  const [showGate, setShowGate] = useState(() => {
    if (alwaysShow) return true;
    if (!isHomeGateEnabled()) return false;
    return !wasRevealedBefore();
  });

  useEffect(() => {
    if (!showGate) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showGate]);

  const handleComplete = useCallback(() => {
    markRevealed();
    setShowGate(false);
    onRevealed?.();
  }, [onRevealed]);

  return (
    <>
      {showGate && <LaunchGate onComplete={handleComplete} />}
      {children}
    </>
  );
}
