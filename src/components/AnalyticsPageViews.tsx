import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/** Fires a GA page_view on every client-side route change. */
export function AnalyticsPageViews() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.pathname, location.search, location.hash]);

  return null;
}
