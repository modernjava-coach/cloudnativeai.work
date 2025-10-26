export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 via-sky-500 to-cyan-400 text-white px-6 py-12 text-center">
      <header className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          cloudnative<span className="text-cyan-900">ai.work</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-md">
          Building intelligent, cloud-native systems and agentic AI applications that scale and adapt.
        </p>
      </header>

      <section className="max-w-3xl mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-100">Our Mission</h2>
        <p className="text-white leading-relaxed">
          We bridge the power of <span className="font-semibold">Cloud-Native Architecture</span> and{" "}
          <span className="font-semibold">Agentic AI</span> to build reliable, self-evolving systems.
          From AWS-optimized microservices to AI agents that automate complex workflows, our focus is on
          efficiency, observability, and intelligence.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-100">Coming Soon</h2>
        <ul className="space-y-3 text-white">
          <li>🚀 Project showcases — real-world cloud-native + AI systems</li>
          <li>💼 Consulting services — Cloud, AI Agents, and MLOps expertise</li>
          <li>🧩 Educational blog — design patterns and system architecture deep dives</li>
        </ul>
      </section>

      <footer className="mt-16 text-white/80 text-sm">
        <p>© {new Date().getFullYear()} cloudnativeai.work — Crafted with ☁️ + 🤖</p>
      </footer>
    </div>
  );
}