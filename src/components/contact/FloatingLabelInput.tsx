import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingLabelInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  id: string;
  label: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
  /** Inline validation message (native HTML validation should be disabled via form noValidate). */
  error?: string;
}

const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  ...inputProps
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const safeValue = value ?? "";
  const isActive = isFocused || safeValue.length > 0;
  const hasError = Boolean(error);

  return (
    <div className="relative w-full">
      {/* Static label above for date inputs */}
      {type === "date" && (
        <label 
          htmlFor={id}
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          {label}
          {required && <span className="text-destructive ml-0.5">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={safeValue}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={false}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full px-2.5 rounded-md bg-transparent transition-all duration-300 outline-none peer ${
          type === "date" ? "py-2.5" : "py-2 pt-5"
        }`}
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
        placeholder={type === "date" ? undefined : " "}
        {...inputProps}
      />
      {/* Floating label for non-date inputs */}
      {type !== "date" && (
        <motion.label
          htmlFor={id}
          className="absolute left-2.5 pointer-events-none transition-all duration-200 bg-card px-1"
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
      )}
      {error ? (
        <p id={`${id}-error`} className="text-destructive text-xs mt-1.5 px-0.5" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default FloatingLabelInput;
