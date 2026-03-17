const progress = [
    { label: "Linux Shell", value: 78 },
    { label: "Python Basics", value: 92 },
    { label: "Python Advanced", value: 45 },
    { label: "Scripting", value: 61 },
    { label: "Networking", value: 30 },
  ];
  
  export default function ProgressPage() {
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Progress
          </p>
          <h1 className="mt-2 text-4xl font-bold">Your learning progress</h1>
          <p className="mt-3 text-white/65">
            Track your current command-line growth across different categories.
          </p>
  
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-6">
              {progress.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-white/85">{item.label}</span>
                    <span className="text-sm text-white/55">{item.value}%</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-white/10">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }