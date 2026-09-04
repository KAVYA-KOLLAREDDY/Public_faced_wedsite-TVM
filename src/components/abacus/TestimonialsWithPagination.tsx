import { useState, useEffect } from "react";
import { Star, BadgeCheck, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/AnimatedSection";

type AbacusTestimonial = {
  name: string;
  childName: string;
  childAge?: number;
  content: string;
  rating: number;
};

const testimonials: AbacusTestimonial[] = [
  { 
    name: "AnuMadhu", 
    childName: "Moksha",
    childAge: 8,
    content: "Thank you so much for the wonderful abacus classes. We have seen a huge difference in Moksha before and after joining the classes. She has become much faster and more efficient in her calculations. Because of the abacus training, she scored 98% on her STAR test, and we are very happy with her progress. Thank you, Yasasvi Mam, for your patience, support, and dedication. We truly appreciate all your hard work.", 
    rating: 5,
  },
  { 
    name: "Anusha", 
    childName: "Suhith",
    childAge: 8,
    content: "My child has shown great improvement in concentration, mental maths, and confidence after joining these abacus classes. The teachers are patient, supportive, and make learning fun with interactive activities. The classes are well organised, and the teaching method is easy for children to understand. I highly recommend these abacus classes to parents who want to improve their child's maths skills and overall brain development. Thank you Tiny Vivid Minds.", 
    rating: 5,
  },
  { 
    name: "Haritha", 
    childName: "Bhavith",
    childAge: 8,
    content: "My child has been attending online Abacus classes for the past one year. The classes are very useful and engaging. Madhuri mam explains everything clearly and gives individual attention to the child. My child's calculation speed, concentration, and confidence have improved a lot. We are very happy with the progress. Thank you so much, Ma'am, for your support and guidance.", 
    rating: 5,
  },
  { 
    name: "Suneetha Bolla", 
    childName: "her son",
    childAge: 9,
    content: "We are very happy with Tiny Vivid Abacus classes. My son has successfully completed all 5 levels under the guidance of Yasasvi Ma'am. We have seen a remarkable improvement in his calculation speed, concentration, and confidence. The classes are engaging, and Yasasvi Ma'am's teaching style is patient, encouraging, and easy for children to follow. The biggest achievement is that Mathematics has become his favorite subject now, and he genuinely enjoys solving calculations. Thank you, Tiny Vivid Abacus and Yasasvi Ma'am, for your dedication and for making learning such a positive experience. We highly recommend these classes to other parents.", 
    rating: 5,
  },
  { 
    name: "Mahatej", 
    childName: "her son",
    childAge: 9,
    content: "We are very happy with the online abacus classes at TinyVividMinds. The teachers are patient, encouraging, and explain concepts in a simple and engaging way. My son enjoys attending the classes and has shown noticeable improvement in his concentration, mental math skills, and confidence. The lessons are well-structured, interactive, and keep children motivated to learn. We appreciate the dedication and support of the entire TinyMinds team. Thank you for providing such a wonderful learning experience. We highly recommend TinyVividMinds to other parents.", 
    rating: 5,
  },
  { 
    name: "Leela Vani", 
    childName: "her child",
    childAge: 8,
    content: "The Abacus class is good. The teacher Yashu Mam is very patient and explains concepts clearly. My child enjoys the classes and has improved in mental math, concentration, and confidence. The activities are engaging, and the learning environment is friendly and encouraging. I am very happy with the progress and would highly recommend.",
    rating: 5,
  },
  {
    name: "Eligeti Meghana",
    childName: "Unknown",
    content:
      "The Abacus online classes are well organized and engaging. My child enjoys attending the sessions, and I can already see improvements in concentration, calculation speed, and confidence. The teacher explains the concepts clearly and is patient with the students. Thank you for your efforts and support. We look forward to continued progress.",
    rating: 5,
  },
  {
    name: "Nityapriya Chandrashekhar",
    childName: "Yugan",
    content:
      "Yugan has had difficulty in mathematics, however after starting with abacus he has shown an improvement. Since he is still learning the concepts and yet to use them in reality I'm unable to provide with complete feedback at the moment but once he retrieves his classes in September I should be able to notice and give you the feedback. For now I am happy with the classes and seeing an improvement in his understanding numbers and calculations.",
    rating: 5,
  },
  {
    name: "Bharathi",
    childName: "Unknown",
    content:
      "We can clearly see a positive change in our child's concentration and confidence. Thank you for your wonderful guidance and care.",
    rating: 5,
  },
  {
    name: "Bhavani Ashok",
    childName: "Unknown",
    content:
      "Previously my son used to take class with one of the teachers and then it did not work out properly. But he is doing good with the concept so I approached TVM team they allotted us a new teacher. Surprisingly from day 1 she is teaching beautiful in the class. Now my son is in level 7 and he is doing a great job. Thank you mam.",
    rating: 5,
  },
  {
    name: "Shalini",
    childName: "Unknown",
    content:
      "My son is doing good with calculations after joining in Tiny Vivid Minds. But the teacher is little strict.",
    rating: 5,
  },
  {
    name: "Rithika",
    childName: "Unknown",
    content:
      "Teacher is patiently guide students to improve their speed and concentration, to become confident in solving numbers. She is good and very supportive to the students and very good guidance giving by her.",
    rating: 5,
  },
  {
    name: "Rama Devi",
    childName: "Unknown",
    content:
      "We are very happy with the classes. Thank you for conducting such wonderful classes. My child is enjoying the sessions and is excited to attend them every time. The teaching is interactive, and the concepts are explained in a simple way that is easy for children to understand. I can see a positive change in my child's interest and confidence. We truly appreciate your hard work and care. Thank you!",
    rating: 5,
  },
  {
    name: "Jyothi",
    childName: "Unknown",
    content:
      "We are extremely grateful for the abacus training provided by Si tejasvi mam in Tiny Vivid Minds. The step by step guidance and encouragement helped build strong foundational arithmetic skills, speed, and concentration. Highly recommend for any parent looking to strengthen their children's math skills. Thank you for teaching my child.",
    rating: 5,
  },
  {
    name: "Gowthami",
    childName: "Nishika",
    content:
      "I am pretty much happy with Madhuri mam teaching. After joining her in this abacus class my calculation skills improved so good. Thank you for your guidance mam.",
    rating: 5,
  },
  {
    name: "Jyoshna",
    childName: "Sahasra",
    content:
      "My daughter is very much interested for class and doing home works easily. As of now, I saw a great improvement in solving sums using board. Madhuri mam is teaching that clearly.",
    rating: 5,
  },
  {
    name: "Swathi",
    childName: "Aanya",
    content:
      "I've known Yasasvi for almost two years now (2024) and my association with her goes a long way. Throughout this time, I've found her approach to be extremely professional, sincere, and dedicated. She's also incredibly friendly, approachable, and accommodating. What I truly appreciate is that she understands every child's unique abilities and tailors her teaching to their individual needs. In today's education system, we need more educators like her who focus on nurturing each child's potential rather than following a one-size-fits-all approach. I would wholeheartedly recommend Tiny Vivid Minds and Yasasvi's team for your child. Whether it's Vedic Maths or Abacus, I believe this is one of the best places to build a strong foundation for lifelong learning.",
    rating: 5,
  },
  {
    name: "Jyothi",
    childName: "Devaan shourya tej",
    content:
      "We are extremely grateful for the Abacus training provided by Sai Tejasvi mam in Tiny Vivid Minds. Step by step guidance and timely conducting tests and competitions helped by son to build skills, speed and concentration. I suggest everyone can join this classes with Tiny Vivid Minds team for strengthening their children's skills. Thankyou for teaching my child. Sai Tejasvi mam.",
    rating: 5,
  },
];

const avatarColors = [
  "from-rose-400 to-pink-500",
  "from-blue-400 to-cyan-500",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-500",
  "from-violet-400 to-purple-500",
  "from-pink-400 to-rose-500",
];

const cardColors = [
  "bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
  "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
  "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
  "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
];

const ITEMS_PER_PAGE = 3;
/** Rough character cutoff where we show a More control */
const COLLAPSE_THRESHOLD = 220;

export const TestimonialsWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const currentTestimonials = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setExpandedIds({});
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setExpandedIds({});
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (index: number) => {
    setExpandedIds({});
    setCurrentPage(index);
  };

  const toggleExpanded = (globalIndex: number) => {
    setExpandedIds((prev) => ({ ...prev, [globalIndex]: !prev[globalIndex] }));
  };

  // Auto-rotate (pause while any card is expanded)
  useEffect(() => {
    if (Object.values(expandedIds).some(Boolean)) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages, expandedIds]);

  return (
    <div>
      {/* Testimonial Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 items-start">
        {currentTestimonials.map((testimonial, index) => {
          const globalIndex = currentPage * ITEMS_PER_PAGE + index;
          const isLong = testimonial.content.length > COLLAPSE_THRESHOLD;
          const isExpanded = Boolean(expandedIds[globalIndex]);
          
          return (
            <AnimatedSection
              key={`${currentPage}-${index}`}
              animation="fade-up"
              delay={index * 100}
              className="min-h-0 self-start"
            >
              <div 
                className={cn(
                  "group relative flex flex-col rounded-3xl p-6 border border-border/50 transition-all duration-500",
                  !isExpanded && "min-h-[22rem]",
                  "hover:shadow-xl hover:-translate-y-2",
                  cardColors[globalIndex % cardColors.length]
                )}
              >
                {/* Quote icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-muted-foreground/20 group-hover:text-gold/30 transition-colors duration-300" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4 shrink-0">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 text-gold fill-gold transition-transform duration-300 group-hover:scale-110" 
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 mb-4">
                  <p
                    className={cn(
                      "text-foreground/90 leading-relaxed text-sm md:text-base italic",
                      !isExpanded && isLong && "line-clamp-6"
                    )}
                  >
                    "{testimonial.content}"
                  </p>
                  {isLong && (
                    <button
                      type="button"
                      onClick={() => toggleExpanded(globalIndex)}
                      className="mt-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
                    >
                      {isExpanded ? "...less" : "...more"}
                    </button>
                  )}
                </div>

                {/* Author */}
                <div className="mt-auto flex items-center gap-3 shrink-0">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                    avatarColors[globalIndex % avatarColors.length]
                  )}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal/10 text-teal text-[10px] font-medium">
                        <BadgeCheck className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Parent of {testimonial.childName === "Unknown" ? "your child" : testimonial.childName}
                      {typeof testimonial.childAge === "number" && testimonial.childAge > 0
                        ? ` (${testimonial.childAge} years)`
                        : " (Age not provided)"}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevPage}
          className="w-11 h-11 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-110 hover:-rotate-6 border border-border"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={cn(
                "h-3 rounded-full transition-all duration-500",
                index === currentPage 
                  ? "bg-gold w-10" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-3"
              )}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          className="w-11 h-11 rounded-full bg-card shadow-lg flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-navy-dark transition-all duration-300 hover:scale-110 hover:rotate-6 border border-border"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Page indicator text */}
      <p className="text-center text-muted-foreground text-sm mt-4">
        {currentPage + 1} of {totalPages}
      </p>
    </div>
  );
};

export default TestimonialsWithPagination;
