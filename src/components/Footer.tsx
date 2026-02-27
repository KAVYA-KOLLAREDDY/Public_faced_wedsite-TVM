import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowRight, MessageCircle, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToContactForm = (e: React.MouseEvent) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/contact#contact-form");
    }
  };

  const goToContactUsTab = (e: React.MouseEvent) => {
    if (location.pathname === "/contact") {
      e.preventDefault();
      navigate("/contact?tab=contact#contact-form");
      // Always scroll to form (when URL is already the same, navigate is a no-op so we scroll here)
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Abacus", path: "/courses/abacus" },
    { name: "Vedic Maths", path: "/courses/vedic-math" },
    { name: "Personalized Coaching", path: "/courses/signature-programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-vedic-navy via-vedic-navy-light to-vedic-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-vedic-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vedic-teal/5 rounded-full blur-3xl" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Section */}
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <h3 className="font-display font-bold text-2xl bg-gradient-to-r from-vedic-gold via-vedic-gold-light to-vedic-gold bg-clip-text text-transparent">
                Tiny Vivid Minds
              </h3>
              <span className="text-sm text-white/60 block mt-1">
                Enlarges the tiny minds of buds and lads through Online Math Learning
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed text-sm">
              We are dedicated to making mathematics fun, engaging, and accessible through innovative teaching methods including Abacus (ages 3-8), Vedic Maths (ages above 12), and personalized coaching (any age).
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
                { Icon: Twitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vedic-gold hover:text-vedic-navy transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-vedic-gold/30"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-vedic-gold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-vedic-gold transition-colors duration-300 flex items-center group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-vedic-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-vedic-gold">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-vedic-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-white/70 text-sm">Murali Nagar, Vijayawada, Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-vedic-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`tel:${(import.meta.env.VITE_CONTACT_PHONE ?? "+1234567890").replace(/\s/g, "")}`} className="text-white/70 hover:text-vedic-gold transition-colors text-sm">
                  {import.meta.env.VITE_CONTACT_PHONE ?? "+1 (234) 567-890"}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-vedic-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL ?? "info@example.com"}`} className="text-white/70 hover:text-vedic-gold transition-colors text-sm">
                  {import.meta.env.VITE_CONTACT_EMAIL ?? "info@example.com"}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <MessageCircle className="w-5 h-5 text-vedic-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href={import.meta.env.VITE_WHATSAPP_NUMBER ? `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}` : "#"} className="text-white/70 hover:text-vedic-gold transition-colors text-sm">
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-vedic-gold">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Subscribe to our newsletter for math tips and updates!
            </p>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 text-sm focus:border-vedic-gold"
              />
              <Button 
                size="icon"
                className="bg-vedic-gold text-vedic-navy hover:bg-vedic-gold-light transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Button asChild className="w-full bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-semibold hover:shadow-lg hover:shadow-vedic-gold/30 transition-all">
                <Link to="/contact#contact-form" onClick={scrollToContactForm}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Demo
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-vedic-gold/50 text-vedic-gold hover:bg-vedic-gold hover:text-vedic-navy transition-all">
                <Link to="/contact?tab=contact#contact-form" onClick={goToContactUsTab}>
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>© {currentYear} Tiny Vivid Minds. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-vedic-gold transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-vedic-gold transition-colors">Terms of Service</Link>
              <Link to="/contact" className="hover:text-vedic-gold transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
