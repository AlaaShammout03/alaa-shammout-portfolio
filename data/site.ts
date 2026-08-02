export const siteConfig = {
  name: "Alaa Shammout",
  title: "Alaa Shammout | Computer Engineering Portfolio",
  description:
    "Portfolio of Alaa Shammout, a Computer Engineering graduate from the American University of Sharjah, building software from React and Spring Boot to FreeRTOS on bare ESP32 hardware.",
  positioning:
    "I build across the stack most people split into two careers: React and Spring Boot on one end, FreeRTOS tasks on bare ESP32 hardware on the other.",
  email: "alaashammout03@gmail.com",
  githubUrl: "https://github.com/AlaaShammout03/",
  linkedinUrl: "https://www.linkedin.com/in/alaa-shammout03/",
  resumeUrl: "/resume/alaa-shammout-resume.pdf",
};

export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
