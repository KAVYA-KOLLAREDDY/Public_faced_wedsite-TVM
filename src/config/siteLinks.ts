export const SITE_LINKS = {
  instagram: "https://www.instagram.com/tiny_vivid_minds",
  youtube: "https://youtube.com/@tinyvividminds",
} as const;

export const CONTACT_DETAILS = {
  phone: import.meta.env.VITE_CONTACT_PHONE ?? "+1 (234) 567-890",
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "info@example.com",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER,
} as const;

export const getWhatsAppUrl = () =>
  CONTACT_DETAILS.whatsappNumber
    ? `https://wa.me/${CONTACT_DETAILS.whatsappNumber}`
    : "#";

export const getPhoneHref = () =>
  `tel:${CONTACT_DETAILS.phone.replace(/\s/g, "")}`;

export const getMailtoHref = () =>
  `mailto:${CONTACT_DETAILS.email}`;
