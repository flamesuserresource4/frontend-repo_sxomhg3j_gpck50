import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Setup from './components/Setup'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Setup />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-10 text-center text-xs text-white/60">
        <p>© {new Date().getFullYear()} FluxEdit. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
