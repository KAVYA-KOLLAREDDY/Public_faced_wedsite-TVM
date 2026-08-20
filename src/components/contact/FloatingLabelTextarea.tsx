import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingLabelTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const FloatingLabelTextarea = ({
  id,
  label,
  value,
  onChange,
  rows = 3,
  required = false,
  placeholder = " ",
  error,
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  const hasError = Boolean(error);
  const compact = rows <= 2;
  // Only show placeholder when focused (and empty) so it doesn't overlap the floating label
  const effectivePlaceholder = isFocused && value.length === 0 ? placeholder : " ";
  const showPlaceholderVisual =
    isFocused && value.length === 0 && placeholder.trim() !== "";
  /** Min height from rows so vertical centering math stays stable (kept modest vs. browser rows default) */
  const minHeight = compact ? "3.5rem" : `${3.35 + rows * 0.92}rem`;
  /** ~one line of body text; used to center placeholder in the box */
  const lineBlock = "1.375rem";
  const borderColor = hasError
    ? "hsl(var(--destructive))"
    : isFocused
      ? "hsl(var(--primary))"
      : "hsl(var(--border))";
  const focusRing = isFocused
    ? hasError
      ? "0 0 0 3px hsl(var(--destructive) / 0.12)"
      : "0 0 0 3px hsl(var(--primary) / 0.08)"
    : "none";

  const paddingStyle = showPlaceholderVisual
    ? {
        // Top: at least label clearance; bottom completes height so placeholder stays vertically centered
        paddingTop: `max(1.5rem, calc((${minHeight} - ${lineBlock}) / 2))`,
        paddingBottom: `calc(${minHeight} - ${lineBlock} - max(1.5rem, calc((${minHeight} - ${lineBlock}) / 2)))`,
      }
    : { paddingTop: "1.5rem", paddingBottom: "0.75rem" };

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={false}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={rows}
        className="w-full box-border min-h-0 rounded-md bg-transparent px-2.5 text-left text-sm outline-none transition-[padding] duration-200 ease-out resize-none"
        style={{
          minHeight,
          ...paddingStyle,
          border: `1px solid ${borderColor}`,
          boxShadow: focusRing,
        }}
        placeholder={effectivePlaceholder}
      />
      <motion.label
        htmlFor={id}
        className="absolute left-2.5 z-[1] pointer-events-none rounded bg-card px-1 transition-all duration-200"
        animate={{
          top: isActive ? "2px" : "50%",
          y: isActive ? 0 : "-50%",
          fontSize: isActive ? "12px" : "14px",
          color: hasError ? "hsl(var(--destructive))" : isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
      >
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </motion.label>
      {error ? (
        <p id={`${id}-error`} className="text-destructive text-xs mt-1.5 px-0.5" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default FloatingLabelTextarea;
