
"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/layout/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, RotateCcw, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { FLASHCARDS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function FlashcardsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());

  const currentCard = FLASHCARDS[currentIndex];
  const progress = ((currentIndex + 1) / FLASHCARDS.length) * 100;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % FLASHCARDS.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + FLASHCARDS.length) % FLASHCARDS.length);
    }, 150);
  };

  const toggleMastery = () => {
    setMasteredIds((prev) => {
      const next = new Set(prev);
      if (next.has(currentCard.id)) next.delete(currentCard.id);
      else next.add(currentCard.id);
      return next;
    });
  };

  return (
    <div className="flex h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 ml-64 overflow-y-auto p-12 flex flex-col">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="text-primary h-8 w-8" />
            <h1 className="text-4xl font-headline font-bold">Smart Flashcards</h1>
          </div>
          <p className="text-muted-foreground">Test your memory on essential syntax and commands.</p>
        </header>

        <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full">
          <div className="w-full flex justify-between items-center mb-6 text-sm">
            <span className="text-muted-foreground">Card {currentIndex + 1} of {FLASHCARDS.length}</span>
            <span className="font-bold text-primary">{masteredIds.size} Mastered</span>
          </div>

          <div className="w-full h-2 bg-secondary rounded-full mb-12 overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>

          <div 
            className={cn(
              "relative w-full aspect-[16/10] cursor-pointer group perspective-1000",
              isFlipped && "flashcard-flipped"
            )}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="flashcard-inner relative w-full h-full duration-700">
              {/* Front */}
              <Card className="flashcard-front absolute inset-0 bg-card border-border flex items-center justify-center p-12 shadow-2xl">
                <div className="text-center">
                  <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">{currentCard.category}</Badge>
                  <h2 className="text-3xl font-headline font-semibold leading-tight">{currentCard.question}</h2>
                  <p className="mt-8 text-muted-foreground text-sm font-medium opacity-50 flex items-center justify-center gap-2">
                    <RotateCcw className="h-4 w-4" /> Click to flip
                  </p>
                </div>
              </Card>

              {/* Back */}
              <Card className="flashcard-back absolute inset-0 bg-secondary border-primary flex items-center justify-center p-12 shadow-2xl">
                <div className="text-center">
                  <Badge className="mb-6 bg-accent/20 text-accent border-accent/30">Answer</Badge>
                  <pre className="text-4xl font-code font-bold text-accent">{currentCard.answer}</pre>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex gap-6 mt-12 w-full">
            <Button variant="outline" size="lg" onClick={handlePrev} className="flex-1 h-14">
              <ChevronLeft className="mr-2 h-5 w-5" /> Previous
            </Button>
            <Button 
              size="lg" 
              onClick={toggleMastery}
              className={cn(
                "flex-1 h-14 transition-all",
                masteredIds.has(currentCard.id) 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "bg-secondary hover:bg-secondary/80 border border-border"
              )}
            >
              <CheckCircle2 className="mr-2 h-5 w-5" /> 
              {masteredIds.has(currentCard.id) ? "Mastered" : "Mark as Mastered"}
            </Button>
            <Button variant="outline" size="lg" onClick={handleNext} className="flex-1 h-14">
              Next <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
