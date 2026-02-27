import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to top whenever the route (pathname) changes.
 * Place inside BrowserRouter so navigation always starts at the top of the page.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
