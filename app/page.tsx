import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Resume } from "@/components/sections/resume";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
