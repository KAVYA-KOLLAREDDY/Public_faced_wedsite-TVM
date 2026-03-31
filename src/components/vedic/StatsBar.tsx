import React from 'react';
import { Users, Trophy, Headphones } from 'lucide-react';

const stats = [
  { icon: Trophy, value: "Level 6", label: "Mastery" },
  { icon: Headphones, value: "Live 1-on-1", label: "Support" },
  { icon: Users, value: "Group Sessions", label: "Students" },
];

export const StatsBar = () => {
  return (
    <div className="relative border-y border-primary/20 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={`${stat.value}-${stat.label}-${index}`} className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 transition-transform group-hover:scale-110">
                <stat.icon className="h-5 w-5 text-primary" />
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
