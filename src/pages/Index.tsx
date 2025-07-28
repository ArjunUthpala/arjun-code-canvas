import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Header from "@/components/Header";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AchievementsBlock from "@/components/AchievementsBlock";
import ContactDetails from "@/components/ContactDetails";
import AboutSection from "@/components/AboutSection";
import BashBlock from "@/components/BashBlock";
import WhatsAppContact from "@/components/WhatsAppContact";
import { useScrollAnimation } from "@/hooks/useAnime";

// The 4 about points, separated for clarity
const bashBlocks = [
  "Skilled and self-motivated Software Engineer with nearly 3 years of experience in designing and developing robust PHP Laravel-based back-end services and server-side logic. Proficient in Vue.js for dynamic front-end interfaces and Flutter for cross-platform mobile applications. Currently leading two teams of junior developers at Parallax Technologies (Pvt) Ltd, delivering high-quality, user-centric software solutions.",
  "Experienced in integrating third-party APIs, conducting performance optimization, and ensuring responsive design across web and mobile platforms. Strong in software debugging and producing clean, maintainable code with proper documentation.",
  "Demonstrates strong collaboration and teamwork, with proven adaptability in fast-paced environments. Recognized for attention to detail, effective time management, and problem-solving. Actively involved in code reviews, mentoring, and technical hiring processes.",
  "Currently expanding expertise in DevOps practices and prompt engineering to strengthen automation of developments, scalability, and AI-driven development workflows.",
];

const Index = () => {
  useScrollAnimation('.main-name', {
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    easing: 'easeOutCubic'
  });

  useScrollAnimation('.main-role', {
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 200,
    easing: 'easeOutCubic'
  });
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full overflow-x-hidden">
        {/* Sidebar */}
        <div className="hidden md:block">
          <AppSidebar />
        </div>
        {/* Main Content Area */}
        <div className="flex flex-col flex-1 min-w-0 w-full">
          {/* SEO Main Heading */}
          <h1 className="sr-only">Arjun Uthpala – Full Stack Software Engineer & Developer Portfolio</h1>
          <Header />
          {/* SidebarTrigger (shows on mobile screens for sidebar toggle) */}
          <div className="md:hidden p-2">
            <SidebarTrigger />
          </div>
          {/* Name/Role moved below header */}
          <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-6 md:mt-10 mb-2 md:mb-4 px-4">
            <span className="main-name text-center text-2xl md:text-3xl font-bold text-accent tracking-wider font-mono opacity-0">
              Arjun Uthpala
            </span>
            <span className="main-role text-center text-secondary text-lg font-mono opacity-0">
              Software Engineer
            </span>
            {/* Contact details at top */}
            <div id="contact">
              <ContactDetails />
            </div>
          </div>
          {/* 1st BashBlock after contact details */}
          <div className="flex justify-center w-full px-4">
            <BashBlock>{bashBlocks[0]}</BashBlock>
          </div>
          {/* Skills Section */}
          <div className="px-4">
            <SkillsSection />
          </div>
          {/* 2nd BashBlock after skills */}
          <div className="flex justify-center w-full px-4">
            <BashBlock>{bashBlocks[1]}</BashBlock>
          </div>
          {/* Experience */}
          <div className="px-4">
            <ExperienceTimeline />
          </div>
          {/* 3rd BashBlock after experience */}
          <div className="flex justify-center w-full px-4">
            <BashBlock>{bashBlocks[2]}</BashBlock>
          </div>
          {/* Projects */}
          <div className="px-4">
            <ProjectsSection />
          </div>
          {/* 4th BashBlock after projects */}
          <div className="flex justify-center w-full px-4">
            <BashBlock>{bashBlocks[3]}</BashBlock>
          </div>
          <div className="px-4">
            <EducationSection />
          </div>
          <div className="px-4">
            <AchievementsBlock />
          </div>
          {/* WhatsApp Contact Section */}
          <div className="px-4 py-8">
            <WhatsAppContact />
          </div>
          {/* Footer */}
          <footer className="py-6 text-center text-md text-secondary font-mono px-4">
            Built with <span className="text-accent">React</span> +{" "}
            <span className="text-accent">Tailwind CSS</span> · &copy;{" "}
            {new Date().getFullYear()} Arjun Uthpala
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
