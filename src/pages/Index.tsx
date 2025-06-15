
// Main landing page for Arjun Uthpala Portfolio

import Header from "@/components/Header";
import TerminalIntro from "@/components/TerminalIntro";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsBlock from "@/components/AchievementsBlock";
import ContactSection from "@/components/ContactSection";

// Use an Unsplash placeholder as avatar for now
const avatarUrl =
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=facearea&w=320&h=320&facepad=2&q=80&sat=-100"; // gray-style

const Index = () => {
  return (
    <div style={{ background: "#121212", minHeight: "100vh" }} className="font-mono">
      <Header />
      {/* Hero Section */}
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-8 pt-12 pb-12 md:pt-20 md:pb-4 px-4">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start items-center w-full md:w-auto">
          <div className="rounded-full border-4 border-accent overflow-hidden shadow-xl w-36 h-36 md:w-52 md:h-52 grayscale">
            <img
              src={avatarUrl}
              alt="Arjun Uthpala Portrait"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start md:pl-6">
          <TerminalIntro />
        </div>
      </section>
      <AboutSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <EducationSection />
      <AchievementsBlock />
      <ContactSection />
      {/* Footer */}
      <footer className="py-6 text-center text-md text-secondary font-mono">
        Built with <span className="text-accent">React</span> + <span className="text-accent">Tailwind CSS</span> · &copy; {new Date().getFullYear()} Arjun Uthpala
      </footer>
    </div>
  );
};

export default Index;
