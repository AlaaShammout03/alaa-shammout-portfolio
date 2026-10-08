import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "C", "C++", "SQL"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "Mapbox GL",
      "Firebase Cloud Messaging",
    ],
  },
  {
    title: "Backend and cloud",
    items: [
      "Node.js",
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "Drizzle ORM",
      "SQLite",
      "Docker",
      "Azure",
      "Vercel",
    ],
  },
  {
    title: "Embedded systems",
    items: ["FreeRTOS", "ESP32", "ESP-IDF", "PlatformIO", "Wokwi", "I2C peripherals"],
  },
  {
    title: "AI and simulation",
    items: ["PyTorch", "OpenCV", "NumPy", "pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitLab",
      "GitHub",
      "Figma",
      "Postman",
      "Playwright",
      "Linux/Bash",
      "Claude Code",
    ],
  },
  {
    title: "Spoken languages",
    items: ["Arabic (native)", "English (fluent)", "Turkish (intermediate)"],
  },
];

export function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="What I work in, from Next.js to FreeRTOS"
      tone="white"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delayMs={Math.min(index * 60, 240)}
            className={
              index === skillGroups.length - 1 && skillGroups.length % 2 === 1
                ? "sm:col-span-2"
                : undefined
            }
          >
            <Card className="h-full transition-[border-color,box-shadow] duration-200 hover:border-teal-200 hover:shadow-md hover:shadow-slate-950/5">
              <h3 className="text-base font-semibold text-slate-950">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
