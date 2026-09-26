import Link from "next/link";

import Reveal from "../../components/Reveal";

export default function BudgetAppLiteProject() {
  return (
    <main className="min-h-screen">
      <section className="px-8 pb-24 pt-10 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <span>←</span>
            Back to projects
          </Link>

          {/* Hero */}
          <div className="pb-20 pt-24 md:pt-32">
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Personal project · 2026
            </p>

            <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              BudgetApp <span className="text-neutral-500">Lite.</span>
            </h1>

            <div className="mt-12 grid gap-10 border-t border-neutral-800 pt-8 md:grid-cols-2">
              <p className="max-w-xl text-xl leading-8 text-neutral-300">
                A lightweight budgeting tool built around one simple question —
                how much money do I have left?
              </p>

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="text-neutral-600">Role</p>
                  <p className="mt-2">Design & Development</p>
                </div>

                <div>
                  <p className="text-neutral-600">Stack</p>
                  <p className="mt-2">Next.js · TypeScript</p>
                </div>

                <div>
                  <p className="text-neutral-600">Storage</p>
                  <p className="mt-2">Local Storage</p>
                </div>

                <div>
                  <p className="text-neutral-600">Status</p>
                  <p className="mt-2">Live</p>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshot */}
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <img
              src="/images/budgetapp-lite.png"
              alt="BudgetApp Lite"
              className="h-auto w-full"
            />
          </div>

          {/* The project */}
          <section className="py-32">
            <Reveal>
              <div className="grid gap-16 border-t border-neutral-800 pt-20 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                    The project
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                    Budgeting doesn&apos;t need to be{" "}
                    <span className="text-neutral-500">complicated.</span>
                  </h2>

                  <div className="mt-10 grid gap-8 text-neutral-400 md:grid-cols-2">
                    <p className="leading-7">
                      BudgetApp Lite strips budgeting back to the essentials.
                      Add your income, record your expenses and immediately see
                      what you have left.
                    </p>

                    <p className="leading-7">
                      There&apos;s no account or complicated setup. Data stays
                      locally in the browser, making the app quick to open,
                      simple to use and useful within seconds.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* Features */}
          <section className="pb-32">
            <Reveal>
              <div className="border-t border-neutral-800 pt-20">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                      Key features
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-16 text-4xl font-bold tracking-tight md:text-6xl">
                      Simple by{" "}
                      <span className="text-neutral-500">design.</span>
                    </h2>

                    <div className="border-t border-neutral-800">
                      {[
                        {
                          number: "01",
                          title: "Track expenses",
                          description:
                            "Add everyday expenses and keep track of your total spending.",
                        },
                        {
                          number: "02",
                          title: "Add your income",
                          description:
                            "Enter your wage to understand how much money is available.",
                        },
                        {
                          number: "03",
                          title: "Remaining budget",
                          description:
                            "Instantly see what remains after expenses are deducted.",
                        },
                        {
                          number: "04",
                          title: "Weekly breakdown",
                          description:
                            "Turn your remaining balance into a simple weekly budget.",
                        },
                      ].map((feature) => (
                        <div
                          key={feature.number}
                          className="grid gap-4 border-b border-neutral-800 py-8 md:grid-cols-[60px_1fr_1fr]"
                        >
                          <span className="text-sm text-neutral-600">
                            {feature.number}
                          </span>

                          <h3 className="text-xl font-medium">
                            {feature.title}
                          </h3>

                          <p className="max-w-md leading-7 text-neutral-500">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* CTA */}
          <section className="pb-20">
            <Reveal>
              <div className="border-t border-neutral-800 pt-20">
                <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                  Try it yourself
                </p>

                <h2 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
                  BudgetApp Lite is{" "}
                  <span className="text-neutral-500">live.</span>
                </h2>

                <div className="mt-10 flex flex-wrap gap-8">
                  <a
                    href="YOUR_LIVE_URL"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-lg font-medium"
                  >
                    Open BudgetApp Lite
                    <span className="transition-transform group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>

                  <Link
                    href="/projects/budgetapp"
                    className="group inline-flex items-center gap-3 text-lg text-neutral-500 transition-colors hover:text-white"
                  >
                    Explore the full BudgetApp
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </Reveal>
          </section>

        </div>
      </section>
    </main>
  );
}