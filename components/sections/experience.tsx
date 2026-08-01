import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionShell } from "@/components/ui/section-shell";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Operations work that turned into an automation project"
    >
      <Card>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold text-slate-950">
            Operations Assistant, Sarmeen General Transport
          </h3>
          <span className="text-sm text-slate-500">
            June 2026 – July 2026 · Dubai, UAE
          </span>
        </div>
        <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
          <p>
            Government entry permits were processed largely by hand, and one
            incorrect field cost AED 600 to refile. The GDRFA portal blocked
            clipboard paste on its input fields, so the obvious fix, copying
            data in, was not available. I wrote an AutoHotkey script to handle
            the repeated fields and added local on-device OCR to extract
            passport details instead of retyping them, cutting 2-3 minutes per
            permit and removing the main source of transcription error. Across
            more than 1,000 permits processed, that held the error count to
            one.
          </p>
          <p>
            I also built an AI-assisted extraction workflow that turned 20-50
            paper invoices a day into formatted Excel records in under a
            minute, removing manual entry.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge>AutoHotkey</Badge>
          <Badge>On-device OCR</Badge>
          <Badge>AI-assisted extraction</Badge>
          <Badge>Excel automation</Badge>
        </div>
      </Card>
    </SectionShell>
  );
}
