import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun, LogIn, Calculator, Brain, GraduationCap } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const courseLinks = [
  { name: "Abacus", path: "/courses/abacus", icon: Calculator, accent: "gold" },
  { name: "Vedic Maths", path: "/courses/vedic-math", icon: Brain, accent: "teal" },
  { name: "Essential Learnings", path: "/courses/signature-programs", icon: GraduationCap, accent: "navy" },
];

interface NavbarProps {
  transparent?: boolean;
}

export const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  // Determine navbar background based on scroll and transparent prop
  const getNavbarBackground = () => {
    if (transparent && !scrolled) {
      return "bg-transparent py-4";
    }
    return "bg-background/95 backdrop-blur-md shadow-lg py-2";
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        getNavbarBackground()
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
  <div className="h-16 flex items-center">
    <img
      src={logo}
      alt="Tiny Vivid Minds Logo"
      className="h-20 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
    />
  </div>
</Link>



          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-semibold transition-colors duration-300 hover:text-vedic-gold group",
                  location.pathname === link.path
                    ? "text-vedic-gold"
                    : transparent && !scrolled ? "text-white/90" : "text-foreground/80"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-vedic-gold transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}

            {/* Courses Dropdown */}
            <DropdownMenu open={coursesOpen} onOpenChange={setCoursesOpen} modal={false}>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-1 font-semibold transition-colors duration-300 hover:text-vedic-gold group",
                    location.pathname.includes("/courses")
                      ? "text-vedic-gold"
                      : transparent && !scrolled ? "text-white/90" : "text-foreground/80"
                  )}
                >
                  Courses
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", coursesOpen && "rotate-180")} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                sideOffset={8}
                onOpenAutoFocus={(e) => e.preventDefault()}
                className="min-w-[220px] z-[100] rounded-xl border border-gold/20 bg-card/95 backdrop-blur-xl shadow-xl shadow-gold/10 py-1.5 data-[state=open]:animate-in data-[state=closed]:animate-out"
              >
                {courseLinks.map((course) => (
                  <DropdownMenuItem key={course.name} asChild className="border-0 outline-none focus:bg-transparent">
                    <Link
                      to={course.path}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 mx-1 rounded-lg cursor-pointer font-medium transition-all duration-200",
                        "hover:bg-gold/10 hover:text-foreground focus:bg-gold/10 focus:text-foreground",
                        "border-2 border-transparent hover:border-gold focus:border-gold",
                        course.accent === "gold" && "[&>svg]:text-gold",
                        course.accent === "teal" && "[&>svg]:text-vedic-teal hover:[&>svg]:text-vedic-teal",
                        course.accent === "navy" && "[&>svg]:text-navy dark:[&>svg]:text-gold"
                      )}
                    >
                      <course.icon className="w-4 h-4 shrink-0 transition-colors" />
                      <span>{course.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-semibold transition-colors duration-300 hover:text-vedic-gold group",
                  location.pathname === link.path
                    ? "text-vedic-gold"
                    : transparent && !scrolled ? "text-white/90" : "text-foreground/80"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-vedic-gold transition-all duration-300",
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full transition-all duration-300 hover:bg-vedic-gold/20",
                transparent && !scrolled ? "text-white" : "text-foreground"
              )}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Login Icon */}
            {/* <Link
              to="/contact"
              className={cn(
                "p-2 rounded-full transition-all duration-300 hover:bg-vedic-gold/20 hover:text-vedic-gold",
                scrolled ? "text-foreground" : "text-white"
              )}
              aria-label="Login"
            >
              <LogIn className="w-5 h-5" />
            </Link> */}

            {/* CTA Button */}
            <Button 
              asChild
              className="bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-semibold hover:shadow-lg hover:shadow-vedic-gold/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link to="/contact#contact-form">Book Free Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
                transparent && !scrolled ? "text-white hover:text-vedic-gold" : "text-foreground hover:text-vedic-gold"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-4 space-y-2 border border-vedic-gold/20">
            {navLinks.slice(0, 2).map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 px-4 rounded-xl transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-vedic-gold/20 text-vedic-gold"
                    : "text-foreground/80 hover:bg-vedic-gold/10 hover:text-vedic-gold"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Courses Section */}
            <div className="py-2 px-4">
              <span className="text-sm font-semibold text-vedic-gold mb-2 block">Courses</span>
              <div className="space-y-1 pl-2">
                {courseLinks.map((course) => (
                  <Link
                    key={course.name}
                    to={course.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 py-2 px-3 rounded-lg text-foreground/70 hover:bg-vedic-gold/10 hover:text-vedic-gold transition-colors"
                  >
                    <course.icon className="w-4 h-4 text-vedic-gold" />
                    <span>{course.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block py-3 px-4 rounded-xl transition-all duration-300",
                  location.pathname === link.path
                    ? "bg-vedic-gold/20 text-vedic-gold"
                    : "text-foreground/80 hover:bg-vedic-gold/10 hover:text-vedic-gold"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 flex items-center gap-3 px-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-vedic-gold/10 text-vedic-gold"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-vedic-gold/10 text-vedic-gold"
              >
                <LogIn className="w-5 h-5" />
              </Link>
            </div>

            <div className="pt-2 px-4">
              <Button 
                asChild
                className="w-full bg-gradient-to-r from-vedic-gold to-vedic-gold-light text-vedic-navy font-semibold"
              >
                <Link to="/contact#contact-form" onClick={() => setIsOpen(false)}>Book Free Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
