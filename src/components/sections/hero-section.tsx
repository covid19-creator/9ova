import { Button } from '@/components/ui/button';
import Link from 'next/link';

const words = [
  { text: "Let's", gradient: "from-blue-600 to-cyan-500" },
  { text: "Build", gradient: "from-purple-600 to-pink-500" },
  { text: "You", gradient: "from-orange-600 to-red-500" },
  { text: "a", gradient: "from-green-600 to-emerald-500" },
  { text: "Digital", gradient: "from-yellow-600 to-orange-500" },
  { text: "Experience", gradient: "from-indigo-600 to-purple-500" },
  { text: "That", gradient: "from-rose-600 to-pink-500" },
  { text: "Converts.", gradient: "from-cyan-600 to-blue-500" },
];

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background flex justify-center">
      <div className="w-[85%] flex flex-col items-start space-y-6">
        <div className="space-y-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl font-regular tracking-normal sm:text-6xl md:text-7xl font-figtree">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-x-2">
                {words.slice(0, 4).map((word, index) => (
                  <span
                    key={index}
                    className="relative inline-block group cursor-pointer"
                  >
                    <span className="relative inline-block">
                      <span className="relative z-10 text-foreground transition-[color,background] duration-500 ease-out">
                        {word.text}
                      </span>
                      <span className="absolute inset-0 z-20 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-[opacity] duration-500 ease-out">
                        {word.text}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-2">
                {words.slice(4).map((word, index) => (
                  <span
                    key={index}
                    className="relative inline-block group cursor-pointer"
                  >
                    <span className="relative inline-block">
                      <span className="relative z-10 text-foreground transition-[color,background] duration-500 ease-out">
                        {word.text}
                      </span>
                      <span className="absolute inset-0 z-20 text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-[opacity] duration-500 ease-out">
                        {word.text}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </h1>
          <p className="text-foreground/70 md:text-xl lg:text-2xl hover:text-foreground/90 transition-colors duration-300 font-figtree">
          We create stunning websites and apps that not only look great but also drive measurable results for your business. Whether you're starting from scratch or need a redesign, we're here to transform your online presence into a powerful tool that attracts and converts your target audience.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
          <Button 
            asChild 
            size="lg" 
            className="bg-card text-primary border border-primary/20 hover:text-card hover:bg-primary hover:scale-105 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-primary/50 transition-all duration-300 shadow-md group relative overflow-hidden"
          >
            <Link href="mailto:ranagaurav687@gmail.com?subject=Project%20Inquiry">
              <span className="relative">
                Let's talk
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl scale-200" />
              </span>
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="shadow-md hover:scale-105 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-primary/50 transition-all duration-300 group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="https://www.linkedin.com/in/gourav--rana/" target="_blank" rel="noopener noreferrer">
              <span className="relative">
                LinkedIn
                <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl scale-200" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
