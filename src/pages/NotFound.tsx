import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-muted px-4 py-8">
      <div className="text-center max-w-md w-full">
        <h1 className="mb-3 sm:mb-4 text-5xl sm:text-6xl font-bold font-display">404</h1>
        <p className="mb-4 text-base sm:text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="inline-block text-primary underline hover:text-primary/90 text-sm sm:text-base">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
