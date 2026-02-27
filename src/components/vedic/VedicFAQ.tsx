import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Vedic Math and how is it different from regular math?",
    answer: "Vedic Math is an ancient Indian system of mathematics based on 16 sutras (formulas) that make calculations faster and easier. It differs from regular math by using mental techniques and patterns that eliminate the need for complex written calculations."
  },
  {
    question: "At what age can my child join?",
    answer: "Our Vedic Math program is designed for children aged 8-14. We have different levels tailored to various age groups and mathematical abilities to ensure optimal learning."
  },
  {
    question: "Do you provide practice material?",
    answer: "Yes! We provide weekly practice sheets, digital worksheets, and interactive games to reinforce learning. All materials are designed to complement our live sessions and help students practice at their own pace."
  },
  {
    question: "How long does it take to complete a level?",
    answer: "Typically, each level takes 2-3 months to complete, depending on the child's learning pace and practice consistency. We ensure students master each concept before moving to the next level."
  },
  {
    question: "Are classes interactive or recorded?",
    answer: "All our classes are live and interactive! Students participate in real-time with expert instructors, ask questions, and engage in hands-on practice. We also provide recorded sessions for review purposes."
  }
];

export const VedicFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <AnimatedSection key={index} delay={index * 100} animation="fade-up">
            <div 
              className={`
                relative rounded-xl overflow-hidden transition-all duration-300
                ${isOpen ? 'bg-primary/5 shadow-lg shadow-primary/10' : 'bg-card'}
                border ${isOpen ? 'border-primary/30' : 'border-border'}
              `}
            >
              {/* Glow effect when open */}
              {isOpen && (
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
              )}

              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="relative w-full flex items-center justify-between p-5 text-left"
              >
                <span className={`font-medium pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-foreground'}`}>
                  {faq.question}
                </span>
                <div 
                  className={`
                    flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center
                    transition-all duration-300
                    ${isOpen 
                      ? 'bg-primary text-primary-foreground rotate-0' 
                      : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                    }
                  `}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-out
                  ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-5 pb-5">
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

export default VedicFAQ;