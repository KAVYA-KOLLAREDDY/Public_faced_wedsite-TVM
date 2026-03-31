import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FloatingLabelSelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}

const FloatingLabelSelect = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
  error,
}: FloatingLabelSelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  const hasError = Boolean(error);

  return (
    <div className="relative w-full self-start">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={false}
        aria-required={required}
        aria-invalid={hasError}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full min-h-[2.875rem] px-2.5 pr-9 rounded-md bg-transparent appearance-none cursor-pointer transition-all duration-300 outline-none text-base leading-5 py-2 pt-5"
        style={{
          border: `1px solid ${
            hasError ? "hsl(var(--destructive))" : isFocused ? "hsl(var(--primary))" : "hsl(var(--border))"
          }`,
          boxShadow: isFocused
            ? hasError
              ? "0 0 0 3px hsl(var(--destructive) / 0.12)"
              : "0 0 0 3px hsl(var(--primary) / 0.08)"
            : "none",
          // Native selects vertically center option text; nudge to align with floating-label inputs
          lineHeight: "1.25rem",
        }}
      >
        <option value="" disabled></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <motion.label
        htmlFor={id}
        className="absolute left-2.5 pointer-events-none transition-all duration-200 bg-card px-1 rounded"
        animate={{
          top: isActive ? "2px" : "calc(50% - 5px)",
          y: isActive ? 0 : "-50%",
          fontSize: isActive ? "12px" : "14px",
          color: hasError ? "hsl(var(--destructive))" : isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
      >
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </motion.label>

      <ChevronDown
        className={`pointer-events-none absolute right-2.5 w-4 h-4 -translate-y-1/2 transition-colors ${
          isActive ? "top-[1.35rem]" : "top-[calc(50%-5px)]"
        }`}
        style={{
          color: hasError ? "hsl(var(--destructive))" : isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
      />
      {error ? (
        <p id={`${id}-error`} className="text-destructive text-xs mt-1.5 px-0.5" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default FloatingLabelSelect;
