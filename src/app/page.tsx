// src/app/page.tsx
import Link from "next/link";

type Stat = {
  label: string;
  value: string;
  sub?: string;
};

type FeatureCard = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: React.ReactNode;
};

export default function DashboardPage() {
  const userName = "Gabriel"; // later: replace with auth user name
  const todayGoal = "Complete 1 quiz + review 10 commands";

  const stats: Stat[] = [
    { label: "Commands Learned", value: "24", sub: "+3 this week" },
    { label: "Quiz Accuracy", value: "87%", sub: "Last 7 days" },
    { label: "Current Streak", value: "6 days", sub: "Keep it going" },
    { label: "Daily XP", value: "240", sub: "Level 24 → 25" },
  ];

  const features: FeatureCard[] = [
    {
      title: "Command Library",
      description: "Search Linux & Python commands with examples and notes.",
      href: "/repository",
      cta: "Browse commands",
      icon: <IconBook />,
    },
    {
      title: "Quick Review",
      description: "Flashcards to lock in syntax and purpose fast.",
      href: "/flashcards",
      cta: "Start review",
      icon: <IconCards />,
    },
    {
      title: "Skill Check",
      description: "Short quizzes to test what you actually remember.",
      href: "/quizzes",
      cta: "Take a quiz",
      icon: <IconQuiz />,
    },
    {
      title: "Today’s Challenge",
      description: "One practical task a day to build real consistency.",
      href: "/daily-challenge",
      cta: "Begin challenge",
      icon: <IconBolt />,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top bar */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
              <IconTerminal />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Tech Command Trainer</p>
              <h1 className="text-lg font-semibold leading-tight">
                Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 md:inline-flex"
              href="#"
              target="_blank"
              rel="noreferrer"
              title="Add your deployed URL here"
            >
              Live Demo
            </a>
            <a
              className="hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 md:inline-flex"
              href="https://github.com/gcastanon28/tech-command-trainer"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <button className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-zinc-900 text-white">
                {userName.slice(0, 1)}
              </span>
              <span className="hidden sm:inline">Profile</span>
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Hero */}
        <section className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 ring-1 ring-white/5">
          <p className="text-sm text-zinc-300">Welcome back,</p>
          <div className="mt-1 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                {userName} 👋
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-zinc-300">
                Practice Linux + Python commands daily, test your memory, and build consistency like a real engineer.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/daily-challenge"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Start today’s challenge
              </Link>
              <Link
                href="/quizzes"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                Take a quick quiz
              </Link>
            </div>
          </div>

          {/* Goal */}
          <div className="mt-5 flex flex-col gap-2 rounded-xl border border-white/10 bg-black/20 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 ring-1 ring-white/10">
                <IconTarget />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-zinc-400">
                  Today’s goal
                </p>
                <p className="text-sm font-medium text-zinc-100">
                  {todayGoal}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200 hover:bg-white/10">
                Edit goal
              </button>
              <button className="rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-zinc-950 hover:bg-emerald-300">
                Mark done
              </button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5"
            >
              <p className="text-xs uppercase tracking-wide text-zinc-400">
                {s.label}
              </p>
              <p className="mt-2 text-2xl font-semibold">{s.value}</p>
              {s.sub ? (
                <p className="mt-1 text-xs text-zinc-400">{s.sub}</p>
              ) : null}
            </div>
          ))}
        </section>

        {/* Main grid */}
        <section className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Features */}
          <div className="lg:col-span-2">
            <div className="mb-3 flex items-end justify-between">
              <div>
                <h3 className="text-lg font-semibold">Start learning</h3>
                <p className="text-sm text-zinc-400">
                  Pick a mode. Keep it simple. Stay consistent.
                </p>
              </div>
              <Link
                href="/settings"
                className="text-sm text-zinc-300 hover:text-white"
              >
                Settings →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <Link
                  key={f.title}
                  href={f.href}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5 transition hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                      {f.icon}
                    </div>
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-200">
                      Open →
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-semibold">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-400">
                    {f.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-zinc-950 group-hover:bg-zinc-200">
                    {f.cta}
                    <span aria-hidden>→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right rail */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-5 ring-1 ring-white/5">
            <h3 className="text-lg font-semibold">Today</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Quick plan to keep momentum.
            </p>

            <div className="mt-4 space-y-3">
              <TaskRow
                title="Warm-up"
                desc="Review 5 commands"
                badge="5 min"
              />
              <TaskRow
                title="Skill Check"
                desc="Take 1 quiz"
                badge="10 min"
              />
              <TaskRow
                title="Challenge"
                desc="Complete today’s task"
                badge="15 min"
              />
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs uppercase tracking-wide text-zinc-400">
                Tip
              </p>
              <p className="mt-2 text-sm text-zinc-200">
                Consistency beats intensity. Do the <span className="font-semibold">daily challenge</span> even on busy days.
              </p>
            </div>

            <div className="mt-5 flex gap-2">
              <Link
                href="/daily-challenge"
                className="flex-1 rounded-xl bg-white px-4 py-2.5 text-center text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
              >
                Start now
              </Link>
              <Link
                href="/repository"
                className="flex-1 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Browse
              </Link>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/10 pt-6 text-sm text-zinc-500">
          Built with Next.js + Tailwind + Firebase • <span className="text-zinc-400">Tech Command Trainer</span>
        </footer>
      </div>
    </main>
  );
}

function TaskRow(props: { title: string; desc: string; badge: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
      <div>
        <p className="text-sm font-semibold text-zinc-100">{props.title}</p>
        <p className="text-xs text-zinc-400">{props.desc}</p>
      </div>
      <span className="rounded-lg border border-white/10 bg-black/30 px-2 py-1 text-xs text-zinc-300">
        {props.badge}
      </span>
    </div>
  );
}

/* ---------- Icons (no extra dependencies) ---------- */

function IconTerminal() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M4 17l6-5-6-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M4 5a3 3 0 013-3h12v18H7a3 3 0 01-3-3V5z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 2v18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconCards() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M7 7h13v13H7V7z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M4 4h13v13"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconQuiz() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M4 4h16v16H4V4z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M8 8h8M8 12h8M8 16h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M13 2L3 14h8l-1 8 11-14h-8l0-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white">
      <path
        d="M12 22a10 10 0 110-20 10 10 0 010 20z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 16a4 4 0 110-8 4 4 0 010 8z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 12l7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
