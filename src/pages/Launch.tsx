import { useNavigate } from "react-router-dom";
import { LaunchExperience } from "@/components/launch/LaunchExperience";
import Index from "./Index";

/**
 * Ceremony URL: open /launch on a big screen for the reveal moment.
 * After both guests tap and curtains finish, we replace the URL with `/`.
 */
export default function Launch() {
  const navigate = useNavigate();

  return (
    <LaunchExperience alwaysShow onRevealed={() => navigate("/", { replace: true })}>
      <Index />
    </LaunchExperience>
  );
}
