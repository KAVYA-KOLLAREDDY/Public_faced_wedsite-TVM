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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isBlank(s: string) {
  return !s.trim();
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
  }

  if (sub === "feedback") {
    if (isBlank(feedback.parentName)) {
      e.parentName = "Please enter the parent's name.";
    }
    if (isBlank(feedback.email)) {
      e.feedbackEmail = "Please enter your email address.";
    } else if (!EMAIL_RE.test(feedback.email.trim())) {
      e.feedbackEmail = "Please enter a valid email address.";
    }
    if (isBlank(feedback.course)) {
      e.course = "Please select a program.";
    }
    if (feedback.rating < 1) {
      e.rating = "Please select an overall experience rating.";
    }
    if (isBlank(feedback.message)) {
      e.feedbackMessage = "Please tell us about your experience.";
    }
  } else {
    if (isBlank(contact.email)) {
      e.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(contact.email.trim())) {
      e.email = "Please enter a valid email address.";
    }
  }

  if (isBlank(contact.phone)) {
    e.phone =
      sub === "demo" || sub === "courses"
        ? "Please enter a 10-digit contact number (WhatsApp)."
        : "Please enter your phone number.";
  } else if (sub === "demo" || sub === "courses") {
    const digits = contact.phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      e.phone = "Please enter exactly 10 digits for your contact number.";
    }
  }

  if (sub === "demo" || sub === "courses") {
    if (isBlank(demo.fatherName)) e.fatherName = "Please enter the father's name.";
    if (isBlank(demo.fatherOccupation)) e.fatherOccupation = "Please enter the father's occupation.";
    if (isBlank(demo.motherName)) e.motherName = "Please enter the mother's full name.";
    if (isBlank(demo.motherOccupation)) e.motherOccupation = "Please enter the mother's occupation.";
    if (isBlank(demo.gradeOrClass)) e.gradeOrClass = "Please enter the current grade or class.";
    if (isBlank(demo.cityAndState)) e.cityAndState = "Please enter city and state of residence.";
    if (isBlank(demo.motherTongue)) e.motherTongue = "Please enter mother tongue.";
  }

  if (sub !== "feedback" && isBlank(contact.message)) {
    e.message = "Please enter a message.";
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
