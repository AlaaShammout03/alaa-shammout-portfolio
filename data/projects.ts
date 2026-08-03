export type Project = {
  slug: string;
  title: string;
  type: string;
  role?: string;
  summary: string;
  tech: string[];
  highlights: string[];
  repoUrl?: string;
  repoLabel?: string;
  privacyNote?: string;
};

export const projects: Project[] = [
  {
    slug: "ev-charging-support-platform",
    title: "EV Charging Support Platform",
    type: "Industry-sponsored capstone for Emagine Solutions",
    role: "Lead Frontend Developer",
    summary:
      "A customer portal and operator dashboard for an EV charging network, built as frontend lead on a four-person capstone for Emagine Solutions. The dashboard had to turn live charger telemetry and AI-classified tickets into something an operator could act on immediately, including a fleet incident mode that fires on threshold breach.",
    tech: [
      "React",
      "Tailwind CSS",
      "REST APIs",
      "FastAPI integration",
      "PostgreSQL-backed APIs",
      "Mapbox Directions API",
      "AI/ML outputs",
    ],
    highlights: [],
    privacyNote:
      "Private company-sponsored work for Emagine Solutions. Public portfolio content must use sanitized screenshots and omit private code, real tickets, charger identifiers, and API details.",
  },
  {
    slug: "urbanspace-booking-service",
    title: "Cloud-Native Booking Microservice",
    type: "Cloud/backend project",
    summary:
      "A Spring Boot booking microservice for a shared urban-resource platform, one of four services in a four-person team project. Two overlapping bookings for the same slot both got confirmed during testing, which meant application-level checks alone weren't enough to stop a double booking.",
    tech: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Spring Data JPA",
      "REST APIs",
      "JWT",
      "Microsoft Azure",
    ],
    highlights: [],
    repoUrl: "https://github.com/AlaaShammout03/urbanspace-booking-service",
  },
  {
    slug: "csrnet-crowd-counting",
    title: "CSRNet Crowd Counting",
    type: "AI / Computer Vision project",
    summary:
      "A PyTorch re-implementation of CSRNet for crowd counting on the ShanghaiTech dataset. Validation MAE wouldn't move for the first several epochs, and the loss looked deceptively small the whole time because the ground-truth density values themselves were tiny.",
    tech: ["Python", "PyTorch", "OpenCV", "NumPy", "pandas"],
    highlights: [],
    repoUrl: "https://github.com/AlaaShammout03/Computer-Vision-Project",
  },
  {
    slug: "freertos-esp32-escape-room-game",
    title: "FreeRTOS ESP32 Escape Room Game",
    type: "Embedded systems project",
    summary:
      "A three-stage escape-room game on ESP32, built in C with FreeRTOS as part of a three-person team. All three tasks touch the same score, timer, and game status every cycle, coordinated through a single mutex chosen for simplicity over splitting the state into separate locks.",
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
    highlights: [],
    repoUrl: "https://github.com/AlaaShammout03/Embedded-Systems-Project",
  },
  {
    slug: "energy-efficient-wsn-node-selection",
    title: "Energy-Efficient WSN Node Selection",
    type: "Wireless networks / IoT simulation project",
    summary:
      "A greedy node-selection heuristic for IoT wireless sensor networks, built with two other students for a Wireless and Mobile Networks course. Grid deployment, the obvious baseline, had zero sink connectivity at low node counts in testing, which is exactly what the heuristic's hard connectivity gate was built to rule out.",
    tech: ["Python", "NumPy", "pandas", "Matplotlib", "Google Colab"],
    highlights: [],
    repoUrl:
      "https://github.com/AlaaShammout03/energy-efficient-wsn-node-selection",
  },
];
