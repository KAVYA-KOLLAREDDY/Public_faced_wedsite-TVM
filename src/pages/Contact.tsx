import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ChevronDown,
  Loader2,
  Instagram,
  Facebook,
  Youtube,
  Mail,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { Link, useLocation } from "react-router-dom";
import { DiscoverProgramsLink } from "@/components/DiscoverProgramsLink";
import { SocialSidebar } from "@/components/SocialSidebar";

// New components
import GlobalHero from "@/components/contact/GlobalHero";
import GlobalWorldMap from "@/components/contact/GlobalWorldMap";
import FloatingLabelInput from "@/components/contact/FloatingLabelInput";
import FloatingLabelSelect from "@/components/contact/FloatingLabelSelect";
import FloatingLabelTextarea from "@/components/contact/FloatingLabelTextarea";
import TestimonialBubble from "@/components/contact/TestimonialBubble";
import ToggleSwitch from "@/components/contact/ToggleSwitch";
import TrustSection from "@/components/signature/TrustSection";
import {
  insertContactRequest,
  insertDemoRequest,
  insertFeedback,
} from "@/subabase/contactInserts";
import {
  scrollToFirstContactError,
  validateContactPageForm,
  type ContactFieldErrorKey,
  type ContactFieldErrors,
} from "@/lib/contactFormValidation";

// Smooth scroll handler
const smoothScroll = (targetId: string) => {
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const testimonials = [
  {
    text: "Since joining Tiny Vivid Minds, my daughter's speed and confidence in maths have doubled! The teachers are amazing.",
    author: "Mrs. Patel",
    role: "Mother of Aarav (8)",
    rating: 5,
  },
  {
    text: "The teachers are patient and engaging. My son actually looks forward to math class now!",
    author: "Mr. Reddy",
    role: "Father of Vihaan (10)",
    rating: 5,
  },
  {
    text: "Best decision we made! My daughter went from struggling to loving math.",
    author: "Mrs. Kumar",
    role: "Mother of Anaya (9)",
    rating: 5,
  },
  {
    text: "Excellent program! The personalized attention each child receives is remarkable.",
    author: "Mr. Sharma",
    role: "Father of Riya (7)",
    rating: 5,
  },
  {
    text: "The Vedic math techniques have helped my son solve problems much faster. Amazing results!",
    author: "Mrs. Gupta",
    role: "Mother of Arjun (11)",
    rating: 5,
  },
];

const faqs = [
  {
    question: "What age groups do you teach?",
    answer: "We offer programs for children aged 4-14, with courses tailored to different skill levels and developmental stages.",
  },
  {
    question: "How do online classes work?",
    answer: "Our online classes are interactive, engaging, and designed to provide personalized attention using advanced digital tools.",
  },
  {
    question: "What if we miss a class?",
    answer: "No worries! We provide recorded sessions for all classes, and you can schedule makeup classes at your convenience.",
  },
  {
    question: "Do you provide progress reports?",
    answer: "Yes! We provide detailed progress reports every month, including performance metrics and achievements.",
  },
  {
    question: "How can I book a free trial class?",
    answer: "Simply use the contact form above (or choose the demo request option), and we'll contact you within 24 hours to schedule your free trial.",
  },
];

const initialDemoForm = {
  fatherName: "",
  fatherOccupation: "",
  motherName: "",
  motherOccupation: "",
  motherTongue: "",
  gradeOrClass: "",
  cityAndState: "",
  siblingsAndAge: "",
  promoOrReferral: "promo" as "promo" | "referral",
  promoReferralValue: "",
  timezone: "",
};

const initialContactForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const initialFeedbackForm = {
  parentName: "",
  course: "",
  rating: 0,
  message: "",
  email: "",
};

const Contact = () => {
  const location = useLocation();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsletter, setNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  const dismissErrors = (...keys: ContactFieldErrorKey[]) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      keys.forEach((k) => {
        delete next[k];
      });
      return next;
    });
  };

  // Scroll to form and switch tab when navigating with #contact-form and ?tab= (e.g. from footer)
  useEffect(() => {
    if (location.hash === "#contact-form") {
      smoothScroll("contact-form");
    }
  }, [location.hash]);

  // Form states
  const [demoForm, setDemoForm] = useState(initialDemoForm);

  const [contactForm, setContactForm] = useState(initialContactForm);

  const [feedbackForm, setFeedbackForm] = useState(initialFeedbackForm);

  useEffect(() => {
    setFieldErrors({});
  }, [contactForm.subject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateContactPageForm(contactForm, demoForm, feedbackForm);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      toast.error("Please fill in all required fields.");
      scrollToFirstContactError(errors);
      return;
    }
    setFieldErrors({});
    setIsSubmitting(true);
    try {
      const { subject } = contactForm;
      if (subject === "feedback") {
        await insertFeedback(contactForm, feedbackForm, newsletter);
        toast.success("Feedback submitted successfully. Thank you!");
      } else if (subject === "demo" || subject === "courses") {
        await insertDemoRequest(contactForm, demoForm, newsletter);
        toast.success("Demo request submitted successfully. We'll be in touch soon.");
      } else {
        await insertContactRequest(contactForm, newsletter);
        toast.success("Message sent successfully. We'll get back to you soon.");
      }
      setContactForm({ ...initialContactForm });
      setDemoForm({ ...initialDemoForm });
      setFeedbackForm({ ...initialFeedbackForm });
      setNewsletter(false);
      setFieldErrors({});
    } catch (err) {
      console.error(err);
      const message =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen min-w-0 bg-background overflow-x-clip">
      <Navbar />
      <SocialSidebar />

      {/* Global Impact Hero */}
      <GlobalHero
        onBookDemo={() => smoothScroll("contact-form")}
        onContact={() => smoothScroll("contact-form")}
      />

      {/* Trust Section - Why Parents Trust Us */}
      {/* <TrustSection /> */}

      {/* World Map Section - The Centerpiece */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Global Network
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Learning{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Without Borders
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Connecting students across 6 countries with world-class mathematics education.
              Watch our learning network expand from India to the world.
            </p>
          </motion.div>

          <GlobalWorldMap />
        </div>
      </section>

      {/* Forms Section with Diagonal Stripes */}
      <section
        id="contact-form"
        className="py-24 relative overflow-hidden"
        style={{
          background: `
            repeating-linear-gradient(
              135deg,
              hsl(var(--muted) / 0.3),
              hsl(var(--muted) / 0.3) 2px,
              transparent 2px,
              transparent 20px
            ),
            hsl(var(--background))
          `,
        }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-3">
              Connect With{" "}
              <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-7 w-full min-w-0"
            style={{
              background: "hsl(var(--card))",
              boxShadow: "0 25px 80px hsl(var(--foreground) / 0.08)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            {/* Unified Contact Form */}
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <FloatingLabelInput
                  id="contactName"
                  label={
                    contactForm.subject === "demo" ||
                    contactForm.subject === "courses" ||
                    contactForm.subject === "feedback"
                      ? "Student's full name"
                      : "Full name"
                  }
                  value={contactForm.name}
                  onChange={(v) => {
                    setContactForm({ ...contactForm, name: v });
                    dismissErrors("name");
                  }}
                  required
                  error={fieldErrors.name}
                />
                {contactForm.subject === "feedback" ? (
                  <FloatingLabelInput
                    id="feedbackParentName"
                    label="Parent's Name"
                    value={feedbackForm.parentName}
                    onChange={(v) => {
                      setFeedbackForm({ ...feedbackForm, parentName: v });
                      dismissErrors("parentName");
                    }}
                    required
                    error={fieldErrors.parentName}
                  />
                ) : (
                  <FloatingLabelInput
                    id="contactEmail"
                    label="Email Address"
                    type="email"
                    value={contactForm.email}
                    onChange={(v) => {
                      setContactForm({ ...contactForm, email: v });
                      dismissErrors("email");
                    }}
                    required
                    error={fieldErrors.email}
                  />
                )}
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <FloatingLabelInput
                  id="contactPhone"
                  label={
                    contactForm.subject === "demo" || contactForm.subject === "courses"
                      ? "Contact number (WhatsApp preferred)"
                      : "Phone Number"
                  }
                  type="tel"
                  inputMode={
                    contactForm.subject === "demo" || contactForm.subject === "courses" ? "numeric" : undefined
                  }
                  value={contactForm.phone}
                  onChange={(v) => {
                    setContactForm({ ...contactForm, phone: v });
                    dismissErrors("phone");
                  }}
                  required
                  error={fieldErrors.phone}
                />
                <FloatingLabelSelect
                  id="subject"
                  label="How can we help you?"
                  value={contactForm.subject}
                  onChange={(v) => {
                    setContactForm({ ...contactForm, subject: v });
                    dismissErrors("subject");
                  }}
                  options={[
                    { value: "courses", label: "Ask about courses" },
                    { value: "demo", label: "Request a free demo" },
                    { value: "feedback", label: "Share feedback" },
                    { value: "issue", label: "Report an issue" },
                    { value: "enquiry", label: "General Inquiry" },
                  ]}
                  required
                  error={fieldErrors.subject}
                />
              </div>
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="fatherName"
                    label="Father's Name"
                    value={demoForm.fatherName}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, fatherName: v });
                      dismissErrors("fatherName");
                    }}
                    required
                    error={fieldErrors.fatherName}
                  />
                  <FloatingLabelInput
                    id="fatherOccupation"
                    label="Father's Occupation"
                    value={demoForm.fatherOccupation}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, fatherOccupation: v });
                      dismissErrors("fatherOccupation");
                    }}
                    required
                    error={fieldErrors.fatherOccupation}
                  />
                </div>
              )}
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="motherName"
                    label="Mother's Full Name"
                    value={demoForm.motherName}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, motherName: v });
                      dismissErrors("motherName");
                    }}
                    required
                    error={fieldErrors.motherName}
                  />
                  <FloatingLabelInput
                    id="motherOccupation"
                    label="Mother's Occupation"
                    value={demoForm.motherOccupation}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, motherOccupation: v });
                      dismissErrors("motherOccupation");
                    }}
                    required
                    error={fieldErrors.motherOccupation}
                  />
                </div>
              )}
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="gradeOrClass"
                    label="Current Grade / Class"
                    value={demoForm.gradeOrClass}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, gradeOrClass: v });
                      dismissErrors("gradeOrClass");
                    }}
                    required
                    error={fieldErrors.gradeOrClass}
                  />
                  <FloatingLabelInput
                    id="cityAndState"
                    label="City & State of Residence"
                    value={demoForm.cityAndState}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, cityAndState: v });
                      dismissErrors("cityAndState");
                    }}
                    required
                    error={fieldErrors.cityAndState}
                  />
                  
                </div>
              )}
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  
                  <FloatingLabelInput
                    id="motherTongue"
                    label="Mother tongue"
                    value={demoForm.motherTongue}
                    onChange={(v) => {
                      setDemoForm({ ...demoForm, motherTongue: v });
                      dismissErrors("motherTongue");
                    }}
                    required
                    error={fieldErrors.motherTongue}
                  />
                  <FloatingLabelInput
                    id="timezone"
                    label="Time zone (If outside India)"
                    value={demoForm.timezone}
                    onChange={(v) => setDemoForm({ ...demoForm, timezone: v })}
                  />
                </div>
              )}
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="mb-2">
                  <FloatingLabelTextarea
                    id="siblingsAndAge"
                    label="Does the student have siblings? (If yes, mention age) (Optional)"
                    value={demoForm.siblingsAndAge}
                    onChange={(v) => setDemoForm({ ...demoForm, siblingsAndAge: v })}
                    rows={1}
                  />
                </div>
              )}
              {(contactForm.subject === "demo" || contactForm.subject === "courses") && (
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:items-center">
                    <div className="flex flex-col gap-2">
                      <Label className="text-sm font-medium text-muted-foreground">
                        How did you hear about us?
                      </Label>
                      <RadioGroup
                        value={demoForm.promoOrReferral}
                        onValueChange={(v) => setDemoForm({ ...demoForm, promoOrReferral: v as "promo" | "referral" })}
                        className="flex flex-wrap gap-6"
                      >
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="promo" id="promo" />
                          <Label htmlFor="promo" className="cursor-pointer font-normal">Promo Code</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <RadioGroupItem value="referral" id="referral" />
                          <Label htmlFor="referral" className="cursor-pointer font-normal">Referred by Someone</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="w-full">
                      <FloatingLabelInput
                        id="promoReferralValue"
                        label={demoForm.promoOrReferral === "promo" ? "Enter Promo Code" : "Enter Referral Name"}
                        value={demoForm.promoReferralValue}
                        onChange={(v) => setDemoForm({ ...demoForm, promoReferralValue: v })}
                        required={false}
                      />
                    </div>
                  </div>
                </div>
              )}
              {contactForm.subject === "feedback" && (
                <>
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  We’d Love Your Feedback
                  </h3>
                  <p className="text-muted-foreground">
                  Your feedback helps us continuously improve and create a better learning experience for every child.                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6 items-start">
                  <FloatingLabelSelect
                    id="feedbackCourse"
                    label="Program Enrolled In"
                    value={feedbackForm.course}
                    onChange={(v) => {
                      setFeedbackForm({ ...feedbackForm, course: v });
                      dismissErrors("course");
                    }}
                    options={[
                      { value: "", label: "Select a course" },
                      { value: "Abacus", label: "Abacus" },
                      { value: "Vedic Maths", label: "Vedic Maths" },
                      { value: "Mathematics", label: "Mathematics" },
                      { value: "Hand Writing", label: "Hand Writing" },
                      { value: "Phonetics", label: "Phonetics" },

                    ]}
                    required
                    error={fieldErrors.course}
                  />
                  <div id="feedback-rating" className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">
                      Overall Experience Rating <span className="text-destructive">*</span>
                    </Label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setFeedbackForm({ ...feedbackForm, rating: star });
                            dismissErrors("rating");
                          }}
                          className="p-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          aria-label={`${star} star${star > 1 ? "s" : ""}`}
                        >
                          <Star
                            className="w-8 h-8 transition-colors"
                            fill={feedbackForm.rating >= star ? "hsl(var(--gold))" : "none"}
                            stroke={feedbackForm.rating >= star ? "hsl(var(--gold))" : "hsl(var(--muted-foreground))"}
                            strokeWidth={1.5}
                          />
                        </button>
                      ))}
                    </div>
                    {fieldErrors.rating ? (
                      <p className="text-destructive text-xs px-0.5" role="alert">
                        {fieldErrors.rating}
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="mb-6">
                  <FloatingLabelTextarea
                    id="feedbackMessage"
                    label="Your Experience with Tiny Vivid Minds"
                    placeholder="Tell us what you liked, what we can improve, or how your child has benefited..."
                    value={feedbackForm.message}
                    onChange={(v) => {
                      setFeedbackForm({ ...feedbackForm, message: v });
                      dismissErrors("feedbackMessage");
                    }}
                    required
                    error={fieldErrors.feedbackMessage}
                  />
                </div>
                <div className="mb-6">
                  <FloatingLabelInput
                    id="feedbackEmail"
                    label="Email Address"
                    type="email"
                    value={feedbackForm.email}
                    onChange={(v) => {
                      setFeedbackForm({ ...feedbackForm, email: v });
                      dismissErrors("feedbackEmail");
                    }}
                    required
                    error={fieldErrors.feedbackEmail}
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                  We’ll use this only to send a thank-you note and respond if needed. We respect your privacy.                  </p>
                </div>
                </>
              )}
              {contactForm.subject !== "feedback" && (
                <div className="mb-6">
                  <FloatingLabelTextarea
                    id="contactMessage"
                    label="Message"
                    value={contactForm.message}
                    onChange={(v) => {
                      setContactForm({ ...contactForm, message: v });
                      dismissErrors("message");
                    }}
                    required
                    error={fieldErrors.message}
                  />
                </div>
              )}
              <div className="flex items-center gap-3 mb-6">
                <ToggleSwitch
                  checked={newsletter}
                  onChange={setNewsletter}
                  id="newsletter"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                I’d like to receive updates and learning tips via email
                </label>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-base py-4 rounded-md"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {contactForm.subject === "feedback"
                      ? "Submit Feedback"
                      : contactForm.subject === "demo" || contactForm.subject === "courses"
                        ? "Send request"
                        : "Send Message"}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Wall of Love */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Wall of Love
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              What Parents{" "}
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
                Say About Us
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Real feedback from families who have experienced our program.
            </p>
          </motion.div>

          {/* Organic Cluster Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialBubble
                key={testimonial.author}
                {...testimonial}
                index={index}
                variant={index === 0 ? "featured" : "normal"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow our learning journey, success stories, and student achievements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Instagram, name: "Instagram", color: "#E4405F", desc: "Daily tips & stories" },
              { icon: Facebook, name: "Facebook", color: "#1877F2", desc: "Community updates" },
              { icon: Youtube, name: "YouTube", color: "#FF0000", desc: "Tutorial videos" },
            ].map((social, i) => (
              <motion.a
                key={social.name}
                href="#"
                target="_blank"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl text-center group"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  boxShadow: "0 10px 30px hsl(var(--foreground) / 0.05)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: `${social.color}20` }}
                >
                  <social.icon className="w-7 h-7" style={{ color: social.color }} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{social.name}</h3>
                <p className="text-sm text-muted-foreground">{social.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                FAQs
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Have a Question?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Find answers to common questions about our math learning programs.
              </p>
              <DiscoverProgramsLink>
                <Button variant="outline" size="lg" className="rounded-xl">
                  Explore Our Courses
                </Button>
              </DiscoverProgramsLink>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-5 pb-5"
                    >
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary to-navy-dark text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Child's Confidence in Maths?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join parents worldwide who trust Tiny Vivid Minds to make maths simple, smart, and joyful.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => smoothScroll("contact-form")}
                className="bg-gold text-navy-dark hover:bg-gold-light text-lg px-8 py-6 rounded-xl"
              >
                <motion.span
                  className="inline-flex mr-2"
                  animate={{ translateY: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mail className="w-5 h-5" />
                </motion.span>
                Contact Us
              </Button>
              <DiscoverProgramsLink>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  Explore Programs
                </Button>
              </DiscoverProgramsLink>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
