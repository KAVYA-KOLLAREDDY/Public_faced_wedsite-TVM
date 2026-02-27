import { motion } from "framer-motion";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  id?: string;
}

const ToggleSwitch = ({ checked, onChange, label, id }: ToggleSwitchProps) => {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        id={id}
        role="switch"
        aria-checked={checked}
        className={`
          relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer
          ${checked 
            ? "bg-gradient-to-r from-primary to-vedic-teal" 
            : "bg-border"
          }
        `}
        onClick={() => onChange(!checked)}
      >
        <motion.div
          className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-lg"
          animate={{
            x: checked ? 24 : 0,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
        
        {/* Glow when active */}
        {checked && (
          <div className="absolute inset-0 rounded-full bg-primary/30 blur-md -z-10" />
        )}
      </button>
      
      {label && (
        <span className="text-sm text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
};

export default ToggleSwitch;
