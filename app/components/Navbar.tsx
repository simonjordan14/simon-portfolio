export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-8 py-8 md:px-16 lg:px-24">
        <a href="#top" className="text-xl font-bold tracking-tight">
          SJ<span className="text-neutral-500">.</span>
        </a>

        <div className="flex gap-8 text-sm text-neutral-400">
          <a className="transition hover:text-white" href="#projects">
            Work
          </a>

          <a className="transition hover:text-white" href="#about">
            About
          </a>

          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
