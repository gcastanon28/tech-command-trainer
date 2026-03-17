export default function QuickReviewPage() {
    const cards = [
      {
        front: "What does ls -la do?",
        back: "Lists all files, including hidden ones, in long format.",
      },
      {
        front: "What does pwd return?",
        back: "The current working directory.",
      },
      {
        front: "What does pip install do?",
        back: "Installs a Python package from PyPI.",
      },
      {
        front: "What does chmod 755 mean?",
        back: "Owner can read/write/execute, group and others can read/execute.",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Quick Review
          </p>
          <h1 className="mt-2 text-4xl font-bold">Flashcards</h1>
          <p className="mt-3 text-white/65">
            Use these quick review cards to reinforce command knowledge.
          </p>
  
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 p-6"
              >
                <p className="text-xs uppercase tracking-wide text-white/45">
                  Front
                </p>
                <h2 className="mt-2 text-xl font-semibold">{card.front}</h2>
  
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-xs uppercase tracking-wide text-white/45">
                    Back
                  </p>
                  <p className="mt-2 text-white/75">{card.back}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }