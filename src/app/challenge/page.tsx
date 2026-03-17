
"use client";

import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Terminal, Code, Sparkles, AlertCircle, Loader2 } from "lucide-react";
import { aiDailyChallenge, type AIDailyChallengeOutput } from "@/ai/flows/ai-daily-challenge-flow";
import { Textarea } from "@/components/ui/textarea";

export default function ChallengePage() {
  const [challenge, setChallenge] = useState<AIDailyChallengeOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [userSolution, setUserSolution] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    async function fetchChallenge() {
      try {
        const result = await aiDailyChallenge({
          skillLevel: 'intermediate',
          topicsOfInterest: ['Linux CLI', 'Python Scripting', 'Automation'],
          learningGoals: 'Master system administration tools and Python automation.'
        });
        setChallenge(result);
      } catch (error) {
        console.error("Error generating challenge:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchChallenge();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen bg-background">
        <AppSidebar />
        <main className="flex-1 ml-64 flex flex-col items-center justify-center">
          <div className="text-center">
            <Loader2 className="h-12 w-12 text-primary animate-spin mx-auto mb-4" />
            <h2 className="text-2xl font-headline font-bold mb-2">Generating Today's Challenge</h2>
            <p className="text-muted-foreground">Our AI is crafting a unique problem just for you...</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 ml-64 overflow-y-auto p-12">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-accent h-8 w-8" />
              <h1 className="text-4xl font-headline font-bold">AI Daily Challenge</h1>
            </div>
            <p className="text-muted-foreground">Personalized tasks to push your limits every day.</p>
          </div>
          <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 text-lg">
            {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
          </Badge>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-primary/30 shadow-2xl overflow-hidden">
              <div className="bg-primary/10 px-6 py-4 flex items-center justify-between border-b border-primary/20">
                <div className="flex items-center gap-3">
                  {challenge?.challengeType === 'coding' ? <Code className="text-primary" /> : <Terminal className="text-primary" />}
                  <span className="font-bold uppercase tracking-widest text-xs text-primary">{challenge?.challengeType}</span>
                </div>
                <Badge variant="outline" className="border-accent text-accent">
                  {challenge?.difficulty.toUpperCase()}
                </Badge>
              </div>
              <CardContent className="p-8">
                <h2 className="text-3xl font-headline font-bold mb-4">{challenge?.challengeTitle}</h2>
                <div className="prose prose-invert max-w-none mb-8">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {challenge?.challengeDescription}
                  </p>
                </div>
                
                {challenge?.expectedOutput && (
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-accent uppercase tracking-wider mb-3">Expected Output</h4>
                    <pre className="bg-black/40 p-4 rounded-lg border border-border font-code text-sm">
                      {challenge.expectedOutput}
                    </pre>
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider">Your Solution</h4>
                  <Textarea 
                    placeholder={challenge?.challengeType === 'coding' ? "# Write your Python code here..." : "$ Type your Linux command here..."}
                    className="min-h-[200px] font-code bg-secondary/30 border-border focus:border-primary"
                    value={userSolution}
                    onChange={(e) => setUserSolution(e.target.value)}
                    disabled={submitted}
                  />
                  {!submitted ? (
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => setSubmitted(true)}
                    >
                      Submit Solution
                    </Button>
                  ) : (
                    <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg flex items-center gap-3">
                      <div className="bg-green-500 rounded-full p-1">
                        <CheckCircle2 className="h-4 w-4 text-black" />
                      </div>
                      <div>
                        <p className="font-bold text-green-400">Challenge Completed!</p>
                        <p className="text-sm text-green-400/80">You've earned 50 XP and extended your streak.</p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {submitted && challenge?.solutionHint && (
              <Card className="bg-secondary/20 border-accent/20">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" /> Solution Walkthrough
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{challenge.solutionHint}</p>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-xl">Today's Topic</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20 py-2 px-4 text-sm w-full justify-center">
                  {challenge?.topic}
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Total Rewards</p>
                    <h3 className="text-3xl font-headline font-bold">+150 XP</h3>
                  </div>
                  <Trophy className="h-10 w-10 opacity-30" />
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><div className="h-1 w-1 bg-white rounded-full"></div> 50 XP Completion</li>
                  <li className="flex items-center gap-2"><div className="h-1 w-1 bg-white rounded-full"></div> 25 XP Streak Bonus</li>
                  <li className="flex items-center gap-2"><div className="h-1 w-1 bg-white rounded-full"></div> 75 XP Master Bonus</li>
                </ul>
              </CardContent>
            </Card>

            <div className="p-4 rounded-xl border border-dashed border-border flex flex-col items-center text-center gap-3">
              <AlertCircle className="text-muted-foreground h-8 w-8" />
              <p className="text-sm text-muted-foreground">Stuck on the challenge? Review related concepts in the Repository.</p>
              <Button variant="link" className="text-primary p-0 h-auto">Go to Repository</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
