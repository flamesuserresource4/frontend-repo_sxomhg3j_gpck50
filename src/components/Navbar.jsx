function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded bg-gradient-to-br from-indigo-400 via-purple-400 to-orange-300" />
            <span className="text-sm font-semibold tracking-tight">FluxEdit</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#setup" className="hover:text-white">Setup</a>
            <a href="#" className="hover:text-white">How it works</a>
            <a href="#" className="hover:text-white">Pricing</a>
          </nav>
          <a
            href="#setup"
            className="rounded-lg bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
          >
            Try it
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
