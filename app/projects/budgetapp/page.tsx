import Link from "next/link";
import Reveal from "../../components/Reveal";

export default function BudgetAppProject() {
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
              Budget<span className="text-neutral-500">App.</span>
            </h1>

            <div className="mt-12 grid gap-10 border-t border-neutral-800 pt-8 md:grid-cols-2">
              <p className="max-w-xl text-xl leading-8 text-neutral-300">
                A personal finance platform designed to make everyday spending
                easier to understand, manage and plan ahead.
              </p>

              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <p className="text-neutral-600">Role</p>
                  <p className="mt-2">Design & Development</p>
                </div>

                <div>
                  <p className="text-neutral-600">Stack</p>
                  <p className="mt-2">React · Node.js · MongoDB</p>
                </div>

                <div>
                  <p className="text-neutral-600">Type</p>
                  <p className="mt-2">Personal Project</p>
                </div>

                <div>
                  <p className="text-neutral-600">Status</p>
                  <p className="mt-2">In Development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main project image */}
          <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
            <img
              src="/images/budgetapp.png"
              alt="BudgetApp dashboard"
              className="h-auto w-full"
            />
          </div>
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
                    More than tracking{" "}
                    <span className="text-neutral-500">what you spent.</span>
                  </h2>

                  <div className="mt-10 grid gap-8 text-neutral-400 md:grid-cols-2">
                    <p className="leading-7">
                      BudgetApp started as a way to make everyday expenses
                      easier to understand. Instead of simply recording
                      transactions, the goal is to give users a clear picture of
                      what has been paid, what is still due and what is coming
                      next.
                    </p>

                    <p className="leading-7">
                      The application supports single and recurring expenses,
                      categories and tags, payment status tracking and visual
                      progress, bringing the information together into one
                      simple financial overview.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
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
                      Built around real{" "}
                      <span className="text-neutral-500">
                        everyday spending.
                      </span>
                    </h2>

                    <div className="border-t border-neutral-800">
                      {[
                        {
                          number: "01",
                          title: "Single & recurring expenses",
                          description:
                            "Track one-off costs alongside repeating expenses, with individual due dates and payment statuses.",
                        },
                        {
                          number: "02",
                          title: "Categories & tags",
                          description:
                            "Organise expenses into meaningful categories and tags to understand where money is going.",
                        },
                        {
                          number: "03",
                          title: "Progress tracking",
                          description:
                            "See paid, unpaid and overdue expenses with visual progress across recurring payments.",
                        },
                        {
                          number: "04",
                          title: "Financial overview",
                          description:
                            "Bring totals, spending patterns and upcoming expenses together into a clear dashboard.",
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
          <section className="pb-32">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                    Recurring expenses
                  </p>

                  <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                    Know what&apos;s paid.
                    <br />
                    <span className="text-neutral-500">
                      Know what&apos;s next.
                    </span>
                  </h2>

                  <p className="mt-8 max-w-md leading-7 text-neutral-400">
                    Recurring expenses are broken down into individual payments,
                    making it easy to see progress over time and understand
                    which payments have been completed and which are still
                    ahead.
                  </p>

                  <div className="mt-10 border-t border-neutral-800 pt-8">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-2xl font-semibold">Progress</p>
                        <p className="mt-2 text-sm text-neutral-500">
                          Payment status at a glance
                        </p>
                      </div>

                      <div>
                        <p className="text-2xl font-semibold">Timeline</p>
                        <p className="mt-2 text-sm text-neutral-500">
                          Month-by-month tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                  <img
                    src="/images/budgetapp-recurring.png"
                    alt="BudgetApp recurring expense details showing payment progress and monthly status"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </Reveal>
          </section>
          <section className="pb-32">
            <Reveal>
              <div className="border-t border-neutral-800 pt-20">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                      Engineering
                    </p>
                  </div>

                  <div>
                    <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                      Built beyond the{" "}
                      <span className="text-neutral-500">interface.</span>
                    </h2>

                    <p className="mt-10 max-w-2xl leading-7 text-neutral-400">
                      BudgetApp is built as a full-stack application. The
                      frontend communicates with a Node.js API responsible for
                      expense management, recurring payments, user data and
                      persistence in MongoDB.
                    </p>

                    <div className="mt-16 grid gap-x-12 gap-y-10 border-t border-neutral-800 pt-10 sm:grid-cols-2">
                      {[
                        {
                          title: "Frontend",
                          value: "React · Material UI",
                        },
                        {
                          title: "Backend",
                          value: "Node.js · Express",
                        },
                        {
                          title: "Database",
                          value: "MongoDB · Mongoose",
                        },
                        {
                          title: "Architecture",
                          value: "REST API · Custom hooks",
                        },
                      ].map((item) => (
                        <div key={item.title}>
                          <p className="text-sm text-neutral-600">
                            {item.title}
                          </p>
                          <p className="mt-2 text-xl font-medium">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
          <section className="pb-32">
            <Reveal>
              <div className="border-t border-neutral-800 pt-20">
                <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                      What&apos;s next
                    </p>
                  </div>

                  <div>
                    <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                      From tracking money to{" "}
                      <span className="text-neutral-500">
                        planning what&apos;s ahead.
                      </span>
                    </h2>

                    <p className="mt-10 max-w-2xl leading-7 text-neutral-400">
                      BudgetApp is still evolving. The next stage is focused on
                      helping users plan beyond individual expenses — connecting
                      spending to longer-term plans, upcoming commitments and
                      better financial decisions.
                    </p>

                    <div className="mt-16 border-t border-neutral-800">
                      {[
                        {
                          number: "01",
                          title: "Plans",
                          description:
                            "Group related expenses around larger goals and events, from holidays to major purchases.",
                        },
                        {
                          number: "02",
                          title: "Upcoming commitments",
                          description:
                            "Give users a clearer view of renewals, memberships and expenses approaching in the future.",
                        },
                        {
                          number: "03",
                          title: "Explore options",
                          description:
                            "Help users understand upcoming costs while exploring alternative services and opportunities.",
                        },
                      ].map((item) => (
                        <div
                          key={item.number}
                          className="grid gap-4 border-b border-neutral-800 py-8 md:grid-cols-[60px_1fr_1fr]"
                        >
                          <span className="text-sm text-neutral-600">
                            {item.number}
                          </span>

                          <h3 className="text-xl font-medium">{item.title}</h3>

                          <p className="max-w-md leading-7 text-neutral-500">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
          <section className="pb-20">
            <Reveal>
              <div className="border-t border-neutral-800 pt-16">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
                  That&apos;s BudgetApp
                </p>

                <Link
                  href="/#projects"
                  className="group inline-flex items-center gap-4 text-3xl font-semibold tracking-tight md:text-5xl"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-2">
                    ←
                  </span>
                  Back to projects
                </Link>
              </div>
            </Reveal>
          </section>
        </div>
      </section>
    </main>
  );
}
