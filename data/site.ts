export const siteConfig = {
  name: "Alaa Shammout",
  title: "Alaa Shammout | Software Engineer",
  description:
    "Alaa Shammout, a software engineer and 2026 Computer Engineering graduate of the American University of Sharjah, working in React, Next.js, TypeScript, Spring Boot, FastAPI, and Azure.",
  positioning:
    "Most recently, I built the 19-page WattsWhere website for an EV charging company, from the CEO's Figma design to production, plus a control panel that lets non-technical staff edit it without a developer.",
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
