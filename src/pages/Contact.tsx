import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  ChevronDown,
  Loader2,
  Instagram,
  Facebook,
  Youtube,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "sonner";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { SocialSidebar } from "@/components/SocialSidebar";

// New components
import GlobalHero from "@/components/contact/GlobalHero";
import GlobalWorldMap from "@/components/contact/GlobalWorldMap";
import StatRibbon from "@/components/contact/StatRibbon";
import SegmentedTabs from "@/components/contact/SegmentedTabs";
import FloatingLabelInput from "@/components/contact/FloatingLabelInput";
import FloatingLabelSelect from "@/components/contact/FloatingLabelSelect";
import FloatingLabelTextarea from "@/components/contact/FloatingLabelTextarea";
import TestimonialBubble from "@/components/contact/TestimonialBubble";
import ToggleSwitch from "@/components/contact/ToggleSwitch";
import TrustSection from "@/components/signature/TrustSection";

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
    answer: "Simply fill out the 'Book Free Demo' form above, and we'll contact you within 24 hours to schedule your free trial.",
  },
];

const Contact = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("demo");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [newsletter, setNewsletter] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to form and switch tab when navigating with #contact-form and ?tab= (e.g. from footer)
  useEffect(() => {
    if (location.hash === "#contact-form") {
      const tab = searchParams.get("tab");
      if (tab === "contact" || tab === "join" || tab === "demo") {
        setActiveTab(tab);
      }
      smoothScroll("contact-form");
    }
  }, [location.hash, location.search]);

  // Form states
  const [demoForm, setDemoForm] = useState({
    studentFullName: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    motherTongue: "",
    gradeOrClass: "",
    cityAndState: "",
    contactNumber: "",
    gmailId: "",
    siblingsAndAge: "",
    promoOrReferral: "promo" as "promo" | "referral",
    promoReferralValue: "",
    timezone: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [feedbackForm, setFeedbackForm] = useState({
    parentName: "",
    childName: "",
    course: "",
    rating: 0,
    message: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent, formType: string) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(`${formType} submitted successfully! We'll get back to you soon.`);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />

      {/* Global Impact Hero */}
      <GlobalHero
        onBookDemo={() => smoothScroll("contact-form")}
        onContact={() => smoothScroll("contact-form")}
      />

      {/* Stat Ribbon - Overlapping Map Section */}
      <StatRibbon />

      {/* Trust Section - Why Parents Trust Us */}
      <TrustSection />

      {/* World Map Section - The Centerpiece */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
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
              Connecting students across 5 countries with world-class mathematics education.
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Get Started
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Connect With{" "}
              <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll respond within 24 hours.
            </p>
          </motion.div>

          {/* Segmented Tabs */}
          <div className="flex justify-center mb-8">
            <SegmentedTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto rounded-3xl p-8 md:p-10"
            style={{
              background: "hsl(var(--card))",
              boxShadow: "0 25px 80px hsl(var(--foreground) / 0.08)",
              border: "1px solid hsl(var(--border))",
            }}
          >
            {/* Demo Form */}
            {activeTab === "demo" && (
              <form onSubmit={(e) => handleSubmit(e, "Demo booking")}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="studentFullName"
                    label="Student's Full Name"
                    value={demoForm.studentFullName}
                    onChange={(v) => setDemoForm({ ...demoForm, studentFullName: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="fatherName"
                    label="Father's Name"
                    value={demoForm.fatherName}
                    onChange={(v) => setDemoForm({ ...demoForm, fatherName: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="fatherOccupation"
                    label="Father's Occupation"
                    value={demoForm.fatherOccupation}
                    onChange={(v) => setDemoForm({ ...demoForm, fatherOccupation: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="motherName"
                    label="Mother's Full Name"
                    value={demoForm.motherName}
                    onChange={(v) => setDemoForm({ ...demoForm, motherName: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="motherOccupation"
                    label="Mother's Occupation"
                    value={demoForm.motherOccupation}
                    onChange={(v) => setDemoForm({ ...demoForm, motherOccupation: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="motherTongue"
                    label="Mother tongue"
                    value={demoForm.motherTongue}
                    onChange={(v) => setDemoForm({ ...demoForm, motherTongue: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="gradeOrClass"
                    label="Current Grade / Class"
                    value={demoForm.gradeOrClass}
                    onChange={(v) => setDemoForm({ ...demoForm, gradeOrClass: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="cityAndState"
                    label="City & State of Residence"
                    value={demoForm.cityAndState}
                    onChange={(v) => setDemoForm({ ...demoForm, cityAndState: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="contactNumber"
                    label="Contact number (WhatsApp preferred)"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    value={demoForm.contactNumber}
                    onChange={(v) => setDemoForm({ ...demoForm, contactNumber: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="gmailId"
                    label="Email Address"
                    type="email"
                    value={demoForm.gmailId}
                    onChange={(v) => setDemoForm({ ...demoForm, gmailId: v })}
                    required
                  />
                </div>
                <div className="mb-2">
                  <FloatingLabelTextarea
                    id="siblingsAndAge"
                    label="Does the student have siblings? (If yes, mention age) (Optional)"
                    value={demoForm.siblingsAndAge}
                    onChange={(v) => setDemoForm({ ...demoForm, siblingsAndAge: v })}
                    rows={1}
                  />
                </div>
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
                <div className="mb-6">
                  <FloatingLabelInput
                    id="timezone"
                    label="Time zone (If outside India)"
                    value={demoForm.timezone}
                    onChange={(v) => setDemoForm({ ...demoForm, timezone: v })}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book Free Demo
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Contact Form */}
            {activeTab === "contact" && (
              <form onSubmit={(e) => handleSubmit(e, "Message")}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="contactName"
                    label="Full Name"
                    value={contactForm.name}
                    onChange={(v) => setContactForm({ ...contactForm, name: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="contactEmail"
                    label="Email Address"
                    type="email"
                    value={contactForm.email}
                    onChange={(v) => setContactForm({ ...contactForm, email: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="contactPhone"
                    label="Phone Number"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(v) => setContactForm({ ...contactForm, phone: v })}
                    required
                  />
                  <FloatingLabelSelect
                    id="subject"
                    label="How can we help you?"
                    value={contactForm.subject}
                    onChange={(v) => setContactForm({ ...contactForm, subject: v })}
                    options={[
                      { value: "courses", label: "Ask about courses" },
                      { value: "demo", label: "Request a free demo" },
                      { value: "feedback", label: "Share feedback" },
                      { value: "issue", label: "Report an issue" },
                      { value: "enquiry", label: "General Inquiry" },

                    ]}
                    required
                  />
                </div>
                <div className="mb-6">
                  <FloatingLabelTextarea
                    id="contactMessage"
                    label="Message"
                    value={contactForm.message}
                    onChange={(v) => setContactForm({ ...contactForm, message: v })}
                    required
                  />
                </div>
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
                  className="w-full text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}

            {/* Feedback Form */}
            {activeTab === "join" && (
              <form onSubmit={(e) => handleSubmit(e, "Feedback")}>
                <div className="text-center mb-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  We’d Love Your Feedback
                  </h3>
                  <p className="text-muted-foreground">
                  Your feedback helps us continuously improve and create a better learning experience for every child.                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelInput
                    id="feedbackParentName"
                    label="Parent's Full Name"
                    value={feedbackForm.parentName}
                    onChange={(v)  => setFeedbackForm({ ...feedbackForm, parentName: v })}
                    required
                  />
                  <FloatingLabelInput
                    id="feedbackChildName"
                    label="Student's Full Name"
                    value={feedbackForm.childName}
                    onChange={(v) =>   setFeedbackForm({ ...feedbackForm, childName: v })}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <FloatingLabelSelect
                    id="feedbackCourse"
                    label="Program Enrolled In"
                    value={feedbackForm.course}
                    onChange={(v) => setFeedbackForm({ ...feedbackForm, course: v })}
                    options={[
                      { value: "", label: "Select a course" },
                      { value: "Abacus", label: "Abacus" },
                      { value: "Vedic Maths", label: "Vedic Maths" },
                      { value: "Mathematics", label: "Mathematics" },
                      { value: "Hand Writing", label: "Hand Writing" },
                      { value: "Phonetics", label: "Phonetics" },

                    ]}
                    required
                  />
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-muted-foreground">
                      Overall Experience Rating <span className="text-destructive">*</span>
                    </Label>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFeedbackForm({ ...feedbackForm, rating: star })}
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
                  </div>
                </div>
                <div className="mb-6">
                  <FloatingLabelTextarea
                    id="feedbackMessage"
                    label="Your Experience with Tiny Vivid Minds"
                    placeholder="Tell us what you liked, what we can improve, or how your child has benefited..."
                    value={feedbackForm.message}
                    onChange={(v) => setFeedbackForm({ ...feedbackForm, message: v })}
                    required
                  />
                </div>
                <div className="mb-6">
                  <FloatingLabelInput
                    id="feedbackEmail"
                    label="Email Address"
                    type="email"
                    value={feedbackForm.email}
                    onChange={(v) => setFeedbackForm({ ...feedbackForm, email: v })}
                    required
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                  We’ll use this only to send a thank-you note and respond if needed. We respect your privacy.                  </p>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || feedbackForm.rating === 0}
                  className="w-full text-lg py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Feedback
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Wall of Love */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
        <div className="container mx-auto px-4">
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
              <Link to="/courses/abacus">
                <Button variant="outline" size="lg" className="rounded-xl">
                  Explore Our Courses
                </Button>
              </Link>
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
        <div className="container mx-auto px-4 text-center">
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
              Join 200+ parents who trust Tiny Vivid Minds to make maths simple, smart, and joyful.
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
                  <Calendar className="w-5 h-5" />
                </motion.span>
                Book a Free Demo Now
              </Button>
              <Link to="/courses/abacus">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-xl border-2 border-gold text-gold hover:bg-gold hover:text-navy-dark transition-all"
                >
                  Explore Programs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
