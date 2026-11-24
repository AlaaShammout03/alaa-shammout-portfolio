// Mirrors the PDF in public/resume, section for section. When the PDF
// changes, update this file and `updated` to match.

export type ResumeEntry = {
  title: string;
  subtitle: string;
  dates: string;
  context?: string;
  bullets: string[];
  linkUrl?: string;
  linkLabel?: string;
  caseStudySlug?: string;
};

export const resume = {
  updated: "November 2026",
  location: "Dubai, UAE",
  summary:
    "Computer Engineering graduate from the American University of Sharjah who completed a software engineering internship at Emagine Solutions, building the company's live 19-page Next.js website. Built React frontends on a FastAPI backend for an industry-sponsored capstone, a Spring Boot microservice deployed to Azure, and automation that a logistics company adopted into daily operations. UAE Golden Visa holder, so no sponsorship is required. Available immediately.",
  education: {
    school: "American University of Sharjah",
    location: "Sharjah, UAE",
    degree: "Bachelor of Science in Computer Engineering",
    dates: "Jun 2026",
    coursework:
      "Data Structures & Algorithms, Operating Systems, Computer Networks, Computer Vision",
  },
  experience: [
    {
      title: "Emagine Solutions",
      subtitle: "Software Engineering Intern · Dubai, UAE",
      dates: "Aug 2026 to Oct 2026",
      bullets: [
        "Built the company's WattsWhere website from the CEO's Figma design in Next.js, React, TypeScript and Tailwind CSS: 19 pages delivered through GitLab merge requests to production at watts-where.com, using Claude Code on a two-person engineering team.",
        "Designed a text-only content control panel after an earlier proposal was rejected over server load, won approval from both the CEO and the Head of Software Engineering, and built it with Better Auth two-factor sign-in, user roles, and preview and publish on Drizzle ORM and SQLite.",
        "Ran two full technical audits and fixed each finding as a separate commit, including contact forms that showed a success message while sending nothing (now wired to the company's leads system) and a charger map that crashed on one malformed record (now skips bad records).",
      ],
      linkUrl: "https://watts-where.com",
      linkLabel: "watts-where.com",
    },
    {
      title: "Sarmeen General Transport",
      subtitle: "Operations Assistant · Dubai, UAE",
      dates: "Jun 2026 to Aug 2026",
      bullets: [
        "Automated UAE permit data entry with an AutoHotkey script for repeated fields and on-device OCR for passport details, cutting 2-3 minutes per permit and removing the main source of transcription error.",
        "Processed 1,200+ UAE entry permits with a single error across the full volume, in a workflow where one incorrect field cost AED 600 to refile.",
        "Introduced an AI-assisted extraction workflow that converted 20-50 daily paper invoices into formatted Excel records in under a minute, removing manual entry.",
      ],
    },
  ] satisfies ResumeEntry[],
  projects: [
    {
      title: "AI-Powered EV Charging Support Platform",
      subtitle: "Lead Frontend Developer",
      dates: "Sep 2025 to May 2026",
      context:
        "Industry-sponsored capstone for Emagine Solutions · 4-person team · weekly technical reviews with their software lead",
      bullets: [
        "Led frontend for two React and Tailwind apps, a customer portal and an operator dashboard, integrated with a FastAPI and PostgreSQL backend across 80+ REST endpoints with JWT and OTP authentication.",
        "Built the operator dashboard on live IoT telemetry: AI-classified tickets with confidence scores, predictive maintenance alerts, and a fleet incident mode triggering on threshold breach.",
        "Designed a Smart Route feature on the Mapbox Directions API routing drivers to underused chargers via live traffic, with drive/wait/charge estimates and points-based incentives to shift demand off congested stations.",
      ],
      caseStudySlug: "ev-charging-support-platform",
    },
    {
      title: "Cloud-Native Booking Microservice",
      subtitle: "Java, Spring Boot, PostgreSQL, Azure · 4-person team",
      dates: "Mar 2026 to May 2026",
      bullets: [
        "Built one of four microservices in Java 21 and Spring Boot: 8 REST endpoints for creation, rescheduling, cancellation and history, with JWT-scoped access and PostgreSQL via Spring Data JPA.",
        "Enforced integrity with interval-overlap conflict detection, duration and daily limits, and operating-hours checks called over REST against a teammate's resource service; added PostgreSQL advisory locks against double-booking and deployed to Azure App Service.",
      ],
      caseStudySlug: "urbanspace-booking-service",
    },
    {
      title: "Crowd Counting with Deep Learning",
      subtitle: "CSRNet, PyTorch · 3-person team",
      dates: "Mar 2026 to May 2026",
      bullets: [
        "Re-implemented CSRNet (VGG-16 frontend, dilated backend) in PyTorch on ShanghaiTech with geometry-adaptive k-NN density maps; test MAE 18.01 Part B, 106.11 Part A, ahead of 2 of 4 published baselines on MAE.",
      ],
      caseStudySlug: "csrnet-crowd-counting",
    },
  ] satisfies ResumeEntry[],
  skills: [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C", "C++"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      items: [
        "Node.js",
        "FastAPI",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
        "Drizzle ORM",
        "SQLite",
      ],
    },
    {
      title: "Cloud & Tools",
      items: [
        "Docker",
        "Azure",
        "Vercel",
        "Git",
        "GitLab",
        "Linux/Bash",
        "Figma",
        "Postman",
        "Claude Code",
      ],
    },
    {
      title: "AI & ML",
      items: ["AI Agent Development", "MCP", "PyTorch", "OpenCV"],
    },
    {
      title: "Spoken Languages",
      items: ["Arabic (Native)", "English (Fluent)", "Turkish (Intermediate)"],
    },
  ],
};
