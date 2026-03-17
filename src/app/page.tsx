
"use client";

import { AppSidebar } from "@/components/layout/sidebar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Cell 
} from "recharts";
import { Trophy, Zap, Clock, Star, Flame, ExternalLink } from "lucide-react";
import Link from "next/link";

const activityData = [
  { day: "Mon", score: 40 },
  { day: "Tue", score: 30 },
  { day: "Wed", score: 65 },
  { day: "Thu", score: 45 },
  { day: "Fri", score: 90 },
  { day: "Sat", score: 70 },
  { day: "Sun", score: 20 },
];

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-background text-foreground">
      <AppSidebar />
      <main className="flex-1 ml-64 overflow-y-auto p-8 lg:p-12">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-headline font-bold mb-2">Welcome back, Developer</h1>
            <p className="text-muted-foreground">Continue your journey to Linux and Python mastery.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
              <Flame className="text-orange-500 h-5 w-5" />
              <span className="font-bold">12 Day Streak</span>
            </div>
            <Button variant="outline" size="lg" asChild>
              <a href="https://example.com/demo" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Link href="/challenge">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Zap className="mr-2 h-4 w-4" /> Daily Challenge
              </Button>
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard icon={Trophy} title="Mastery Level" value="Level 24" subValue="Next: Level 25 (240 XP)" color="text-primary" />
          <StatCard icon={Star} title="Flashcards Mastered" value="142" subValue="82% of total collection" color="text-accent" />
          <StatCard icon={Clock} title="Learning Time" value="48h 20m" subValue="+2.5h this week" color="text-blue-400" />
          <StatCard icon={Zap} title="Quizzes Passed" value="38" subValue="Avg. score: 94%" color="text-yellow-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-headline">Activity Overview</CardTitle>
              <CardDescription>Daily learning points earned over the past week.</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2a323a" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#191F25', border: '1px solid #2d3748', borderRadius: '8px' }}
                    itemStyle={{ color: '#4796F0' }}
                  />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score > 60 ? '#68E1FF' : '#4796F0'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Skill Progress</CardTitle>
              <CardDescription>Knowledge by category</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <SkillProgress label="Linux Shell" value={78} />
              <SkillProgress label="Python Basics" value={92} />
              <SkillProgress label="Python Advanced" value={45} />
              <SkillProgress label="Scripting" value={61} />
              <SkillProgress label="Networking" value={30} />
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="font-headline">Recently Viewed Commands</CardTitle>
                <CardDescription>Jump back into your repository</CardDescription>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">View All</Button>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {['grep', 'chmod', 'list-comp', 'pip install'].map((cmd) => (
                  <li key={cmd} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors cursor-pointer group">
                    <code className="text-accent font-code font-bold">{cmd}</code>
                    <Badge variant="outline" className="opacity-70 group-hover:opacity-100 transition-opacity">
                      {cmd.includes('-') || cmd.includes(' ') ? 'Python' : 'Linux'}
                    </Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Upcoming Milestone</CardTitle>
              <CardDescription>Complete these to level up!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-bold flex items-center gap-2 mb-1">
                  <Trophy className="h-4 w-4 text-primary" /> Python Master Quiz
                </h4>
                <p className="text-sm text-muted-foreground mb-3">Score 90% or higher on advanced Python concepts.</p>
                <Button variant="outline" size="sm" className="w-full">Start Quiz</Button>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <h4 className="font-bold flex items-center gap-2 mb-1">
                  <Star className="h-4 w-4 text-accent" /> Daily Streak
                </h4>
                <p className="text-sm text-muted-foreground">Maintain a 14-day streak to earn a new badge.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon: Icon, title, value, subValue, color }: any) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardContent className="pt-6">
        <div className="flex items-center gap-4 mb-3">
          <div className={`${color} bg-secondary p-2 rounded-lg`}>
            <Icon className="h-5 w-5" />
          </div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-headline font-bold">{value}</span>
          <span className="text-xs text-muted-foreground mt-1">{subValue}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function SkillProgress({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );
}
