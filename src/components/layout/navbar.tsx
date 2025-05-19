import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%] flex h-24 items-start justify-start">
        <Link href="/" className="flex items-center">
          <img src="/logo2.png" alt="Logo" className="h-32 w-32 -ml-2" />
        </Link>
        {/* Future navigation items can go here */}
        {/* <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <Link
            href="/#projects"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </Link>
        </nav> */}
      </div>
    </header>
  );
}
