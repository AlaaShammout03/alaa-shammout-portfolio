import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/link-button";
import { SectionShell } from "@/components/ui/section-shell";
import { siteConfig } from "@/data/site";

export function Resume() {
  return (
    <SectionShell
      id="resume"
      eyebrow="Resume"
      title="One page, updated October 2026"
      tone="white"
    >
      <Card className="p-6">
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          The Emagine internship, the permit automation at Sarmeen, and the
          EV charging, booking microservice, and CSRNet projects, as a PDF.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={siteConfig.resumeUrl} download icon="down">
            Download resume
          </LinkButton>
          <LinkButton
            href={siteConfig.resumeUrl}
            variant="secondary"
            icon="external"
            target="_blank"
            rel="noreferrer"
          >
            Open in browser
          </LinkButton>
        </div>
      </Card>
    </SectionShell>
  );
}
