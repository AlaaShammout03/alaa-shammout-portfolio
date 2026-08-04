import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";

export function Resume() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume"
      title="Download the resume"
      tone="white"
    >
      <Card className="p-6">
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Download a current PDF resume directly from the site, then use the
          contact links below to review GitHub, LinkedIn, or send a message.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={siteConfig.resumeUrl} download>
            Download resume
          </LinkButton>
          <LinkButton href="#contact" variant="secondary">
            Go to Contact
          </LinkButton>
        </div>
      </Card>
    </SectionShell>
  );
}
