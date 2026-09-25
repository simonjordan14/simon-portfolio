import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="px-8 py-32 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl border-t border-neutral-800 pt-20">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
                About me
              </p>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                I like turning complex problems into{" "}
                <span className="text-neutral-500">simple experiences.</span>
              </h2>

              <div className="mt-10 grid gap-8 text-neutral-400 md:grid-cols-2">
                <p className="leading-7">
                  I&apos;m Simon, a frontend developer based in Malta and the UK,
                  specialising in React and TypeScript. I build production
                  applications with a focus on usability, maintainability and
                  clean user experiences.
                </p>

                <p className="leading-7">
                  My work ranges from data-heavy interfaces and complex forms to
                  APIs, authentication, permissions and reusable component
                  systems. Outside of work, I&apos;m building products of my own
                  and continuously exploring new ideas.
                </p>
              </div>

              <div className="mt-16 grid grid-cols-2 gap-8 border-t border-neutral-800 pt-10 md:grid-cols-3">
                <div>
                  <p className="text-2xl font-semibold">React</p>
                  <p className="mt-2 text-sm text-neutral-500">Daily driver</p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">TypeScript</p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Production development
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-semibold">U.K</p>
                  <p className="text-2xl font-semibold">Malta</p>
                  <p className="mt-2 text-sm text-neutral-500">Based in</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
