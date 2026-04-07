import { memo, useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Country data with coordinates and names
const highlightedCountries = [
  { name: "India", coordinates: [78.9629, 20.5937] as [number, number], label: "India" },
  { name: "United Arab Emirates", coordinates: [53.8478, 23.4241] as [number, number], label: "UAE" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781] as [number, number], label: "UK" },
  { name: "United States of America", coordinates: [-95.7129, 37.0902] as [number, number], label: "USA" },
  { name: "Australia", coordinates: [133.7751, -25.2744] as [number, number], label: "Australia" },
];

// Arc lines from India to other countries
const indiaCoords: [number, number] = [78.9629, 20.5937];
const arcDestinations = highlightedCountries.filter(c => c.name !== "India");

const GlobalWorldMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [mapLayout, setMapLayout] = useState<"mobile" | "tablet" | "desktop">("mobile");

  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      if (w < 640) setMapLayout("mobile");
      else if (w < 1024) setMapLayout("tablet");
      else setMapLayout("desktop");
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const projectionConfig =
    mapLayout === "mobile"
      ? { scale: 110, center: [6, -42] as [number, number] }
      : mapLayout === "tablet"
        ? { scale: 110, center: [6, -42] as [number, number] }
        : { scale: 110, center: [6, -42] as [number, number] };

  const markerLabelSize = mapLayout === "mobile" ? 8 : 10;
  const lineStroke =
    mapLayout === "mobile" ? 1.25 : mapLayout === "tablet" ? 1.65 : 2;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative w-full overflow-hidden rounded-2xl border border-primary/15 ring-1 ring-primary/5 sm:rounded-3xl min-h-[280px] h-[min(72vw,340px)] sm:min-h-[380px] sm:h-[min(52vw,440px)] md:h-[min(440px,50vh)] md:max-h-[500px] lg:h-[480px]"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted) / 0.85))",
        boxShadow: "0 20px 60px hsl(var(--primary) / 0.15)",
      }}
    >
      {/* Depth + vignette (stronger on small screens for contrast) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40 sm:opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 45%, transparent 30%, hsl(var(--background) / 0.65) 100%)",
        }}
      />
      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.12), transparent 72%)",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={projectionConfig}
        className="relative z-0 block h-full w-full [&_svg]:block [&_svg]:h-full [&_svg]:max-h-full [&_svg]:w-full"
        style={{ width: "100%", height: "100%" }}
      >

        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const isHighlighted = highlightedCountries.some(
                (c) => c.name === countryName
              );

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={isHighlighted ? "hsl(var(--gold))" : "hsl(var(--muted))"}
                  stroke="hsl(var(--primary))"
                  strokeWidth={mapLayout === "mobile" ? 0.35 : 0.5}
                  style={{
                    default: {
                      outline: "none",
                      transition: "all 0.3s ease",
                    },
                    hover: {
                      fill: isHighlighted ? "hsl(var(--gold-light))" : "hsl(var(--muted))",
                      outline: "none",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: {
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>

        {/* Arc lines from India to other countries */}
        {arcDestinations.map((dest) => {
  const isTopArc = dest.name === "United States of America" || dest.name === "United Kingdom";

  return (
    <Line
      key={dest.name}
      from={indiaCoords}
      to={dest.coordinates}
      stroke="hsl(var(--teal))"
      strokeWidth={lineStroke}
      strokeLinecap="round"
      strokeDasharray="6 4"
      style={{
        pointerEvents: "none",
        transform: isTopArc ? "translateY(4px)" : "none",
      }}
    />
  );
})}



        {/* Markers for each highlighted country */}
        {highlightedCountries.map((country) => (
          <Marker key={country.name} coordinates={country.coordinates}>
            <g>
              {/* Pulse ring animation */}
              <circle
                r={mapLayout === "mobile" ? 6 : 8}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={mapLayout === "mobile" ? 1.5 : 2}
                opacity={0.4}
              >
                <animate
                  attributeName="r"
                  from={mapLayout === "mobile" ? "5" : "6"}
                  to={mapLayout === "mobile" ? "11" : "14"}
                  dur="1.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              {/* Main marker dot */}
              <circle
                r={mapLayout === "mobile" ? 4.5 : 6}
                fill="hsl(var(--primary))"
                stroke="hsl(var(--background))"
                strokeWidth={mapLayout === "mobile" ? 1.5 : 2}
                style={{ cursor: "pointer" }}
              />
              {/* Country label */}
              <text
                textAnchor="middle"
                y={mapLayout === "mobile" ? -11 : -14}
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  fill: "hsl(var(--foreground))",
                  fontSize: markerLabelSize,
                  fontWeight: 600,
                  textShadow: "0 1px 0 hsl(var(--background)), 0 0 8px hsl(var(--background) / 0.9)",
                }}
              >
                {country.label}
              </text>
            </g>
            <title>Tiny Vivid Minds: Empowering students in {country.label}!</title>
          </Marker>
        ))}
      </ComposableMap>

      {/* Mobile / small-screen legend — readable when map is dense */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] md:hidden">
        <div
          className="bg-gradient-to-t from-background via-background/92 to-transparent px-3 pb-3 pt-10 sm:px-4 sm:pb-4"
        >
          <p className="text-center font-display text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
            Our learning network
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5">
            {highlightedCountries.map((c) => (
              <span
                key={c.name}
                className="inline-flex items-center gap-1 rounded-full border border-gold/25 bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground shadow-sm backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="pointer-events-none absolute top-4 left-4 z-[1] h-16 w-16 rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-xl" />
      <div className="pointer-events-none absolute bottom-24 right-4 z-[1] h-20 w-20 rounded-full bg-gradient-to-br from-teal/25 to-transparent blur-xl md:bottom-4" />
    </motion.div>
  );
};

export default memo(GlobalWorldMap);
