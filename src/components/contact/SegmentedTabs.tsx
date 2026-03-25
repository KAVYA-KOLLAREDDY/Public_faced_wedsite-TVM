import { motion } from "framer-motion";
import { Calendar, Mail, MessageCircle } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SegmentedTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const tabs: Tab[] = [
  { id: "demo", label: "Book Demo", icon: Calendar },
  { id: "contact", label: "Contact Us", icon: Mail },
  { id: "join", label: "Feedback", icon: MessageCircle },
];

const SegmentedTabs = ({ activeTab, onTabChange }: SegmentedTabsProps) => {
  return (
    <div className="w-full max-w-full flex justify-center px-1">
    <div
      className="inline-flex max-w-full flex-nowrap overflow-x-auto rounded-xl p-1 sm:p-1.5 relative [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      style={{
        background: "hsl(var(--muted))",
        boxShadow: "inset 0 2px 4px hsl(var(--foreground) / 0.05)",
      }}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative shrink-0 px-3 py-2.5 sm:px-5 sm:py-3 rounded-lg font-medium text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 transition-colors z-10"
            style={{
              color: isActive ? "hsl(var(--primary-foreground))" : "hsl(var(--muted-foreground))",
            }}
          >
            {isActive && (
              <motion.span
                layoutId="activeSegment"
                className="absolute inset-0 rounded-lg"
                style={{
                  background: "hsl(var(--primary))",
                  boxShadow: "0 4px 12px hsl(var(--primary) / 0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <Icon className="w-4 h-4 relative z-10" />
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
    </div>
  );
};

export default SegmentedTabs;
