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

      <section className="w-full max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-blue-100">Project Showcases</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {/* Project 1 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-cyan-300">Health Care Assistant</h3>
              <a
                href="https://github.com/modernjava-coach/health-care-assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
            <span className="inline-block px-3 py-1 bg-blue-600/50 rounded-full text-xs font-semibold mb-4">
              Healthcare AI
            </span>
            <p className="text-gray-200 text-sm mb-4">
              Intelligent assistant for generating SOAP notes and medical codes from patient data.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Python", "FastAPI", "LangChain", "AWS Bedrock", "AWS Lambda"].map((tech) => (
                <span key={tech} className="bg-black/30 px-2 py-1 rounded text-xs text-blue-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-green-300">Health Care Assistant (Spring)</h3>
              <a
                href="https://github.com/modernjava-coach/health-care-assistant-spring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-300 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
            <span className="inline-block px-3 py-1 bg-green-600/50 rounded-full text-xs font-semibold mb-4">
              Enterprise Healthcare AI
            </span>
            <p className="text-gray-200 text-sm mb-4">
              Intelligent assistant for generating SOAP notes and medical codes from patient data.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "Spring AI", "AWS Lambda"].map((tech) => (
                <span key={tech} className="bg-black/30 px-2 py-1 rounded text-xs text-green-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 mt-16">
        <h2 className="text-2xl font-semibold text-blue-100">Coming Soon</h2>
        <ul className="space-y-3 text-white">
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