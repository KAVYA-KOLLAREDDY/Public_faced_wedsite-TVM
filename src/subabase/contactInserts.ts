import { getSupabase } from "./supabaseClient";

const SUBJECT_LABELS: Record<string, string> = {
  courses: "Ask about courses",
  demo: "Request a free demo",
  feedback: "Share feedback",
  issue: "Report an issue",
  enquiry: "General Inquiry",
};

function subjectLabel(value: string): string {
  return SUBJECT_LABELS[value] ?? value;
}

export type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type DemoFormState = {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  motherTongue: string;
  gradeOrClass: string;
  cityAndState: string;
  siblingsAndAge: string;
  promoOrReferral: "promo" | "referral";
  promoReferralValue: string;
  timezone: string;
};

export type FeedbackFormState = {
  parentName: string;
  course: string;
  rating: number;
  message: string;
  email: string;
};

export async function insertContactRequest(
  contact: ContactFormState,
  newsletter: boolean,
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.");
  }

  const { error } = await supabase.from("contact_requests").insert({
    name: contact.name.trim(),
    email: contact.email.trim() || null,
    phone: contact.phone.trim() || null,
    subject: subjectLabel(contact.subject),
    message: contact.message.trim() || null,
    newsletter,
  });

  if (error) throw error;
}

export async function insertDemoRequest(
  contact: ContactFormState,
  demo: DemoFormState,
  newsletter: boolean,
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.");
  }

  const { error } = await supabase.from("demo_requests").insert({
    student_name: contact.name.trim() || null,
    email: contact.email.trim() || null,
    phone: contact.phone.trim() || null,
    subject: subjectLabel(contact.subject),
    father_name: demo.fatherName.trim() || null,
    father_occupation: demo.fatherOccupation.trim() || null,
    mother_name: demo.motherName.trim() || null,
    mother_occupation: demo.motherOccupation.trim() || null,
    student_grade: demo.gradeOrClass.trim() || null,
    city: demo.cityAndState.trim() || null,
    mother_tongue: demo.motherTongue.trim() || null,
    timezone: demo.timezone.trim() || null,
    siblings: demo.siblingsAndAge.trim() || null,
    referral_type: demo.promoOrReferral,
    referral_value: demo.promoReferralValue.trim() || null,
    newsletter,
  });

  if (error) throw error;
}

export async function insertFeedback(
  contact: Pick<ContactFormState, "name">,
  feedback: FeedbackFormState,
  newsletter: boolean,
): Promise<void> {
  const supabase = getSupabase();
  if (!supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.");
  }

  const { error } = await supabase.from("feedbacks").insert({
    parent_name: feedback.parentName.trim() || null,
    student_name: contact.name.trim() || null,
    course: feedback.course.trim() || null,
    rating: feedback.rating > 0 ? feedback.rating : null,
    message: feedback.message.trim() || null,
    email: feedback.email.trim() || null,
    news_letter: newsletter,
  });

  if (error) throw error;
}
