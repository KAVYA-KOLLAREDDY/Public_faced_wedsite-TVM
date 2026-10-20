import { useEffect, useState } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Amaya",
    childName: "Amaya",
    childAge: 14,
    content:
      "Vedic maths concepts were useful and I can use it in high school grades. Teacher is explaining very clearly and she is noting that every student understood the concept with more examples and home work. I love the way she carries in class.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    childName: "Ananya",
    childAge: 12,
    content:
      "Ananya went from dreading math to absolutely loving it. The ancient techniques make complex calculations feel like magic.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    childName: "Arjun",
    childAge: 9,
    content:
      "The structured levels helped Arjun progress at his own pace. His school grades have improved dramatically!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    childName: "Kavya",
    childAge: 11,
    content:
      "Kavya now helps her classmates with math problems. The confidence boost has been incredible to witness.",
    rating: 5,
  },
  {
    name: "Sunita Reddy",
    childName: "Vihaan",
    childAge: 8,
    content:
      "Started at age 8 and now Vihaan can do mental calculations that amaze everyone. Best investment in his education!",
    rating: 5,
  },
  {
    name: "Deepak Gupta",
    childName: "Ishaan",
    childAge: 13,
    content:
      "The Olympiad preparation has been exceptional. Ishaan qualified for nationals thanks to the advanced techniques he learned.",
    rating: 5,
  },
];

const avatarGradients = [
  "from-navy to-navy-light",
  "from-gold to-gold-dark",
  "from-teal to-teal-dark",
  "from-navy to-navy-dark",
  "from-gold to-gold-light",
  "from-teal to-teal-light",
];

const ITEMS_PER_PAGE = 3;

export const InfiniteTestimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoplayPaused, setAutoplayPaused] = useState(false);
  const totalPages = Math.max(1, Math.ceil(testimonials.length / ITEMS_PER_PAGE));
  const visible = testimonials.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const pauseAutoplay = () => setAutoplayPaused(true);

  const nextPage = () => {
    pauseAutoplay();
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    pauseAutoplay();
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (index: number) => {
    pauseAutoplay();
    setCurrentPage(index);
  };

  useEffect(() => {
    if (autoplayPaused || totalPages <= 1) return;
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplayPaused, totalPages]);

  return (
    <div className="container mx-auto px-4">
      <div className="mb-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((testimonial, index) => {
          const globalIndex = currentPage * ITEMS_PER_PAGE + index;
          return (
            <div
              key={`${testimonial.name}-${globalIndex}`}
              className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-gold" />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-foreground/90 line-clamp-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white",
                    avatarGradients[globalIndex % avatarGradients.length]
                  )}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground">{testimonial.name}</span>
                    <CheckCircle className="h-4 w-4 text-teal" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Parent of {testimonial.childName} (Age {testimonial.childAge})
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <>
          <div className="flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prevPage}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all duration-300 hover:-rotate-6 hover:scale-110 hover:bg-gold hover:text-navy-dark"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToPage(index)}
                  aria-label={`Testimonials page ${index + 1}`}
                  className={cn(
                    "h-3 rounded-full transition-all duration-500",
                    index === currentPage
                      ? "w-10 bg-gold"
                      : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextPage}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-lg transition-all duration-300 hover:rotate-6 hover:scale-110 hover:bg-gold hover:text-navy-dark"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            {currentPage + 1} of {totalPages}
          </p>
        </>
      )}
    </div>
  );
};

export default InfiniteTestimonials;
