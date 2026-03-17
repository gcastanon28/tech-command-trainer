export default function SettingsPage() {
    return (
      <main className="min-h-screen bg-[#0a0f1c] px-6 py-10 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/80">
            Settings
          </p>
          <h1 className="mt-2 text-4xl font-bold">App settings</h1>
          <p className="mt-3 text-white/65">
            Manage preferences for your learning dashboard.
          </p>
  
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Profile</h2>
              <p className="mt-3 text-white/65">Name: Gabriel</p>
              <p className="mt-1 text-white/65">Track: Linux + Python Mastery</p>
              <button className="mt-5 rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400">
                Edit profile
              </button>
            </div>
  
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">Notifications</h2>
              <p className="mt-3 text-white/65">Daily challenge reminders: On</p>
              <p className="mt-1 text-white/65">Progress alerts: On</p>
              <button className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                Manage alerts
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }