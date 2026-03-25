/**
 * Dark theme: unused while <ThemeProvider> is commented out in App.tsx.
 * Restore App.tsx import + wrapper, then this wraps next-themes again.
 */
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

