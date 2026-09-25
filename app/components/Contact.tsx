import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[80vh] items-center px-8 py-32 md:px-16 lg:px-24"
    >
      <Reveal>
        <div className="mx-auto w-full max-w-7xl border-t border-neutral-800 pt-20">
          <p className="mb-10 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
            Get in touch
          </p>

          <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <h2 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                Have an idea?
                <br />
                <span className="text-neutral-500">Let&apos;s build it.</span>
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-400">
                Whether you&apos;re looking to build a product, improve an
                existing experience or simply have an idea worth exploring,
                I&apos;d love to hear about it.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p className="mb-4 text-sm text-neutral-500">
                Start a conversation
              </p>

              <a
                href="mailto:simonjordandevelopment@gmail.com"
                className="group flex items-center justify-between border-b border-neutral-700 py-5 text-xl transition-colors hover:border-white"
              >
                Email me
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>

              <div className="mt-10 flex gap-6 text-sm text-neutral-500">
                <a href="www.linkedin.com/in/simon-jordan-40217bbb

" className="transition-colors hover:text-white">
                  LinkedIn
                </a>

                <a href="https://github.com/simonjordan14" className="transition-colors hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
