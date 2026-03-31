import { forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { DISCOVER_PROGRAMS_HASH, discoverProgramsLink } from "@/lib/homeAnchors";

/**
 * Same destination as discoverProgramsLink, but when the user is already on
 * /#discover-programs, React Router would not navigate again — so we scroll
 * programmatically on click.
 */
export const DiscoverProgramsLink = forwardRef<
  HTMLAnchorElement,
  Omit<React.ComponentProps<typeof Link>, "to">
>(function DiscoverProgramsLink({ onClick, ...props }, ref) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (location.pathname === "/" && location.hash === `#${DISCOVER_PROGRAMS_HASH}`) {
      e.preventDefault();
      document.getElementById(DISCOVER_PROGRAMS_HASH)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return <Link ref={ref} to={discoverProgramsLink} onClick={handleClick} {...props} />;
});
