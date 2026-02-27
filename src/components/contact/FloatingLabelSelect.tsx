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
}

const FloatingLabelSelect = ({
  id,
  label,
  value,
  onChange,
  options,
  required = false,
}: FloatingLabelSelectProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="w-full px-4 py-4 pt-6 rounded-xl bg-transparent appearance-none cursor-pointer transition-all duration-300 outline-none"
        style={{
          border: `2px solid ${isFocused ? "hsl(var(--primary))" : "hsl(var(--border))"}`,
          boxShadow: isFocused ? "0 0 0 4px hsl(var(--primary) / 0.1)" : "none",
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
        className="absolute left-4 pointer-events-none transition-all duration-200"
        animate={{
          top: isActive ? "8px" : "50%",
          y: isActive ? 0 : "-50%",
          fontSize: isActive ? "12px" : "14px",
          color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
      >
        {label}
        {required && <span className="text-destructive ml-0.5">*</span>}
      </motion.label>

      <ChevronDown 
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors"
        style={{ color: isFocused ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
      />
    </div>
  );
};

export default FloatingLabelSelect;
