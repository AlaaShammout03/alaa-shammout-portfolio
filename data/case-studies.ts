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
      "A shared urban-resource platform needs booking flows that are secure, consistent, and resistant to conflicts when multiple users try to reserve the same resource.",
    outcome:
      "The case study shows the backend design behind booking creation, active/history views, rescheduling, cancellation, validation rules, and PostgreSQL-backed conflict prevention.",
    sections: [
      {
        title: "Service responsibility",
        body: [
          "The booking service handles the lifecycle of resource reservations for a smart urban resources platform.",
          "It exposes REST API workflows for creating bookings, reading active and historical bookings, rescheduling reservations, and cancelling bookings.",
        ],
      },
      {
        title: "Validation and consistency",
        body: [
          "The service validates operating hours, booking limits, request conflicts, and lifecycle transitions before persisting changes.",
          "PostgreSQL advisory locking is used as part of the conflict-detection strategy so concurrent booking attempts can be handled consistently.",
        ],
      },
      {
        title: "Cloud/backend emphasis",
        body: [
          "The project highlights Java, Spring Boot, Spring Data JPA, PostgreSQL, JWT-secured API design, and Microsoft Azure deployment readiness.",
          "The portfolio case study should include API and lifecycle diagrams instead of screenshots that do not add technical signal.",
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
