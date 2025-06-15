import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import TerminalIntro from "@/components/TerminalIntro";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsBlock from "@/components/AchievementsBlock";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>
        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0">
          <Header />
          {/* SidebarTrigger (shows on mobile screens for sidebar toggle) */}
          <div className="md:hidden p-2">
            <SidebarTrigger />
          </div>
          {/* Name/Role moved below header */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6 md:mt-10 mb-2 md:mb-4 px-4">
            <span className="text-center text-2xl md:text-3xl font-bold text-accent tracking-wider font-mono">
              Arjun Uthpala
            </span>
            <span className="text-center text-secondary text-lg font-mono">
              Software Engineer
            </span>
          </div>
          {/* Hero Section */}
          <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-8 pt-4 pb-12 md:pt-10 md:pb-4 px-4">
            {/* REMOVED: Avatar/Profile Picture */}
            <div className="flex-1 flex flex-col items-center md:items-start md:pl-6 w-full">
              <TerminalIntro />
            </div>
          </section>
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
      </div>
    </SidebarProvider>
  );
};

export default Index;
