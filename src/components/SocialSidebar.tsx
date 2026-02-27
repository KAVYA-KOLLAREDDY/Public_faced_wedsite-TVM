import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Plus,
  X,
  Youtube,
  Linkedin,
  Mail,
  Twitter,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
  hoverColor: string;
}

const whatsAppUrl = import.meta.env.VITE_WHATSAPP_NUMBER ? `https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}` : "#";
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? "info@example.com";

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/tinyvividminds",
    color: "#1877f2",
    hoverColor: "#166fe5",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: whatsAppUrl,
    color: "#25d366",
    hoverColor: "#20ba5a",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/tiny_vivid_minds",
    color: "#e4405f",
    hoverColor: "#c13584",
  },
];

const additionalSocialLinks: SocialLink[] = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@tinyvividminds",
    color: "#ff0000",
    hoverColor: "#cc0000",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/tiny_vivid_minds",
    color: "#e4405f",
    hoverColor: "#c13584",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/tinyvividminds",
    color: "#0088cc",
    hoverColor: "#006699",
  },
  
  // {
  //   name: "LinkedIn",
  //   icon: Linkedin,
  //   url: "https://linkedin.com/company/tinyvividminds",
  //   color: "#0077b5",
  //   hoverColor: "#005885",
  // },
  // {
  //   name: "Gmail",
  //   icon: Mail,
  //   url: `mailto:${contactEmail}`,
  //   color: "#ea4335",
  //   hoverColor: "#d33b2c",
  // },
  // {
  //   name: "Twitter",
  //   icon: Twitter,
  //   url: "https://twitter.com/tinyvividminds",
  //   color: "#1da1f2",
  //   hoverColor: "#0d8bd9",
  // },
  // {
  //   name: "TikTok",
  //   icon: () => (
  //     <svg
  //       viewBox="0 0 24 24"
  //       fill="currentColor"
  //       className="w-5 h-5"
  //     >
  //       <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  //     </svg>
  //   ),
  //   url: "https://tiktok.com/@tinyvividminds",
  //   color: "#000000",
  //   hoverColor: "#333333",
  // },
];

export const SocialSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isPlusHovered, setIsPlusHovered] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const openSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openAdditionalSocialLink = (url: string) => {
    openSocialLink(url);
    closeModal();
  };

  const toggleMobileExpanded = () => {
    setMobileExpanded(!mobileExpanded);
  };

  return (
    <>
      {/* Desktop Fixed Sidebar - Compact & Higher Position */}
      <motion.div
        className="fixed left-3 top-1/3 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glassmorphism Sidebar Container - Reduced Width */}
        <div className="relative backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 rounded-full p-2 shadow-xl">
          <div className="flex flex-col gap-2">
            {socialLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => openSocialLink(link.url)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 hover:scale-110"
                style={{ backgroundColor: link.color }}
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
              >
                <link.icon className="w-4 h-4" />
              </motion.button>
            ))}

            {/* Plus Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: socialLinks.length * 0.1, duration: 0.3 }}
              onClick={toggleModal}
              onMouseEnter={() => setIsPlusHovered(true)}
              onMouseLeave={() => setIsPlusHovered(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-gold to-gold-light text-navy-dark transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              aria-label="More social media"
            >
              <motion.div
                animate={{ rotate: isPlusHovered ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 40 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="w-0.5 mt-3 bg-gradient-to-b from-gold/60 via-teal/40 to-transparent rounded-full"
        />
      </motion.div>

      {/* Mobile FAB - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <AnimatePresence>
          {mobileExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3 items-end"
            >
              {socialLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                  onClick={() => openSocialLink(link.url)}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{ backgroundColor: link.color }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: socialLinks.length * 0.05, duration: 0.2 }}
                onClick={toggleModal}
                className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-gold to-gold-light text-navy-dark shadow-lg"
                whileTap={{ scale: 0.95 }}
                aria-label="More social media"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          onClick={toggleMobileExpanded}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-vedic-gold to-vedic-gold-light text-vedic-navy shadow-xl flex items-center justify-center"
          whileTap={{ scale: 0.95 }}
          aria-label="Social media links"
        >
          <motion.div
            animate={{ rotate: mobileExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileExpanded ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
          </motion.div>
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 25 }}
              className="relative backdrop-blur-xl bg-white/95 dark:bg-navy/95 rounded-3xl p-8 shadow-2xl border border-white/20 max-w-md w-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                Follow us on
                </h3>
                <motion.button
                  onClick={closeModal}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-3 gap-4">
                {additionalSocialLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => openAdditionalSocialLink(link.url)}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-2xl text-white transition-all duration-300 shadow-md hover:shadow-xl"
                    style={{ backgroundColor: link.color }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="text-xs font-medium">{link.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* Footer Text */}
              <p className="text-center text-muted-foreground text-sm mt-6">
              Stay updated with smart math tips, student success stories, and exciting updates.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SocialSidebar;
