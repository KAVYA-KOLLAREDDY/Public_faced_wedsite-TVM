import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingLabelInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
  id: string;
  label: string;
  type?: string;
  value?: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required = false,
  ...inputProps
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const safeValue = value ?? "";
  const isActive = isFocused || safeValue.length > 0;

  return (
    <div className="relative">
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
        required={required}
        className={`w-full px-4 rounded-xl bg-transparent transition-all duration-300 outline-none peer ${
          type === "date" ? "py-4" : "py-4 pt-6"
        }`}
        style={{
          border: `2px solid ${isFocused ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
          boxShadow: isFocused ? "0 0 0 4px hsl(var(--primary) / 0.1)" : "none",
        }}
        placeholder={type === "date" ? undefined : " "}
        {...inputProps}
      />
      {/* Floating label for non-date inputs */}
      {type !== "date" && (
        <motion.label
          htmlFor={id}
          className="absolute left-4 pointer-events-none transition-all duration-200 bg-card px-1"
          animate={{
            top: isActive ? "4px" : "50%",
            y: isActive ? 0 : "-50%",
            fontSize: isActive ? "12px" : "14px",
            color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
          }}
        >
          {label}
          {required && <span className="text-destructive ml-0.5">*</span>}
        </motion.label>
      )}
    </div>
  );
};

export default FloatingLabelInput;
