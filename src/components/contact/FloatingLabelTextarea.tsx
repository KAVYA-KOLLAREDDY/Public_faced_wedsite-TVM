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
}

const FloatingLabelTextarea = ({
  id,
  label,
  value,
  onChange,
  rows = 4,
  required = false,
  placeholder = " ",
}: FloatingLabelTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  // Only show placeholder when focused (and empty) so it doesn't overlap the floating label
  const effectivePlaceholder = isFocused && value.length === 0 ? placeholder : " ";

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={rows}
        className="w-full px-4 py-4 pt-6 rounded-xl bg-transparent resize-none transition-all duration-300 outline-none"
        style={{
          border: `2px solid ${isFocused ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
          boxShadow: isFocused ? "0 0 0 4px hsl(var(--primary) / 0.1)" : "none",
        }}
        placeholder={effectivePlaceholder}
      />
      <motion.label
        htmlFor={id}
        className="absolute left-4 pointer-events-none transition-all duration-200 bg-background px-1"
        animate={{
          top: isActive ? "-2px" : "24px",
          fontSize: isActive ? "12px" : "14px",
          color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
      >
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </motion.label>
    </div>
  );
};

export default FloatingLabelTextarea;
