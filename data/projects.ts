export type Project = {
  slug: string;
  title: string;
  type: string;
  role?: string;
  summary: string;
  tech: string[];
  highlights: string[];
  status: "case-study-planned" | "project-card";
  privacyNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ev-charging-support-platform",
    title: "EV Charging Support Platform",
    type: "Company-sponsored senior design project",
    role: "Lead Frontend Developer",
    summary:
      "Customer-facing support app and operator dashboard for EV charging workflows, ticket reporting, charger monitoring, telemetry views, AI-assisted ticket classification, predictive maintenance alerts, and route assistance.",
    tech: [
      "React",
      "Tailwind CSS",
      "REST APIs",
      "FastAPI integration",
      "PostgreSQL-backed APIs",
      "Mapbox Directions API",
      "AI/ML outputs",
    ],
    highlights: [
      "Built the frontend and dashboard workflows around customer support, monitoring, and operator triage.",
      "Integrated REST API flows for ticket data, charger status, telemetry views, route assistance, and AI/ML outputs.",
      "Structured as a sanitized case study because the source code and sponsor details are private.",
    ],
    status: "case-study-planned",
    privacyNote:
      "Private company-sponsored work. Public portfolio content must use sanitized screenshots and omit private code, sponsor data, real tickets, charger identifiers, and API details.",
  },
  {
    slug: "urbanspace-booking-service",
    title: "UrbanSpace Booking Service",
    type: "Cloud/backend project",
    summary:
      "Spring Boot booking microservice for a smart urban resources platform with booking creation, history, rescheduling, cancellation, validation rules, conflict detection, and PostgreSQL advisory locking.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "REST APIs",
      "JWT",
      "Microsoft Azure",
    ],
    highlights: [
      "Designed REST endpoints for active bookings, booking history, rescheduling, and cancellation workflows.",
      "Implemented operating-hours validation, booking limits, conflict detection, and PostgreSQL advisory locking.",
      "Prepared for cloud deployment with Azure and PostgreSQL-backed persistence.",
    ],
    status: "case-study-planned",
  },
  {
    slug: "csrnet-crowd-counting",
    title: "CSRNet Crowd Counting",
    type: "AI / Computer Vision project",
    summary:
      "PyTorch CSRNet reimplementation for single-image crowd counting on the ShanghaiTech dataset, evaluated with MAE/RMSE and density-bucket error analysis.",
    tech: ["Python", "PyTorch", "OpenCV", "NumPy", "pandas"],
    highlights: [
      "Re-implemented CSRNet for crowd-count estimation from single images.",
      "Applied density rescaling for training stability and evaluated results using MAE/RMSE.",
      "Analyzed performance across density buckets to understand model behavior beyond aggregate metrics.",
    ],
    status: "project-card",
  },
  {
    slug: "freertos-esp32-escape-room-game",
    title: "FreeRTOS ESP32 Escape Room Game",
    type: "Embedded systems project",
    summary:
      "Multi-stage embedded escape room game using FreeRTOS tasks, mutex-protected shared state, input handling, game logic, display updates, and hardware feedback.",
    tech: [
      "C/C++",
      "FreeRTOS",
      "ESP32",
      "Wokwi",
      "I2C LCD",
      "Keypad",
      "Joystick",
      "RGB LEDs",
      "Buzzer",
    ],
    highlights: [
      "Coordinated concurrent tasks for input, game logic, display updates, and output feedback.",
      "Used mutex-protected shared state to keep hardware-facing behavior predictable.",
      "Modeled a complete embedded interaction loop with LCD, keypad, joystick, LEDs, and buzzer feedback.",
    ],
    status: "project-card",
  },
  {
    slug: "energy-efficient-wsn-node-selection",
    title: "Energy-Efficient WSN Node Selection",
    type: "Wireless networks / IoT simulation project",
    summary:
      "Python simulation for energy-efficient active node selection in IoT-based wireless sensor networks, comparing a proposed heuristic with random and grid deployment strategies.",
    tech: ["Python", "NumPy", "pandas", "Matplotlib", "Google Colab"],
    highlights: [
      "Compared node-selection strategies using coverage, redundancy, energy, active node count, and connectivity metrics.",
      "Built simulation outputs for evaluating tradeoffs in IoT wireless sensor network deployments.",
      "Used plots and tabular metrics to make algorithm behavior easier to inspect.",
    ],
    status: "project-card",
  },
];
