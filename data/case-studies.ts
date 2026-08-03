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
      "The EV charging capstone for Emagine Solutions needed two separate React frontends built as one coherent product: a customer portal for reporting charging problems, and an internal operator dashboard for triaging tickets and monitoring live charger telemetry, both integrated against the same FastAPI and PostgreSQL backend.",
    outcome:
      "As Lead Frontend Developer, I built both apps across more than 80 REST endpoints with JWT and OTP authentication, covering AI-assisted ticket triage, predictive maintenance alerts, a fleet incident mode, and a Smart Route feature for drivers, working from weekly technical reviews with Emagine's software lead.",
    sections: [
      {
        title: "Role and scope",
        body: [
          "I was Lead Frontend Developer on an industry-sponsored capstone for Emagine Solutions, a four-person team project running from September 2025 to May 2026 with weekly technical reviews with their software lead. I built two React and Tailwind CSS apps, a customer portal and an operator dashboard, integrated against a FastAPI and PostgreSQL backend across more than 80 REST endpoints with JWT and OTP authentication.",
        ],
      },
      {
        title: "The operator dashboard",
        body: [
          "The operator dashboard runs on live IoT telemetry from the charging network, surfacing AI-classified tickets with confidence scores, predictive maintenance alerts, and a fleet incident mode that triggers on threshold breach.",
        ],
      },
      {
        title: "Smart Route",
        body: [
          "The Smart Route feature uses the Mapbox Directions API to route drivers to underused chargers based on live traffic, showing drive, wait, and charge time estimates for each option. Points-based incentives are tied to the recommendation to help shift demand away from congested stations.",
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
  {
    slug: "energy-efficient-wsn-node-selection",
    challenge:
      "IoT wireless sensor networks need enough active nodes to cover a monitoring field, but activating every candidate node wastes energy and creates redundant overlapping coverage. The simple baselines fail in different ways: in this team's own simulation, grid deployment had zero sink connectivity at 16 and 25 candidate nodes, and random deployment's redundancy kept climbing as node density increased.",
    outcome:
      "A three-person team built a greedy node-selection heuristic that scores each candidate node on coverage gain, redundancy, and energy cost, gated by a hard sink-connectivity requirement, then prunes the selected set afterward. Tested against random and grid deployment across 16 to 64 candidate nodes, it ranked first overall at every density. At 64 nodes it reached 95.2% coverage using an average of 15.3 active nodes, against 64 for both baselines.",
    sections: [
      {
        title: "Role and scope",
        body: [
          "I was one of three people on this Wireless and Mobile Networks team project. My contributions were the Python-based simulation, helping implement the node selection heuristic, evaluating coverage, redundancy, energy consumption, active node count, and sink connectivity, running the trials across multiple node counts, and contributing to the result analysis, visualization, and the final IEEE-style report. Most of it was worked on together rather than split into separately owned pieces.",
        ],
      },
      {
        title: "The heuristic",
        body: [
          "The scheme evaluates every unselected candidate node at each step and picks the highest-scoring feasible one, repeating until the field reaches 95% coverage or no feasible candidates are left. A node is only feasible if it preserves connectivity to the sink: if it doesn't, its score is forced to zero regardless of how much coverage it would add. After the greedy pass, the algorithm tries removing each selected node one at a time and keeps it removed if coverage and connectivity still hold without it.",
          "The score weights coverage, redundancy, and energy cost at 0.60, 0.25, and 0.15. We took those from the literature review rather than tuning them ourselves, tested them, and found they held up as reliable fixed values, so we kept them rather than optimizing further. We also didn't compare against metaheuristics like PSO or Grey Wolf Optimization that show up in related work: they need meaningfully more compute than a lightweight greedy heuristic, which was the point of this approach. Extending the comparison to those is future work.",
        ],
      },
      {
        title: "Results",
        body: [
          "Tested against random and grid deployment across 16 to 64 candidate nodes with 20 trials each, the proposed method ranked first overall at every density tested. The gap widens with more candidates: at 64 nodes it reached 95.2% coverage with an average of 15.3 active nodes, against 64 for both baselines, cutting redundancy from 3.922 to 0.456 and energy from 0.0254 J to 0.0062 J.",
          "At the lowest density tested, 16 candidate nodes, it's a genuinely mixed result: coverage was actually the lowest of the three methods (57.8%, against 76.2% for random and 80.0% for grid), and energy use was higher than either baseline. It still ranked first because it was the only method with full sink connectivity at that density, grid scored zero connectivity there. With few candidates to choose from, the heuristic couldn't be both well-covered and connected without paying for it elsewhere.",
        ],
      },
    ],
    visualPlan: [
      "Coverage, redundancy, energy, and active-node-count line charts across the five tested node counts, already generated in the repo.",
      "System model diagram showing the monitoring field, sink position, and heterogeneous sensing ranges.",
      "Summary table matching the report: coverage, redundancy, energy, active nodes, and connectivity per method.",
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
