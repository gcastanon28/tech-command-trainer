export default function CommandLibraryPage() {
    const commands = [
      {
        name: "ls",
        category: "Linux",
        description: "Lists files and folders in the current directory.",
        example: "ls -la",
      },
      {
        name: "cd",
        category: "Linux",
        description: "Changes the current directory.",
        example: "cd /var/log",
      },
      {
        name: "pwd",
        category: "Linux",
        description: "Shows the current working directory.",
        example: "pwd",
      },
      {
        name: "python",
        category: "Python",
        description: "Runs the Python interpreter.",
        example: "python3 app.py",
      },
      {
        name: "pip install",
        category: "Python",
        description: "Installs a Python package.",
        example: "pip install requests",
      },
      {
        name: "chmod",
        category: "Linux",
        description: "Changes file permissions.",
        example: "chmod 755 script.sh",
      },
    ];
  
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Command Library
          </p>
          <h1 className="mt-2 text-4xl font-bold">Browse commands</h1>
          <p className="mt-3 text-white/65">
            Search and review useful Linux and Python commands with examples.
          </p>
  
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {commands.map((command) => (
              <div
                key={command.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{command.name}</h2>
                  <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
                    {command.category}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {command.description}
                </p>
                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-xs uppercase tracking-wide text-white/45">
                    Example
                  </p>
                  <code className="mt-2 block text-sm text-blue-200">
                    {command.example}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }