import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import {
  DEFAULT_PHONE_COUNTRY_ID,
  digitsOnlyPhone,
  formatNationalAsYouType,
  getNationalMaxDigits,
  getPhoneCountryById,
  PHONE_COUNTRY_OPTIONS,
  type PhoneCountryOption,
} from "@/config/phoneCountries";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";

type PhoneWithCountryInputProps = {
  id: string;
  label: string;
  /** ISO country id (e.g. "IN"), not the dial code */
  countryId: string;
  /** Digits only (no formatting) — parent state */
  nationalNumber: string;
  onCountryIdChange: (countryId: string) => void;
  onNationalNumberChange: (value: string) => void;
  /** Called when the user types letters/symbols so we can show an inline hint. */
  onNonDigitAttempt?: () => void;
  required?: boolean;
  error?: string;
};

function CountryFlag({ countryId, label, className }: { countryId: string; label: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const src = `https://flagcdn.com/w40/${countryId.toLowerCase()}.png`;

  if (failed) {
    return (
      <span
        className={cn(
          "inline-flex h-4 w-5 shrink-0 items-center justify-center rounded-[2px] bg-muted text-[10px] font-semibold text-muted-foreground",
          className,
        )}
        aria-hidden
      >
        ··
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      width={20}
      height={14}
      loading="lazy"
      className={cn("h-3.5 w-5 shrink-0 rounded-[2px] object-cover", className)}
      onError={() => setFailed(true)}
      aria-hidden
      title={label}
    />
  );
}

const CONTROL_KEYS = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
]);

const PhoneWithCountryInput = ({
  id,
  label,
  countryId,
  nationalNumber,
  onCountryIdChange,
  onNationalNumberChange,
  onNonDigitAttempt,
  required = false,
  error,
}: PhoneWithCountryInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [open, setOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const hasError = Boolean(error);
  const selected = getPhoneCountryById(countryId || DEFAULT_PHONE_COUNTRY_ID);
  const maxDigits = getNationalMaxDigits(selected.id);
  const displayValue = formatNationalAsYouType(selected.id, nationalNumber);
  const isActive = isFocused || displayValue.length > 0 || Boolean(selected.code);

  const options = useMemo(() => PHONE_COUNTRY_OPTIONS, []);

  const borderColor = hasError
    ? "hsl(var(--destructive))"
    : isFocused || open
      ? "hsl(var(--primary))"
      : "hsl(var(--border))";
  const focusRing =
    isFocused || open
      ? hasError
        ? "0 0 0 3px hsl(var(--destructive) / 0.12)"
        : "0 0 0 3px hsl(var(--primary) / 0.08)"
      : "none";

  const pickCountry = (country: PhoneCountryOption) => {
    const nextMax = getNationalMaxDigits(country.id);
    onCountryIdChange(country.id);
    onNationalNumberChange(digitsOnlyPhone(nationalNumber, nextMax));
    setCountrySearch("");
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full rounded-md bg-transparent transition-all duration-300"
        style={{
          border: `1px solid ${borderColor}`,
          boxShadow: focusRing,
        }}
      >
        <Popover
          open={open}
          onOpenChange={(next) => {
            setOpen(next);
            if (next) setCountrySearch("");
          }}
          modal={false}
        >
          <PopoverTrigger asChild>
            <button
              type="button"
              aria-label={`Country: ${selected.label}`}
              className="relative z-20 flex shrink-0 items-center gap-1.5 rounded-l-md border-r border-border bg-muted/40 py-2 pl-2.5 pr-7 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted/60"
              onClick={(e) => {
                // Ensure reopening works even after the phone input was focused
                e.stopPropagation();
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                if (!open) setIsFocused(false);
              }}
            >
              <CountryFlag countryId={selected.id} label={selected.label} />
              <span className="tabular-nums">{selected.code}</span>
              <ChevronDown className="pointer-events-none absolute right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            className="z-50 w-[min(100vw-2rem,20rem)] p-0"
            align="start"
            sideOffset={6}
          >
            <Command
              filter={(value, search) => {
                const q = search.trim().toLowerCase();
                if (!q) return 1;
                return value.toLowerCase().includes(q) ? 1 : 0;
              }}
            >
              <CommandInput
                placeholder="Search country..."
                value={countrySearch}
                onValueChange={setCountrySearch}
              />
              <CommandList className="max-h-64">
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {options.map((country) => (
                    <CommandItem
                      key={country.id}
                      value={`${country.label} ${country.code}`}
                      onSelect={() => pickCountry(country)}
                      className="cursor-pointer gap-2"
                    >
                      <CountryFlag countryId={country.id} label={country.label} />
                      <span className="min-w-0 flex-1 truncate">{country.label}</span>
                      <span className="shrink-0 tabular-nums text-muted-foreground">{country.code}</span>
                      <Check
                        className={cn(
                          "h-4 w-4 shrink-0 text-primary",
                          selected.id === country.id ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        <div className="relative z-0 min-w-0 flex-1 overflow-hidden rounded-r-md">
          <input
            id={id}
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            value={displayValue}
            onKeyDown={(e) => {
              if (e.ctrlKey || e.metaKey || e.altKey) return;
              if (CONTROL_KEYS.has(e.key)) return;
              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
                onNonDigitAttempt?.();
                return;
              }
              if (nationalNumber.length >= maxDigits) {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              const raw = e.target.value;
              if (/[^\d\s()\-+./]/.test(raw)) {
                onNonDigitAttempt?.();
              }
              onNationalNumberChange(digitsOnlyPhone(raw, maxDigits));
            }}
            onPaste={(e) => {
              e.preventDefault();
              const pasted = e.clipboardData.getData("text");
              if (/[^\d\s()\-+./]/.test(pasted) && /\D/.test(pasted.replace(/[\s()\-+./]/g, ""))) {
                onNonDigitAttempt?.();
              }
              onNationalNumberChange(digitsOnlyPhone(pasted, maxDigits));
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={false}
            aria-required={required}
            aria-invalid={hasError}
            aria-describedby={error ? `${id}-error` : undefined}
            className="w-full bg-transparent px-2.5 py-2 pt-5 text-base outline-none"
            placeholder=" "
          />
          <label
            htmlFor={id}
            className="pointer-events-none absolute left-2.5 z-[1] bg-card px-1 transition-all duration-200"
            style={{
              top: isActive ? "2px" : "50%",
              transform: isActive ? "none" : "translateY(-50%)",
              fontSize: isActive ? "12px" : "14px",
              color: hasError
                ? "hsl(var(--destructive))"
                : isFocused
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted-foreground))",
            }}
          >
            {label}
            {required && <span className="ml-0.5 text-destructive">*</span>}
          </label>
        </div>
      </div>

      {error ? (
        <p id={`${id}-error`} className="mt-1 px-0.5 text-xs text-destructive" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default PhoneWithCountryInput;
