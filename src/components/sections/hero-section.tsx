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
    <section
      className="w-full min-h-screen flex items-center justify-center relative py-8 md:py-0"
      style={{
        backgroundImage: 'url(/herobg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-[85%] mx-auto flex flex-col lg:flex-row lg:items-end items-end justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-end max-w-2xl text-left">
          <span className="text-white/80 text-sm font-semibold mb-2 tracking-wide">✦ 9ova Place For Tech Solutions</span>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-figtree font-normal text-white mb-4 leading-tight">
            Crafting Digital Presence<br />For Visionary Brand
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-xl">
            At 9ova, We Blend Creative Thinking With Data-Driven Strategy To Build Powerful Digital Experiences. From Branding To Performance Marketing, We Craft Solutions That Don't Just Look Good — They Deliver Results.
          </p>
        </div>
        {/* Right: Video Placeholder and Stats */}
        <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-md">
          {/* Hero Video */}
          <div className="sm:w-full md:w-80 aspect-video overflow-hidden mb-6">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats */}
          <div className="flex flex-row items-center justify-between gap-12 sm:w-full md:w-80">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-figtree font-normal text-white">95%</span>
              <span className="text-white/80 text-xs md:text-sm mt-1 text-center">Satisfied And<br />Repeating Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-figtree font-normal text-white">125+</span>
              <span className="text-white/80 text-xs md:text-sm mt-1 text-center">Projects Completed<br />Across The World</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
