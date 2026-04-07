import React from 'react';
import { Users, Trophy, Headphones } from 'lucide-react';

type StatItem = {
  icon: React.ElementType;
  value: string;
  label: string;
};

const defaultStats: StatItem[] = [
  { icon: Trophy, value: "Level 6", label: "Mastery" },
  { icon: Headphones, value: "Live 1-on-1", label: "Support" },
  { icon: Users, value: "Group Sessions", label: "Students" },
];

interface StatsBarProps {
  stats?: StatItem[];
}

export const StatsBar = ({ stats = defaultStats }: StatsBarProps) => {
  return (
    <div className="relative border-y border-border bg-gradient-to-r from-gold/5 via-transparent to-teal/5 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={`${stat.value}-${stat.label}-${index}`} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-gold/20 to-teal/20 transition-transform group-hover:scale-110">
                <stat.icon className="h-5 w-5 text-gold" />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
