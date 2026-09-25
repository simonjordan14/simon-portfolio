import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-32 md:px-16 lg:px-24">
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                Selected work
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Things I&apos;ve built.
              </h2>
            </div>

            <span className="hidden text-sm text-neutral-600 md:block">
              01 — Projects
            </span>
          </div>

          <article className="group border-t border-neutral-800 py-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-sm text-neutral-600">01</span>

                  <h3 className="mt-6 text-3xl font-semibold tracking-tight">
                    BudgetApp
                  </h3>

                  <p className="mt-4 max-w-md leading-7 text-neutral-400">
                    A personal finance platform designed to make managing
                    everyday and recurring expenses simple, visual and useful.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {["React", "Node.js", "MongoDB", "Material UI"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-400"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <a
                  href="/projects/budgetapp"
                  className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium"
                >
                  View project
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                <img
                  src="/images/budgetapp.png"
                  alt="BudgetApp yearly overview dashboard"
                  className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              </div>
            </div>
          </article>
        </div>
      </Reveal>
    </section>
  );
}
