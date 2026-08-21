/**
 * Single source of truth for countries highlighted on the global map and
 * referenced in marketing copy (counts, hero stats, etc.).
 *
 * `name` must match `geo.properties.name` from world-atlas `countries-110m.json`
 * so geography highlighting works.
 */
export type HighlightedCountry = {
  name: string;
  coordinates: [number, number];
  label: string;
};

export const HIGHLIGHTED_COUNTRIES: HighlightedCountry[] = [
  { name: "India", coordinates: [78.9629, 20.5937], label: "India" },
  { name: "United Arab Emirates", coordinates: [53.8478, 23.4241], label: "UAE" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], label: "UK" },
  { name: "United States of America", coordinates: [-95.7129, 37.0902], label: "USA" },
  { name: "Finland", coordinates: [25.7482, 61.9241], label: "Finland" },
  { name: "South Africa", coordinates: [22.9375, -30.5595], label: "South Africa" },
  { name: "Australia", coordinates: [133.7751, -25.2744], label: "Australia" },
];

/** Number of highlighted countries (keeps UI in sync with the array). */
export const HIGHLIGHTED_COUNTRY_COUNT = HIGHLIGHTED_COUNTRIES.length;
