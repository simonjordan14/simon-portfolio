export default function Hero() {
  return (
    <section className="flex min-h-screen items-center px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl">
        <p
          className="animate-fade-up mb-6 text-sm font-medium uppercase tracking-[0.3em] text-neutral-500"
          style={{ animationDelay: "100ms" }}
        >
          Frontend Developer · Malta · UK
        </p>

        <h1
          className="animate-fade-up text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          style={{ animationDelay: "250ms" }}
        >
          I build digital
          <br />
          experiences that
          <br />
          <span className="text-neutral-500">feel effortless.</span>
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-xl text-lg leading-8 text-neutral-400"
          style={{ animationDelay: "450ms" }}
        >
          I turn complex ideas into fast, polished and intuitive web experiences —
          from first concept to production.
        </p>

        <div
          className="animate-fade-up mt-10 flex gap-4"
          style={{ animationDelay: "650ms" }}
        >
        <a
          href="#projects"
          className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-neutral-200"
        >
          View my work
        </a>
          <a
            href="#contact"
            className="rounded-full border border-neutral-700 px-6 py-3 font-medium transition hover:border-neutral-400"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </section>
  );
}
