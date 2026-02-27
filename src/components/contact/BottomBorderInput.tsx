import { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BottomBorderInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const BottomBorderInput = forwardRef<HTMLInputElement, BottomBorderInputProps>(
  ({ label, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
      <div className="relative group">
        <input
          ref={ref}
          {...props}
          className={cn(
            "w-full bg-transparent border-0 border-b-2 border-border/50 px-0 py-3 text-foreground placeholder-transparent focus:outline-none focus:ring-0 transition-colors duration-300",
            isFocused && "border-primary",
            className
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value.length > 0);
            props.onBlur?.(e);
          }}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          placeholder={label}
        />
        
        {/* Floating label */}
        <label
          className={cn(
            "absolute left-0 transition-all duration-300 pointer-events-none",
            isFocused || hasValue || props.value
              ? "-top-2 text-xs text-primary"
              : "top-3 text-muted-foreground"
          )}
        >
          {label}
        </label>

        {/* Animated bottom border */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-vedic-teal transition-all duration-300",
            isFocused ? "w-full" : "w-0"
          )}
        />
      </div>
    );
  }
);

BottomBorderInput.displayName = "BottomBorderInput";

export default BottomBorderInput;
