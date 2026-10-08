import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/AlaaShammout03",
    href: siteConfig.githubUrl,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alaa-shammout03",
    href: siteConfig.linkedinUrl,
  },
];

export function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Get in touch"
    >
      <Card className="p-6">
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          I&apos;m looking for software engineering roles in the UAE. I&apos;m
          based in Dubai and hold a UAE Golden Visa, so no visa sponsorship is
          needed, and I can start immediately. Email is the fastest way to
          reach me.
        </p>
        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group flex flex-col gap-1 rounded-sm py-3 transition-colors hover:bg-slate-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <span className="text-sm font-semibold text-slate-950 transition group-hover:text-teal-800 group-hover:underline">
                {item.label}
              </span>
              <span className="flex items-center gap-2 text-sm text-slate-600 transition group-hover:text-teal-800 sm:text-right">
                {item.value}
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-block text-slate-400 transition-[transform,color] duration-200 group-hover:text-teal-700",
                    item.href.startsWith("mailto:")
                      ? "group-hover:translate-x-0.5"
                      : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  )}
                >
                  {item.href.startsWith("mailto:") ? "→" : "↗"}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Card>
    </SectionShell>
  );
}
