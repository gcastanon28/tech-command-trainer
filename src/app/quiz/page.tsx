
"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, CheckCircle2, XCircle, ArrowRight, BookOpen, Terminal, Code } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const SAMPLE_QUIZ = [
  {
    id: 1,
    question: "Which flag is used with the 'ls' command to list all files, including hidden ones?",
    options: ["-h", "-a", "-l", "-v"],
    correct: 1,
  },
  {
    id: 2,
    question: "How do you define a function in Python?",
    options: ["function name():", "def name():", "func name():", "define name():"],
    correct: 1,
  },
  {
    id: 3,
    question: "Which of these command is used to change file permissions in Linux?",
    options: ["chown", "chperm", "chmod", "access"],
    correct: 2,
  },
];

export default function QuizPage() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setCurrentStep(0);
    setAnswers([]);
    setFinished(false);
  };

  const handleNext = () => {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentStep < SAMPLE_QUIZ.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.filter((ans, idx) => ans === SAMPLE_QUIZ[idx].correct).length;
  const percentage = Math.round((score / SAMPLE_QUIZ.length) * 100);

  if (!started) {
    return (
      <div className="flex h-screen bg-background">
        <AppSidebar />
        <main className="flex-1 ml-64 overflow-y-auto p-12 flex flex-col items-center justify-center">
          <div className="max-w-xl text-center">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Trophy className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl font-headline font-bold mb-4">Quiz Center</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Ready to test your knowledge? Choose your focus area and difficulty level to start a customizable quiz session.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <QuizOption icon={Terminal} title="Linux Basics" questions={10} time="5 min" />
              <QuizOption icon={Code} title="Python Intro" questions={15} time="8 min" />
            </div>
            <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90" onClick={handleStart}>
              Generate Random Quiz
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="flex h-screen bg-background text-foreground">
        <AppSidebar />
        <main className="flex-1 ml-64 overflow-y-auto p-12 flex flex-col items-center justify-center">
          <Card className="w-full max-w-2xl border-primary/30 shadow-2xl overflow-hidden">
            <div className="bg-primary text-primary-foreground p-12 text-center">
              <Trophy className="h-20 w-20 mx-auto mb-4 opacity-50" />
              <h2 className="text-5xl font-headline font-bold mb-2">{percentage}%</h2>
              <p className="text-xl opacity-80">You scored {score} out of {SAMPLE_QUIZ.length}</p>
            </div>
            <CardContent className="p-8">
              <h3 className="text-xl font-headline font-bold mb-6">Review Answers</h3>
              <div className="space-y-6">
                {SAMPLE_QUIZ.map((q, idx) => (
                  <div key={q.id} className="p-4 rounded-lg bg-secondary/30 border border-border">
                    <p className="font-medium mb-3">{q.question}</p>
                    <div className="flex items-center gap-2">
                      {answers[idx] === q.correct ? (
                        <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/20 flex gap-1 items-center">
                          <CheckCircle2 className="h-3 w-3" /> Correct
                        </Badge>
                      ) : (
                        <Badge className="bg-destructive/20 text-destructive hover:bg-destructive/20 flex gap-1 items-center">
                          <XCircle className="h-3 w-3" /> Incorrect
                        </Badge>
                      )}
                      <span className="text-sm text-muted-foreground">
                        Correct: <span className="text-foreground">{q.options[q.correct]}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button size="lg" className="w-full mt-8" onClick={() => setStarted(false)}>Back to Quiz Center</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  const currentQuestion = SAMPLE_QUIZ[currentStep];

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 ml-64 overflow-y-auto p-12 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <header className="mb-12 flex justify-between items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Question {currentStep + 1} of {SAMPLE_QUIZ.length}</p>
              <h1 className="text-2xl font-headline font-bold">General Knowledge Quiz</h1>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Estimated Remaining</p>
              <p className="font-code font-bold">~ 2m 30s</p>
            </div>
          </header>

          <Card className="border-border shadow-xl">
            <CardContent className="p-10">
              <h2 className="text-2xl font-headline font-medium mb-10 leading-relaxed">
                {currentQuestion.question}
              </h2>

              <RadioGroup value={selectedOption?.toString()} onValueChange={(val) => setSelectedOption(parseInt(val))}>
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, idx) => (
                    <Label
                      key={idx}
                      className={cn(
                        "flex items-center space-x-4 p-5 rounded-xl border-2 transition-all cursor-pointer hover:bg-secondary/50",
                        selectedOption === idx ? "border-primary bg-primary/5" : "border-border"
                      )}
                    >
                      <RadioGroupItem value={idx.toString()} className="sr-only" />
                      <div className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold",
                        selectedOption === idx ? "border-primary bg-primary text-primary-foreground" : "border-muted-foreground"
                      )}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className="text-lg">{option}</span>
                    </Label>
                  ))}
                </div>
              </RadioGroup>

              <div className="mt-12 flex justify-end">
                <Button 
                  size="lg" 
                  disabled={selectedOption === null} 
                  onClick={handleNext}
                  className="px-8 h-12 bg-primary hover:bg-primary/90"
                >
                  {currentStep === SAMPLE_QUIZ.length - 1 ? "Finish Quiz" : "Next Question"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

function QuizOption({ icon: Icon, title, questions, time }: any) {
  return (
    <div className="p-5 rounded-xl border border-border bg-secondary/30 hover:border-primary/50 transition-all text-left cursor-pointer group">
      <div className="bg-secondary p-2 rounded-lg w-fit mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-xs text-muted-foreground">{questions} Questions • {time}</p>
    </div>
  );
}
