import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-lg border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.03]",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
