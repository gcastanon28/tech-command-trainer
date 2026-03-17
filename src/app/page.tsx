import Link from "next/link";

const stats = [
  { label: "Commands Learned", value: "24", subtext: "+4 this week" },
  { label: "Quiz Accuracy", value: "87%", subtext: "Last 7 days" },
  { label: "Current Streak", value: "12 days", subtext: "Best streak: 18" },
  { label: "Daily XP", value: "240", subtext: "Level 24" },
];

const modules = [
  {
    title: "Command Library",
    description: "Browse Linux and Python commands with examples and usage notes.",
    href: "#",
    button: "Browse Commands",
  },
  {
    title: "Quick Review",
    description: "Use flashcards to lock in syntax, definitions, and common flags.",
    href: "#",
    button: "Start Review",
  },
  {
    title: "Skill Check",
    description: "Take quizzes to test your command-line knowledge and accuracy.",
    href: "#",
    button: "Take Quiz",
  },
  {
    title: "Today's Challenge",
    description: "Complete one focused task today to keep your streak alive.",
    href: "#",
    button: "Begin Challenge",
  },
];

const progress = [
  { name: "Linux Shell", value: 78 },
  { name: "Python Basics", value: 92 },
  { name: "Python Advanced", value: 45 },
  { name: "Scripting", value: 61 },
  { name: "Networking", value: 30 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 border-r border-white/10 bg-[#08111f] lg:flex lg:flex-col">
          <div className="border-b border-white/10 px-6 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-xl">
                &gt;_
              </div>
              <div>
                <p className="text-xl font-bold">Tech Command Trainer</p>
                <p className="text-sm text-white/60">Linux + Python Mastery</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6">
            <div className="space-y-2">
              <SidebarItem label="Dashboard" href="/" active />
              <SidebarItem label="Command Library" href="/command-library" />
              <SidebarItem label="Quick Review" href="/quick-review" />
              <SidebarItem label="Skill Check" href="/skill-check" />
              <SidebarItem label="Today's Challenge" href="/todays-challenge" />
              <SidebarItem label="Progress" href="/progress" />
              <SidebarItem label="Settings" href="/settings" />
            </div>
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold">Daily Goal</p>
              <p className="mt-1 text-sm text-white/70">
                Complete 1 quiz and review 10 commands.
              </p>
              <button className="mt-4 w-full rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400">
                Continue Learning
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <section className="flex-1">
          {/* Top bar */}
          <header className="border-b border-white/10 bg-white/5 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
                  Dashboard
                </p>
                <h1 className="mt-1 text-3xl font-bold tracking-tight">
                  Welcome back, Gabriel
                </h1>
                <p className="mt-2 text-white/65">
                  Stay consistent, sharpen your Linux skills, and build real command-line confidence.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/gcastanon28/tech-command-trainer"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                  href="https://studio---studio-1830710449-3d060.us-central1.hosted.app"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400"
                >
                  Live App
                </a>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-6 py-8">
            {/* Hero */}
            <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent p-8 shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                <div>
                  <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200">
                    Level 24 • 240 XP
                  </p>
                  <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight">
                    Master Linux and Python faster with focused daily practice.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base text-white/70">
                    Review commands, test your knowledge, and build consistency through guided challenges, flashcards, and skill checks.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
                      Start Today&apos;s Challenge
                    </button>
                    <button className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                      Take a Quick Quiz
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <p className="text-sm font-semibold text-white/80">Today&apos;s Goal</p>
                  <div className="mt-4 space-y-4">
                    <GoalRow title="Review 10 commands" status="In progress" />
                    <GoalRow title="Complete 1 quiz" status="Ready" />
                    <GoalRow title="Keep streak alive" status="12 days" />
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg"
                >
                  <p className="text-sm text-white/60">{stat.label}</p>
                  <p className="mt-3 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/50">{stat.subtext}</p>
                </div>
              ))}
            </section>

            {/* Main grid */}
            <section className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
              {/* Left side */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-xl">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Learning Modules</h3>
                      <p className="mt-1 text-sm text-white/60">
                        Pick the mode that fits your study session.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {modules.map((module) => (
                      <Link
                        key={module.title}
                        href={module.href}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-400/40 hover:bg-white/10"
                      >
                        <h4 className="text-lg font-semibold">{module.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-white/65">
                          {module.description}
                        </p>
                        <div className="mt-5 inline-flex rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400">
                          {module.button}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">Recent Activity</h3>
                      <p className="mt-1 text-sm text-white/60">
                        Your latest learning progress.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <ActivityRow
                      title="Completed Linux Shell Quiz"
                      time="2 hours ago"
                      score="Score: 90%"
                    />
                    <ActivityRow
                      title="Reviewed 12 flashcards"
                      time="Earlier today"
                      score="Mastery increased"
                    />
                    <ActivityRow
                      title="Finished Daily Challenge"
                      time="Yesterday"
                      score="Streak maintained"
                    />
                  </div>
                </div>
              </div>

              {/* Right side */}
              <div className="space-y-6">
                <div className="rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-xl">
                  <h3 className="text-2xl font-bold">Skill Progress</h3>
                  <p className="mt-1 text-sm text-white/60">
                    Current proficiency by category.
                  </p>

                  <div className="mt-6 space-y-5">
                    {progress.map((item) => (
                      <div key={item.name}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="text-white/85">{item.name}</span>
                          <span className="text-white/60">{item.value}%</span>
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

                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-cyan-400/10 p-6 shadow-xl">
                  <h3 className="text-2xl font-bold">Keep Momentum</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Small daily sessions beat random long sessions. Stay consistent and build real command memory over time.
                  </p>
                  <button className="mt-5 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200">
                    Resume Learning
                  </button>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

function SidebarItem({
  label,
  href,
  active = false,
}: {
  label: string;
  href: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
        active
          ? "bg-blue-500/15 text-white"
          : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function GoalRow({
  title,
  status,
}: {
  title: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      <span className="text-sm text-white/85">{title}</span>
      <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-200">
        {status}
      </span>

    </div>
  );
}

function ActivityRow({
  title,
  time,
  score,
}: {
  title: string;
  time: string;
  score: string;
}) {
  return (
    <div className="flex items-start justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
      <div>
        <p className="font-medium text-white">{title}</p>
        <p className="mt-1 text-sm text-white/55">{time}</p>
      </div>
      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        {score}
      </span>
 6067f2c (Sync local workspace and replace dashboard)
    </div>
  );
}