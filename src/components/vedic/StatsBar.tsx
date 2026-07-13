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
  /**
   * When true (and exactly 3 stats), mobile uses a 2+1 grid with the third centered.
   * Default is the original flex row — keeps Vedic Math and other pages unchanged.
   */
  stackedMobileThree?: boolean;
}

export const StatsBar = ({ stats = defaultStats, stackedMobileThree = false }: StatsBarProps) => {
  const useStackedMobile = stackedMobileThree && stats.length === 3;

  return (
    <div className="relative border-y border-border bg-gradient-to-r from-gold/5 via-transparent to-teal/5 py-6">
      <div className="container mx-auto px-6">
        <div
          className={
            useStackedMobile
              ? "mx-auto grid max-w-md grid-cols-2 justify-items-center gap-x-8 gap-y-5 md:max-w-none md:flex md:flex-wrap md:justify-center md:gap-16"
              : "flex flex-wrap justify-center gap-8 md:gap-16"
          }
        >
          {stats.map((stat, index) => (
            <div
              key={`${stat.value}-${stat.label}-${index}`}
              className={`group flex items-center gap-3 ${
                useStackedMobile && index === 2
                  ? "col-span-2 flex w-full justify-center md:col-span-1 md:w-auto"
                  : ""
              }`}
            >
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
