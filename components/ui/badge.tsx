import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-md border border-slate-200 bg-stone-50 px-3 py-1 text-sm text-slate-700",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
