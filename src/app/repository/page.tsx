
"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/layout/sidebar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, BookOpen } from "lucide-react";
import { COMMANDS, Command } from "@/lib/data";

export default function RepositoryPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<'all' | 'linux' | 'python'>('all');

  const filtered = COMMANDS.filter(cmd => {
    const matchesSearch = cmd.name.toLowerCase().includes(search.toLowerCase()) || 
                          cmd.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || cmd.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 ml-64 overflow-y-auto p-12">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-primary h-8 w-8" />
            <h1 className="text-4xl font-headline font-bold">Concept Repository</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A comprehensive library of Linux and Python commands. Use the search bar to find explanations, syntax, and usage examples.
          </p>
        </header>

        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 mb-8">
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search commands, flags, functions..." 
                className="pl-10 h-12 bg-secondary/50 border-border focus:ring-primary"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 p-1 rounded-lg border border-border">
              {(['all', 'linux', 'python'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    filter === cat 
                      ? "bg-primary text-primary-foreground" 
                      : "text-muted-foreground hover:text-foreground hover:bg-border"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((cmd) => (
            <CommandCard key={cmd.id} cmd={cmd} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-muted-foreground text-lg">No results found for "{search}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function CommandCard({ cmd }: { cmd: Command }) {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <code className="text-xl font-code font-bold text-accent group-hover:text-primary transition-colors">{cmd.name}</code>
            <Badge variant="secondary" className="bg-secondary text-primary border-primary/20">
              {cmd.category.toUpperCase()}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-6 line-clamp-2">{cmd.description}</p>
          <div className="flex flex-wrap gap-2">
            {cmd.tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-[10px] uppercase tracking-wider opacity-60">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="bg-sidebar-background p-4 border-t border-border">
          <p className="text-[10px] uppercase text-muted-foreground font-bold mb-2 tracking-widest">Usage Example</p>
          <pre className="font-code text-sm text-foreground bg-black/30 p-3 rounded border border-border/50 overflow-x-auto">
            {cmd.example}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}
