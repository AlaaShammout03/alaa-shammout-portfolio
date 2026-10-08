export type ExperienceRole = {
  slug: string;
  company: string;
  title: string;
  dates: string;
  location: string;
  body: string[];
  tech: string[];
  linkUrl?: string;
  linkLabel?: string;
};

export const experience: ExperienceRole[] = [
  {
    slug: "emagine",
    company: "Emagine Solutions",
    title: "Software Engineering Intern",
    dates: "August to October 2026",
    location: "Dubai, UAE",
    body: [
      "Emagine is an EV charging company, and it also sponsored my capstone, the EV charging platform below. I built its WattsWhere website from the CEO's Figma design: 19 pages in Next.js, React, TypeScript, and Tailwind CSS, shipped to production through GitLab merge requests on a two-person engineering team, using Claude Code.",
      "The CEO asked me for a content control panel so non-technical staff could update the site without a developer. When I raised it with the Head of Software Engineering, he didn't want the extra load on his server. I researched a lighter design and pitched it back to the CEO: a text-only panel, because making images editable too would have made it heavy. Both of them approved it. I built it on Drizzle ORM and SQLite, with two-factor sign-in through Better Auth, user roles, and a preview step before anything is published.",
      "I also ran two full technical audits of the site and fixed each finding as its own commit. Two of them: contact forms that showed a success message while sending nothing, now wired to the company's leads system, and a charger map that crashed on a single malformed record, which now skips bad records instead.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "Drizzle ORM",
      "SQLite",
      "GitLab",
      "Claude Code",
    ],
    linkUrl: "https://watts-where.com",
    linkLabel: "Visit watts-where.com",
  },
  {
    slug: "sarmeen",
    company: "Sarmeen General Transport",
    title: "Operations Assistant",
    dates: "June to August 2026",
    location: "Dubai, UAE",
    body: [
      "I automated UAE permit data entry with an AutoHotkey script for the repeated fields and on-device OCR for passport details, cutting 2 to 3 minutes per permit and removing the main source of transcription error.",
      "I processed more than 1,200 UAE entry permits with a single error across the full volume, in a workflow where one incorrect field cost AED 600 to refile.",
      "I also introduced an AI-assisted extraction workflow that converted 20 to 50 paper invoices a day into formatted Excel records in under a minute, removing manual entry.",
    ],
    tech: [
      "AutoHotkey",
      "On-device OCR",
      "AI-assisted extraction",
      "Excel automation",
    ],
  },
];
