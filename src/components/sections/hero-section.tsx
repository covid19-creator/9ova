import { Button } from '@/components/ui/button';
import Link from 'next/link';

const words = [
  { text: "Building", gradient: "from-blue-600 to-cyan-500" },
  { text: "websites", gradient: "from-purple-600 to-pink-500" },
  { text: "&", gradient: "from-orange-600 to-red-500" },
  { text: "apps", gradient: "from-green-600 to-emerald-500" },
  { text: "for", gradient: "from-yellow-600 to-orange-500" },
  { text: "immersive", gradient: "from-indigo-600 to-purple-500" },
  { text: "digital", gradient: "from-rose-600 to-pink-500" },
  { text: "experiences.", gradient: "from-cyan-600 to-blue-500" },
];

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background flex justify-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%] flex flex-col items-start space-y-6">
        <div className="space-y-3 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl font-regular tracking-normal sm:text-6xl md:text-7xl">
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
          <p className="text-foreground/70 md:text-xl lg:text-2xl hover:text-foreground/90 transition-colors duration-300">
            We design, build & ship websites and apps that<br/> shape the future of your business.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
          <Button 
            asChild 
            size="lg" 
            className="bg-card text-primary border border-primary/20 hover:text-card hover:bg-primary hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md group"
          >
            <Link href="mailto:ranagaurav687@gmail.com?subject=Project%20Inquiry">
              <span className="relative">
                Let's talk
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              </span>
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 group"
          >
            <Link href="https://www.linkedin.com/in/gourav--rana/" target="_blank" rel="noopener noreferrer">
              <span className="relative">
                LinkedIn
                <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
