import { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Minus } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

interface FAQ {
  question: string;
  answer: string;
}

interface PremiumAccordionProps {
  faqs: FAQ[];
}

export const PremiumAccordion = ({ faqs }: PremiumAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <AnimatedSection
            key={index}
            animation="fade-left"
            delay={index * 80}
          >
            <div
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300",
                isOpen 
                  ? "bg-card shadow-lg ring-2 ring-gold/30" 
                  : "bg-card/50 hover:bg-card"
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors",
                  isOpen && "border-b border-border/50"
                )}
              >
                <span className={cn(
                  "font-display font-semibold transition-colors",
                  isOpen ? "text-gold" : "text-foreground"
                )}>
                  {faq.question}
                </span>
                
                <div className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                  isOpen 
                    ? "bg-gold text-navy-dark rotate-180" 
                    : "bg-muted text-muted-foreground rotate-0"
                )}>
                  {isOpen ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 py-5 bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
};

export default PremiumAccordion;
