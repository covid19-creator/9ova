import { CheckSquare } from "lucide-react";

export function CallToActionSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-[hsl(var(--cta-background))] text-[hsl(var(--cta-foreground))] flex justify-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%] text-center space-y-8">
        <div className="flex items-center justify-center gap-2 animate-in fade-in-0 zoom-in-75 duration-700 group">
          <CheckSquare className="h-8 w-8 md:h-10 md:w-10 hover:scale-110 hover:rotate-12 transition-all duration-300" />
          <span className="text-3xl md:text-4xl font-semibold hover:text-accent transition-colors duration-300 relative">
            9ova Tech Solutions
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          </span>
        </div>

        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-200 group relative">
          <span className="relative inline-block">
          Let’s Build Something Amazing Together
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          </span>
        </h2>

        <a
          href="mailto:ranagaurav687@gmail.com"
          className="inline-block text-xl md:text-2xl font-medium hover:underline hover:scale-105 hover:text-accent transition-all duration-300 underline-offset-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-700 delay-400 group relative"
        >
          <span className="relative">
            ranagaurav687@gmail.com
            <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
          </span>
        </a>

        <div className="pt-8 md:pt-12 animate-in fade-in-0 duration-700 delay-600">
          <p className="text-sm text-[hsl(var(--cta-foreground),0.8)] hover:text-[hsl(var(--cta-foreground))] transition-colors duration-300 group relative inline-block">
            <span className="relative">
              © {currentYear} 9ova Tech Solutions. All rights reserved.
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
