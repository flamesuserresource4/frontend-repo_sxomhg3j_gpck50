function Setup() {
  return (
    <section id="setup" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Setup takes one minute. No engineering project required.
          </h2>
          <p className="mt-4 text-white/80">
            Add a single lightweight script (or use GTM) — and that’s it. Once installed, you can change anything on the site:
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Move elements',
            'Rewrite sections',
            'Swap images',
            'Show/hide components',
            'Run A/B tests',
            'Launch short-term promotions',
            'Target specific users or traffic sources',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white/85 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-400" />
                <p className="text-sm font-medium">{item}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 backdrop-blur">
          <p>Your developers don’t need to maintain anything. Your CMS stays untouched.</p>
        </div>
      </div>
    </section>
  )
}

export default Setup
