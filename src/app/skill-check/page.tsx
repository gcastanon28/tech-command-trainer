export default function SkillCheckPage() {
    const questions = [
      {
        question: "Which command shows the current directory?",
        options: ["ls", "pwd", "cd", "mkdir"],
        answer: "pwd",
      },
      {
        question: "Which command installs a Python package?",
        options: ["pip install", "python run", "chmod", "touch"],
        answer: "pip install",
      },
      {
        question: "Which command changes directories?",
        options: ["mv", "grep", "cd", "cat"],
        answer: "cd",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Skill Check
          </p>
          <h1 className="mt-2 text-4xl font-bold">Quiz practice</h1>
          <p className="mt-3 text-white/65">
            Test your command-line knowledge with a few quick questions.
          </p>
  
          <div className="mt-8 space-y-5">
            {questions.map((q, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-lg font-semibold">
                  {index + 1}. {q.question}
                </h2>
  
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {q.options.map((option) => (
                    <button
                      key={option}
                      className={`rounded-xl border px-4 py-3 text-left ${
                        option === q.answer
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
                          : "border-white/10 bg-white/5 text-white/80"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
  
                <p className="mt-4 text-sm text-white/50">
                  Correct answer: <span className="text-blue-200">{q.answer}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }