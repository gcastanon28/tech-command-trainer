export default function TodaysChallengePage() {
    const tasks = [
      "Navigate to a folder using cd and confirm with pwd.",
      "List all files, including hidden ones, using ls -la.",
      "Create a new file and change its permissions with chmod.",
      "Run a simple Python file from the terminal.",
    ];
  
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Today&apos;s Challenge
          </p>
          <h1 className="mt-2 text-4xl font-bold">Daily mission</h1>
          <p className="mt-3 text-white/65">
            Complete today&apos;s guided command-line challenge and keep your streak alive.
          </p>
  
          <div className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 p-8">
            <h2 className="text-2xl font-semibold">
              Linux + Python confidence builder
            </h2>
            <p className="mt-3 text-white/70">
              Work through these steps in order and mark them complete when done.
            </p>
  
            <div className="mt-8 space-y-4">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-semibold text-blue-200">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-white/85">{task}</p>
                </div>
              ))}
            </div>
  
            <button className="mt-8 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
              Mark challenge complete
            </button>
          </div>
        </div>
      </main>
    );
  }