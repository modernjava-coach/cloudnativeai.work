export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-sky-800 to-cyan-600 text-white px-6 py-12 text-center">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          cloudnative<span className="text-cyan-400">ai.work</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 max-w-2xl mx-auto">
          Building intelligent, cloud-native systems and agentic AI applications that scale and adapt.
        </p>
      </header>

      <section className="max-w-3xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-200">Our Mission</h2>
        <p className="text-slate-100 leading-relaxed">
          We bridge the power of <span className="text-white font-semibold">Cloud-Native Architecture</span> and{" "}
          <span className="text-white font-semibold">Agentic AI</span> to build reliable, self-evolving systems.
          From AWS-optimized microservices to AI agents that automate complex workflows, our focus is on
          efficiency, observability, and intelligence.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-cyan-200">Coming Soon</h2>
        <ul className="space-y-3 text-slate-100">
          <li>🚀 Project showcases — real-world cloud-native + AI systems</li>
          <li>💼 Consulting services — Cloud, AI Agents, and MLOps expertise</li>
          <li>🧩 Educational blog — design patterns and system architecture deep dives</li>
        </ul>
      </section>

      <footer className="mt-16 text-slate-400 text-sm">
        <p>© {new Date().getFullYear()} cloudnativeai.work — Crafted with ☁️ + 🤖</p>
      </footer>
    </div>
  );
}