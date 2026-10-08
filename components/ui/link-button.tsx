import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: "arrow" | "down" | "external";
};

const variants = {
  primary:
    "bg-teal-700 text-white shadow-sm shadow-teal-950/10 hover:bg-teal-800 hover:shadow-md hover:shadow-teal-950/20",
  secondary:
    "border border-slate-300 bg-white text-slate-950 hover:border-slate-400 hover:bg-slate-50",
  ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
};

const icons = {
  arrow: { glyph: "→", motion: "group-hover/btn:translate-x-0.5" },
  down: { glyph: "↓", motion: "group-hover/btn:translate-y-0.5" },
  external: {
    glyph: "↗",
    motion: "group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5",
  },
};

export function LinkButton({
  children,
  className,
  variant = "primary",
  icon,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "group/btn inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon ? (
        <span
          aria-hidden="true"
          className={cn("transition-transform duration-200", icons[icon].motion)}
        >
          {icons[icon].glyph}
        </span>
      ) : null}
    </a>
  );
}
