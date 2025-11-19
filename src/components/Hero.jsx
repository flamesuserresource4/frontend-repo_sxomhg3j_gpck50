import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950 text-white flex items-center">
      {/* Animated 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient soft overlay for readability (doesn't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Live site editing with AI
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Make live changes to your website in seconds. No devs. No deploys. No waiting.
          </h1>

          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Run promotions, test ideas, fix copy, or update layouts instantly — just by telling the AI what you want.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#setup"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Make a change right now →
            </a>

            <a
              href="/test"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Check backend & DB
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 text-white/80 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold text-white/90">Your website shouldn’t take a sprint to update.</h3>
              <p className="mt-2 text-sm leading-relaxed">
                When you need a new banner for Black Friday, a pricing tweak for a campaign, or a quick A/B test — it should happen now, not “after the next release.”
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-sm font-semibold text-white/90">With our AI editor, you can:</h3>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed list-disc pl-5">
                <li>Launch temporary promos (hours or days, not weeks)</li>
                <li>Adjust landing pages for specific traffic sources</li>
                <li>Rewrite headlines or CTAs instantly</li>
                <li>Push last-minute changes during campaigns</li>
                <li>Test ideas the moment you have them</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-sm text-white/70">
            <p>Your site becomes flexible. Your team becomes fast. Your ideas go live immediately.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
