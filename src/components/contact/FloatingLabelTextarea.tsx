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
  rows = 4,
  required = false,
  placeholder = " ",
  error,
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  const hasError = Boolean(error);
  // Only show placeholder when focused (and empty) so it doesn't overlap the floating label
  const effectivePlaceholder = isFocused && value.length === 0 ? placeholder : " ";

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
        className="w-full px-2.5 py-2.5 pt-5 rounded-md bg-transparent resize-none transition-all duration-300 outline-none"
        style={{
          border: `1px solid ${
            hasError ? "hsl(var(--destructive))" : isFocused ? "hsl(var(--primary))" : "hsl(var(--border))"
          }`,
          boxShadow: isFocused
            ? hasError
              ? "0 0 0 3px hsl(var(--destructive) / 0.12)"
              : "0 0 0 3px hsl(var(--primary) / 0.08)"
            : "none",
        }}
        placeholder={effectivePlaceholder}
      />
      <motion.label
        htmlFor={id}
        className="absolute left-2.5 pointer-events-none transition-all duration-200 bg-card px-1 rounded"
        animate={{
          top: isActive ? "2px" : "18px",
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
