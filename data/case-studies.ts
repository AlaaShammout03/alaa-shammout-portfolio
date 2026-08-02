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
  {
    slug: "csrnet-crowd-counting",
    challenge:
      "A PyTorch re-implementation of CSRNet needed to learn per-pixel crowd density on the ShanghaiTech dataset, but early training showed a validation MAE that wasn't moving, with a loss that looked deceptively small from the first epoch.",
    outcome:
      "After tracing the flat loss to a scale mismatch between predictions and the tiny ground-truth density values, the retrained model reached a test MAE of 18.01 on Part B and 106.11 on Part A, ahead of 2 of the 4 published baselines it was compared against.",
    sections: [
      {
        title: "Tracing the flat loss",
        body: [
          "Validation MAE wasn't moving across epochs, and the loss printed as suspiciously small from epoch 1, consistently around 1e-4. The model clearly wasn't predicting correctly, so I visualized the predicted density maps and they came back almost blank, near zero everywhere.",
          "Checking the actual ground-truth density values explained why: they were around 0.05 per pixel. The loss looked small only because the targets were tiny, not because the model had learned anything. The fix, rescaling density values by 100x along with gradient clipping, was the first thing tried once the root cause was clear, and it resolved the issue directly.",
        ],
      },
      {
        title: "Choosing a learning rate schedule",
        body: [
          "The first schedule I tried was ReduceLROnPlateau, which lowers the learning rate automatically once validation loss stops improving, the more adaptive-seeming option. But the Part A validation set is only 60 images, so a handful of noisy images could swing the aggregate metric enough to trigger a reduction too early, killing the learning rate before the model had actually plateaued.",
          "I switched to StepLR with a fixed decay every 30 epochs instead. It ignores validation noise and decays on a set schedule, which mattered more here than reacting adaptively to a metric that wasn't reliable at that sample size.",
        ],
      },
      {
        title: "Results and where it's weakest",
        body: [
          "Using geometry-adaptive k-NN density maps as ground truth, the retrained model reached a test MAE of 18.01 on ShanghaiTech Part B and 106.11 on Part A, ahead of 2 of the 4 published baselines it was compared against.",
          "A per-bucket breakdown by scene density showed where it's weakest: sparse scenes in Part B had 9.1% relative error, higher than denser scenes in the same set.",
        ],
      },
    ],
    visualPlan: [
      "Predicted density maps before and after the rescaling fix, next to ground truth.",
      "Loss curve comparison across the ReduceLROnPlateau and StepLR runs.",
      "Per-bucket relative error chart by scene density.",
    ],
  },
  {
    slug: "freertos-esp32-escape-room-game",
    challenge:
      "A three-stage escape-room game on ESP32 needed its input, game logic, and display code running as independent, differently-timed tasks, all reading and writing the same shared game state, score, timer, and game status, without corrupting it.",
    outcome:
      "The game runs as three FreeRTOS tasks, logic at 20ms, input at 30ms, and display at 100ms, synchronized through a single mutex over the shared game state, with the full three-stage state machine validated in the Wokwi simulator.",
    sections: [
      {
        title: "Role and scope",
        body: [
          "I worked on a three-stage escape-room game running on ESP32, built in C with FreeRTOS, ESP-IDF, and PlatformIO as part of a three-person team. The game drives a 4x4 keypad, analog joystick, and slide potentiometer for input, RGB LEDs and a buzzer for feedback, and a 20x4 I2C LCD for the display, spanning ADC, GPIO, PWM, and I2C.",
          "The game runs as three periodic FreeRTOS tasks: input at 30ms, game logic at 20ms, and the LCD display at 100ms. All three tasks read and write the same shared game state on every cycle.",
        ],
      },
      {
        title: "Sharing state across three tasks",
        body: [
          "With three tasks touching the same handful of values every cycle, the design had to account for concurrent access from the start. We used a single mutex over the whole shared game-state block rather than splitting it into separate locks per field, since it was the simplest option that was still correct and kept the locking logic easy to reason about across input, logic, and display code.",
          "The tradeoff is that a single mutex serializes all access to shared state, not just the parts that actually conflict: if the display task is reading the timer while the logic task wants to update the score, one still has to wait for the other, even though they're touching different fields.",
        ],
      },
    ],
    visualPlan: [
      "Task diagram showing the three FreeRTOS tasks, their periods, and the shared game-state mutex.",
      "Photo or diagram of the physical build: keypad, joystick, potentiometer, LCD, LEDs, and buzzer wired to the ESP32.",
      "State-machine diagram of the three-stage puzzle progression.",
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
