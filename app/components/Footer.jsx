export default function Footer() {
    return (
      <footer className="border-t border-neutral-800 px-8 py-8 md:px-16 lg:px-24">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between text-xs text-neutral-600">
          <p>© {new Date().getFullYear()} Simon Jordan</p>
  
          <p>Built with Next.js</p>
        </div>
      </footer>
    );
  }