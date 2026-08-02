import { projects } from "@/data/projects";

export type CaseStudySection = {
  title: string;
  body: string[];
};

export type CaseStudy = {
  slug: string;
  challenge: string;
  outcome: string;
  sections: CaseStudySection[];
  visualPlan: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ev-charging-support-platform",
    challenge:
      "EV charging support requires customer-facing reporting, operator triage, charger visibility, telemetry review, route assistance, and AI/ML outputs to work together without exposing private operational data.",
    outcome:
      "The public case study focuses on the product workflows, frontend leadership, API integration work, and sanitized system design rather than private source code or sponsor-specific details.",
    sections: [
      {
        title: "Role and scope",
        body: [
          "I worked as Lead Frontend Developer on the company-sponsored senior design project.",
          "My focus was building the customer-facing support experience and operator dashboard flows that made ticket reporting, charger monitoring, telemetry review, AI-assisted triage, and route assistance usable from the browser.",
        ],
      },
      {
        title: "Technical approach",
        body: [
          "The frontend was built with React and Tailwind CSS and integrated REST APIs backed by FastAPI and PostgreSQL-backed services.",
          "The UI was structured around clear support workflows: report a charging issue, review ticket context, inspect charger state, view telemetry, surface AI/ML outputs, and support route-assistance decisions through Mapbox Directions API integration.",
        ],
      },
      {
        title: "Public-safe presentation",
        body: [
          "Because the project was company-sponsored, the portfolio should not include private repository links, real tickets, charger identifiers, exact API shapes, customer data, sponsor-only architecture details, or production telemetry.",
          "Screenshots and diagrams should be sanitized before publishing and should use generic labels, blurred or sample data, and public-safe workflow descriptions.",
        ],
      },
    ],
    visualPlan: [
      "Sanitized dashboard screenshot with generic charger and ticket labels.",
      "Workflow diagram showing customer report to operator triage to resolution.",
      "High-level architecture diagram using generic service names only.",
    ],
  },
  {
    slug: "urbanspace-booking-service",
    challenge:
      "A booking microservice for a shared urban-resource platform needs to guarantee that a reservation slot can only be confirmed once, even when two requests for that slot arrive at nearly the same time.",
    outcome:
      "The service enforces booking rules and slot exclusivity across eight REST endpoints, with conflict handling backed by PostgreSQL advisory locks after application-level checks alone proved insufficient, deployed to Azure App Service.",
    sections: [
      {
        title: "Role and scope",
        body: [
          "I built one of four microservices for the platform, a four-person team project split by service ownership. My service handled the booking lifecycle: creating, rescheduling, cancelling, and viewing active and historical reservations, exposed over eight REST endpoints with JWT-scoped access.",
          "Reservations were persisted in PostgreSQL through Spring Data JPA using Java 21 and Spring Boot. The service enforced duration limits, daily limits, and operating hours, checking hours by calling out over REST to a teammate's resource service rather than duplicating that data locally.",
        ],
      },
      {
        title: "Finding the double booking",
        body: [
          "The application-level checks already caught interval overlaps: two requests with obviously conflicting times got rejected. During testing, I submitted two overlapping bookings for the same slot at nearly the same time, and both came back confirmed. Checking for conflicts in application code wasn't enough once two requests were actually racing each other.",
        ],
      },
      {
        title: "Moving conflict handling into the database",
        body: [
          "Fixing it meant conflict handling couldn't live entirely at the application layer. I added a PostgreSQL advisory lock on the slot being booked, so the database itself serializes competing attempts on the same slot instead of relying on two separate request handlers to agree.",
          "The tradeoff is that two requests for the same slot can no longer be processed in parallel: one has to wait for the other to resolve before it can proceed.",
        ],
      },
    ],
    visualPlan: [
      "Booking lifecycle diagram for create, reschedule, cancel, active, and history flows.",
      "High-level service diagram showing API layer, validation, persistence, and PostgreSQL locking.",
      "Small endpoint summary table with sanitized example route names.",
    ],
  },
];

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug);

export function getCaseStudy(slug: string) {
  const caseStudy = caseStudies.find((item) => item.slug === slug);
  const project = projects.find((item) => item.slug === slug);

  if (!caseStudy || !project) {
    return null;
  }

  return {
    ...caseStudy,
    project,
  };
}
