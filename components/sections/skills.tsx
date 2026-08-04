import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "API integration"],
  },
  {
    title: "Backend and cloud",
    items: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "Azure"],
  },
  {
    title: "Embedded systems",
    items: ["C/C++", "FreeRTOS", "ESP32", "I2C peripherals"],
  },
  {
    title: "AI and simulation",
    items: ["Python", "PyTorch", "OpenCV", "NumPy", "Matplotlib"],
  },
];

export function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Technical range organized by role fit"
      tone="white"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delayMs={Math.min(index * 60, 240)}>
            <Card>
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
