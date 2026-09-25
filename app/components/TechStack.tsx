import Reveal from "./Reveal";

const technologies = [
  { name: "React", type: "Frontend" },
  { name: "Next.js", type: "Framework" },
  { name: "TypeScript", type: "Language" },
  { name: "JavaScript", type: "Language" },
  { name: "Material UI", type: "UI" },
  { name: "Node.js", type: "Backend" },
  { name: "MongoDB", type: "Database" },
  { name: "Git", type: "Workflow" },
];

export default function TechStack() {
  return (
    <section className="px-8 py-32 md:px-16 lg:px-24">
      <Reveal>
        <div className="mx-auto max-w-7xl border-t border-neutral-800 pt-20">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                Tech stack
              </p>
            </div>

            <div>
              <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-6xl">
                Tools I use to <span className="text-neutral-500">build.</span>
              </h2>

              <div className="border-t border-neutral-800">
                {technologies.map((technology, index) => (
                  <div
                    key={technology.name}
                    className="group flex items-center justify-between border-b border-neutral-800 py-6"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-xs text-neutral-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="text-xl font-medium transition-transform duration-300 group-hover:translate-x-2">
                        {technology.name}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-500">
                      {technology.type}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
