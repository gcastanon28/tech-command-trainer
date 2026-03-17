
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Layers, Zap, Trophy, Settings, Terminal, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Repository", href: "/repository", icon: BookOpen },
  { name: "Flashcards", href: "/flashcards", icon: Layers },
  { name: "Quizzes", href: "/quiz", icon: Trophy },
  { name: "Daily Challenge", href: "/challenge", icon: Zap },
  { name: "Live Demo", href: "https://example.com/demo", icon: ExternalLink, external: true },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border w-64 fixed left-0 top-0 z-40">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-2 rounded-lg">
          <Terminal className="text-primary-foreground h-6 w-6" />
        </div>
        <span className="font-headline text-2xl font-bold tracking-tight text-foreground">
          Code<span className="text-primary">Path</span>
        </span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const isExternal = 'external' in item && item.external;
          
          const content = (
            <div className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 group w-full",
              isActive 
                ? "bg-primary/10 text-primary" 
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            )}>
              <item.icon className={cn(
                "h-5 w-5 transition-colors",
                isActive ? "text-primary" : "text-sidebar-foreground group-hover:text-sidebar-accent-foreground"
              )} />
              <span className="font-medium">{item.name}</span>
              {isExternal && <ExternalLink className="h-3 w-3 ml-auto opacity-50" />}
            </div>
          );

          if (isExternal) {
            return (
              <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            );
          }

          return (
            <Link key={item.name} href={item.href} className="block">
              {content}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-sidebar-border">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent rounded-md transition-all">
          <Settings className="h-5 w-5" />
          <span className="font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}
