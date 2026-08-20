import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

createRoot(root).render(<App />);

/**
 * Hide HTML splash only after React has mounted into #root.
 * No minimum display time — only waits for the app shell to paint,
 * then fades out (400ms is CSS fade cleanup, not a forced wait before content).
 */
const hideSplash = () => {
  const splash = document.getElementById("app-splash");
  if (!splash) return;
  splash.classList.add("is-hidden");
  window.setTimeout(() => splash.remove(), 400);
};

// Wait until the browser has painted React's first frame
requestAnimationFrame(() => {
  requestAnimationFrame(hideSplash);
});
