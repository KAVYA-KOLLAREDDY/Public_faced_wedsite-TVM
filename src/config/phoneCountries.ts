import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  isValidPhoneNumber,
  Metadata,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";
import examples from "libphonenumber-js/mobile/examples";

export type PhoneCountryOption = {
  id: CountryCode;
  code: string;
  label: string;
  flag: string;
};

/** Absolute E.164 ceiling — prefer getNationalMaxDigits(country) for input caps. */
export const PHONE_NATIONAL_MAX_DIGITS = 15;

export const DEFAULT_PHONE_COUNTRY_ID: CountryCode = "IN";

function flagEmoji(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}

const regionNames =
  typeof Intl !== "undefined" ? new Intl.DisplayNames(["en"], { type: "region" }) : null;

function countryLabel(id: CountryCode): string {
  const name = regionNames?.of(id);
  // Avoid falling back to bare ISO codes like "IN" / "AX" in the UI
  if (name && name.toUpperCase() !== id.toUpperCase()) return name;
  return id;
}

/** All dialable countries from libphonenumber-js, sorted by English name. */
export const PHONE_COUNTRY_OPTIONS: PhoneCountryOption[] = getCountries()
  .map((id) => ({
    id,
    code: `+${getCountryCallingCode(id)}`,
    label: countryLabel(id),
    flag: flagEmoji(id),
  }))
  .sort((a, b) => a.label.localeCompare(b.label, "en"));

export type PhoneCountryId = CountryCode;

export function getPhoneCountryById(id: string): PhoneCountryOption {
  return (
    PHONE_COUNTRY_OPTIONS.find((c) => c.id === id) ??
    PHONE_COUNTRY_OPTIONS.find((c) => c.id === DEFAULT_PHONE_COUNTRY_ID)!
  );
}

/**
 * Max national digits for the selected country (mobile example length when available).
 * Stops users typing past what that country uses.
 */
export function getNationalMaxDigits(countryId: string): number {
  const country = getPhoneCountryById(countryId).id;

  try {
    const example = getExampleNumber(country, examples);
    if (example?.nationalNumber) {
      return example.nationalNumber.length;
    }
  } catch {
    // fall through
  }

  try {
    const meta = new Metadata();
    meta.selectNumberingPlan(country);
    const lengths = meta.numberingPlan?.possibleLengths();
    if (lengths?.length) return Math.max(...lengths);
  } catch {
    // fall through
  }

  return PHONE_NATIONAL_MAX_DIGITS;
}

export function digitsOnlyPhone(value: string, maxDigits = PHONE_NATIONAL_MAX_DIGITS): string {
  return value.replace(/\D/g, "").slice(0, maxDigits);
}

/**
 * Format national digits as the user types, using the selected country's pattern
 * (e.g. IN → "98765 43210", US → "(202) 555-0123").
 */
export function formatNationalAsYouType(countryId: string, nationalDigits: string): string {
  const max = getNationalMaxDigits(countryId);
  const digits = digitsOnlyPhone(nationalDigits, max);
  if (!digits) return "";
  const country = getPhoneCountryById(countryId).id;
  return new AsYouType(country).input(digits);
}

/** Format as E.164 when possible (e.g. +919876543210). */
export function formatPhoneWithCountry(countryId: string, nationalNumber: string): string {
  const max = getNationalMaxDigits(countryId);
  const digits = digitsOnlyPhone(nationalNumber, max);
  if (!digits) return "";

  const country = getPhoneCountryById(countryId).id;
  const parsed = parsePhoneNumberFromString(digits, country);
  if (parsed) return parsed.format("E.164");

  const { code } = getPhoneCountryById(countryId);
  return `${code}${digits}`;
}

export function isValidContactPhone(countryId: string, nationalNumber: string): boolean {
  const max = getNationalMaxDigits(countryId);
  const digits = digitsOnlyPhone(nationalNumber, max);
  if (!digits) return false;
  const country = getPhoneCountryById(countryId).id;
  return isValidPhoneNumber(digits, country);
}
