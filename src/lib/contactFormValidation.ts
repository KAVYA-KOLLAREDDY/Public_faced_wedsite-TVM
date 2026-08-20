import { isValidContactPhone, digitsOnlyPhone } from "@/config/phoneCountries";

export type ContactFieldErrorKey =
  | "name"
  | "parentName"
  | "email"
  | "phone"
  | "subject"
  | "message"
  | "fatherName"
  | "fatherOccupation"
  | "motherName"
  | "motherOccupation"
  | "gradeOrClass"
  | "cityAndState"
  | "motherTongue"
  | "course"
  | "rating"
  | "feedbackMessage"
  | "feedbackEmail";

export type ContactFieldErrors = Partial<Record<ContactFieldErrorKey, string>>;

/** Stricter than a naive "@" check — TLD must be letters, domain must be structured. */
const EMAIL_RE =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z]{2,24})+$/;

/** Common typos parents make — reject with a helpful hint. */
const EMAIL_DOMAIN_TYPOS: Record<string, string> = {
  "gma.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gnail.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.cmo": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yhoo.com": "yahoo.com",
  "hotmial.com": "hotmail.com",
  "hotmal.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "outlok.com": "outlook.com",
  "outllok.com": "outlook.com",
  "outlook.co": "outlook.com",
};

function isBlank(s: string) {
  return !s.trim();
}

/** Keep digits only; optional max length (national number). */
export function sanitizePhoneInput(value: string, maxDigits = 15): string {
  return digitsOnlyPhone(value, maxDigits);
}

export function emailError(email: string): string | undefined {
  if (isBlank(email)) {
    return "Please enter your email address.";
  }

  const trimmed = email.trim();
  if (/\s/.test(trimmed)) {
    return "Please enter a valid email address (no spaces).";
  }
  if (!EMAIL_RE.test(trimmed)) {
    return "Please enter a valid email address (example: name@gmail.com).";
  }

  const domain = trimmed.split("@")[1]?.toLowerCase() ?? "";
  if (domain.includes("..")) {
    return "Please enter a valid email address.";
  }

  const suggestion = EMAIL_DOMAIN_TYPOS[domain];
  if (suggestion) {
    return `Please check your email — did you mean @${suggestion}?`;
  }

  return undefined;
}

function phoneError(nationalNumber: string, countryId: string): string | undefined {
  if (isBlank(countryId)) {
    return "Please select a country code.";
  }
  if (isBlank(nationalNumber)) {
    return "Please enter your phone number.";
  }
  if (/\D/.test(nationalNumber)) {
    return "Please enter numbers only.";
  }
  if (!isValidContactPhone(countryId, nationalNumber)) {
    return "Please enter a valid phone number for the selected country.";
  }
  return undefined;
}

function nameTooShort(name: string): boolean {
  return name.trim().length > 0 && name.trim().length < 2;
}

function messageTooShort(message: string, min = 10): boolean {
  return message.trim().length > 0 && message.trim().length < min;
}

export const CONTACT_FIRST_ERROR_ORDER: ContactFieldErrorKey[] = [
  "subject",
  "name",
  "parentName",
  "email",
  "phone",
  "fatherName",
  "fatherOccupation",
  "motherName",
  "motherOccupation",
  "gradeOrClass",
  "cityAndState",
  "motherTongue",
  "message",
  "course",
  "rating",
  "feedbackMessage",
  "feedbackEmail",
];

export const CONTACT_ERROR_DOM_IDS: Record<ContactFieldErrorKey, string> = {
  subject: "subject",
  name: "contactName",
  parentName: "feedbackParentName",
  email: "contactEmail",
  phone: "contactPhone",
  fatherName: "fatherName",
  fatherOccupation: "fatherOccupation",
  motherName: "motherName",
  motherOccupation: "motherOccupation",
  gradeOrClass: "gradeOrClass",
  cityAndState: "cityAndState",
  motherTongue: "motherTongue",
  message: "contactMessage",
  course: "feedbackCourse",
  rating: "feedback-rating",
  feedbackMessage: "feedbackMessage",
  feedbackEmail: "feedbackEmail",
};

export type ContactShape = {
  name: string;
  email: string;
  phone: string;
  phoneCountryId: string;
  subject: string;
  message: string;
};

export type DemoShape = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  motherTongue: string;
  gradeOrClass: string;
  cityAndState: string;
};

export type FeedbackShape = {
  parentName: string;
  course: string;
  rating: number;
  message: string;
  email: string;
};

export function validateContactPageForm(
  contact: ContactShape,
  demo: DemoShape,
  feedback: FeedbackShape,
): ContactFieldErrors {
  const e: ContactFieldErrors = {};
  const sub = contact.subject;

  if (isBlank(sub)) {
    e.subject = "Please choose how we can help you.";
  }

  if (isBlank(contact.name)) {
    e.name =
      sub === "feedback" || sub === "demo" || sub === "courses"
        ? "Please enter the student's full name."
        : "Please enter your full name.";
  } else if (nameTooShort(contact.name)) {
    e.name = "Please enter a valid name (at least 2 characters).";
  }

  if (sub === "feedback") {
    if (isBlank(feedback.parentName)) {
      e.parentName = "Please enter the parent's name.";
    } else if (nameTooShort(feedback.parentName)) {
      e.parentName = "Please enter a valid name (at least 2 characters).";
    }
    const fbEmail = emailError(feedback.email);
    if (fbEmail) e.feedbackEmail = fbEmail;
    if (isBlank(feedback.course)) {
      e.course = "Please select a program.";
    }
    if (feedback.rating < 1) {
      e.rating = "Please select an overall experience rating.";
    }
    if (isBlank(feedback.message)) {
      e.feedbackMessage = "Please tell us about your experience.";
    } else if (messageTooShort(feedback.message)) {
      e.feedbackMessage = "Please share a bit more detail (at least 10 characters).";
    }
  } else {
    const mailErr = emailError(contact.email);
    if (mailErr) e.email = mailErr;
  }

  const phoneMsg = phoneError(contact.phone, contact.phoneCountryId);
  if (phoneMsg) e.phone = phoneMsg;

  if (sub === "demo" || sub === "courses") {
    if (isBlank(demo.fatherName)) e.fatherName = "Please enter the father's name.";
    else if (nameTooShort(demo.fatherName)) e.fatherName = "Please enter a valid name (at least 2 characters).";
    if (isBlank(demo.fatherOccupation)) e.fatherOccupation = "Please enter the father's occupation.";
    if (isBlank(demo.motherName)) e.motherName = "Please enter the mother's full name.";
    else if (nameTooShort(demo.motherName)) e.motherName = "Please enter a valid name (at least 2 characters).";
    if (isBlank(demo.motherOccupation)) e.motherOccupation = "Please enter the mother's occupation.";
    if (isBlank(demo.gradeOrClass)) e.gradeOrClass = "Please enter the current grade or class.";
    if (isBlank(demo.cityAndState)) e.cityAndState = "Please enter city and state of residence.";
    if (isBlank(demo.motherTongue)) e.motherTongue = "Please enter mother tongue.";
  }

  if (sub !== "feedback") {
    if (isBlank(contact.message)) {
      e.message = "Please enter a message.";
    } else if (messageTooShort(contact.message)) {
      e.message = "Please enter a bit more detail (at least 10 characters).";
    }
  }

  return e;
}

export function scrollToFirstContactError(errors: ContactFieldErrors) {
  for (const key of CONTACT_FIRST_ERROR_ORDER) {
    if (errors[key]) {
      const id = CONTACT_ERROR_DOM_IDS[key];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
      break;
    }
  }
}
