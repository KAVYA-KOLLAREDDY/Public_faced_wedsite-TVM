import { CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export type FormStatusVariant = "success" | "error";

export type FormStatusState = {
  variant: FormStatusVariant;
  title: string;
  message: string;
} | null;

type FormStatusModalProps = {
  status: FormStatusState;
  onClose: () => void;
};

const FormStatusModal = ({ status, onClose }: FormStatusModalProps) => {
  const open = Boolean(status);
  const isSuccess = status?.variant === "success";

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose();
      }}
    >
      <DialogContent className="max-w-md gap-0 overflow-hidden rounded-2xl border border-border bg-card p-0 shadow-xl sm:rounded-3xl">
        {status ? (
          <>
            <div className="relative px-6 pt-8 pb-5 text-center">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background: isSuccess
                    ? "linear-gradient(180deg, hsl(var(--teal) / 0.08), transparent)"
                    : "linear-gradient(180deg, hsl(var(--destructive) / 0.06), transparent)",
                }}
              />

              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="relative mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background: isSuccess
                    ? "hsl(var(--teal) / 0.12)"
                    : "hsl(var(--destructive) / 0.1)",
                  border: isSuccess
                    ? "1px solid hsl(var(--teal) / 0.25)"
                    : "1px solid hsl(var(--destructive) / 0.2)",
                }}
              >
                {isSuccess ? (
                  <CheckCircle2
                    className="h-7 w-7"
                    style={{ color: "hsl(var(--teal-dark))" }}
                    strokeWidth={1.75}
                  />
                ) : (
                  <XCircle
                    className="h-7 w-7"
                    style={{ color: "hsl(var(--destructive))" }}
                    strokeWidth={1.75}
                  />
                )}
              </motion.div>

              <DialogHeader className="relative space-y-2 text-center sm:text-center">
                <DialogTitle className="font-display text-2xl font-bold text-foreground">
                  {status.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed text-muted-foreground">
                  {status.message}
                </DialogDescription>
              </DialogHeader>
            </div>

            <DialogFooter className="border-t border-border bg-muted/30 px-6 py-4 sm:justify-center">
              <Button
                type="button"
                size="lg"
                onClick={onClose}
                className={
                  isSuccess
                    ? "w-full rounded-xl bg-primary text-primary-foreground hover:bg-navy-light sm:w-auto sm:min-w-[10rem]"
                    : "w-full rounded-xl sm:w-auto sm:min-w-[10rem]"
                }
              >
                {isSuccess ? "Done" : "Try again"}
              </Button>
            </DialogFooter>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusModal;
