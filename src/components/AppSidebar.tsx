
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Folder, Info, ListChecks, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: Info },
  { label: "Skills", href: "#skills", icon: ListChecks },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: Code2 },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function AppSidebar() {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : "#about"
  );

  useEffect(() => {
    // Listen for hash changes
    const onHashChange = () => {
      setCurrentHash(window.location.hash || "#about");
    };
    window.addEventListener("hashchange", onHashChange);

    // Set initial hash in case there's a delay
    setCurrentHash(window.location.hash || "#about");

    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <span className="flex items-center gap-2">
              <Folder className="w-4 h-4" /> File Explorer
            </span>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = currentHash === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={
                        isActive
                          ? "bg-accent/10 text-accent font-bold"
                          : "hover:text-accent"
                      }
                    >
                      <a href={item.href} className="flex items-center">
                        {isActive ? (
                          <span className="mr-2 text-accent font-bold">&gt;</span>
                        ) : (
                          <span className="mr-2 w-3" />
                        )}
                        <item.icon
                          className={
                            isActive
                              ? "text-accent"
                              : "text-sidebar-foreground"
                          }
                          size={16}
                        />
                        <span className="ml-2">{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
