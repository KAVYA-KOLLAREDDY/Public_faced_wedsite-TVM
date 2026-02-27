import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Mail, UserPlus } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface SlidingTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs: Tab[] = [
  { id: "demo", label: "Book Free Demo", icon: Calendar },
  { id: "contact", label: "Contact Us", icon: Mail },
  { id: "join", label: "Join Our Team", icon: UserPlus },
];

const SlidingTabs = ({ activeTab, onTabChange }: SlidingTabsProps) => {
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (activeTabElement) {
      const parentRect = activeTabElement.parentElement?.getBoundingClientRect();
      const tabRect = activeTabElement.getBoundingClientRect();

      if (parentRect) {
        setIndicatorStyle({
          left: tabRect.left - parentRect.left,
          width: tabRect.width,
        });
      }
    }
  }, [activeTab]);

  return (
    <div className="relative flex justify-center gap-2 p-2 rounded-xl bg-background/50 backdrop-blur-sm">
      {/* Sliding indicator */}
      <motion.div
        className="absolute bottom-0 h-0.5 rounded-full"
        style={{
          background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--vedic-teal)))",
        }}
        animate={{
          left: indicatorStyle.left,
          width: indicatorStyle.width,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />

      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            ref={(el) => (tabRefs.current[index] = el)}
            onClick={() => onTabChange(tab.id)}
            className={`
              relative flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300
              ${isActive 
                ? "text-primary" 
                : "text-muted-foreground hover:text-foreground"
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SlidingTabs;
