"use client";

import { useState } from "react";
import { buttonClassName, LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/data/site";

export function ResumeActions() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;

    // Phones get the native share sheet; desktops get the link copied.
    if (navigator.share && window.matchMedia("(pointer: coarse)").matches) {
      await navigator
        .share({ title: `${siteConfig.name}, resume`, url })
        .catch(() => {});
      return;
    }

    await navigator.clipboard.writeText(url).catch(() => {});
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <LinkButton href={siteConfig.resumeUrl} download icon="down">
        Download PDF
      </LinkButton>
      <button
        type="button"
        onClick={share}
        className={buttonClassName("secondary")}
        aria-live="polite"
      >
        {copied ? "Link copied" : "Share"}
      </button>
      <button
        type="button"
        onClick={() => window.print()}
        className={buttonClassName("ghost", "hidden sm:inline-flex")}
      >
        Print
      </button>
    </div>
  );
}
