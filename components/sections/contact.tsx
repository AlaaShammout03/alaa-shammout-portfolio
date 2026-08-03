import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";

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
          The fastest way to reach me is by email. GitHub and LinkedIn are
          included to review code, project context, and professional
          background.
        </p>
        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="group flex flex-col gap-1 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <span className="text-sm font-semibold text-slate-950 transition group-hover:text-teal-800 group-hover:underline">
                {item.label}
              </span>
              <span className="text-right text-sm text-slate-600 transition group-hover:text-teal-800">
                {item.value}
              </span>
            </a>
          ))}
        </div>
      </Card>
    </SectionShell>
  );
}
