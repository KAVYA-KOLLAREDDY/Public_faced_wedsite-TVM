import { memo } from "react";
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

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative w-full rounded-3xl overflow-hidden max-h-[500px]"
      style={{
        background: "linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))",
        boxShadow: "0 20px 60px hsl(var(--primary) / 0.15)",
      }}
    >
      {/* Decorative gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.1), transparent 70%)",
        }}
      />

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 110,
          center: [6, -42],
        }}
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
                  strokeWidth={0.5}
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
      strokeWidth={2}
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
                r={8}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                opacity={0.4}
              >
                <animate
                  attributeName="r"
                  from="6"
                  to="14"
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
                r={6}
                fill="hsl(var(--primary))"
                stroke="hsl(var(--background))"
                strokeWidth={2}
                style={{ cursor: "pointer" }}
              />
              {/* Country label */}
              <text
                textAnchor="middle"
                y={-14}
                style={{
                  fontFamily: "var(--font-display), system-ui, sans-serif",
                  fill: "hsl(var(--foreground))",
                  fontSize: 10,
                  fontWeight: 600,
                  textShadow: "0 1px 2px hsl(var(--background))",
                }}
              >
                {country.label}
              </text>
            </g>
            <title>Tiny Vivid Minds: Empowering students in {country.label}!</title>
          </Marker>
        ))}
      </ComposableMap>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
      <div className="absolute bottom-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-teal/20 to-transparent blur-xl" />
    </motion.div>
  );
};

export default memo(GlobalWorldMap);
