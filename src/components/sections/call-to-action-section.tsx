'use client';

import { CheckSquare, ArrowRight, Sparkles, Calendar, Rocket, Star, Zap, Lightbulb, Target, Sparkles as SparklesIcon, Heart, Trophy } from "lucide-react";
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";

const slidingTexts = [
  { text: "Let's Build Something Amazing", icon: Rocket },
  { text: "Transform Your Vision", icon: SparklesIcon },
  { text: "Create Digital Excellence", icon: Star },
  { text: "Design Your Future", icon: Lightbulb },
  { text: "Innovate Together", icon: Zap },
  { text: "Craft Your Success", icon: Target },
  { text: "Elevate Your Brand", icon: Trophy },
  { text: "Make an Impact", icon: Heart },
];

export function CallToActionSection() {
  const currentYear = new Date().getFullYear();
  const sectionRef = useIntersectionObserver();
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let position = 0;
    const speed = 0.5; // pixels per frame
    const totalWidth = slider.scrollWidth / 2;

    const animate = () => {
      position -= speed;
      if (position <= -totalWidth) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-16 lg:py-20 text-foreground flex justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(/herobg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[100px] opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent animate-pulse" />
        </div>
      </div>

      <div className="w-[85%] relative z-10">
        {/* Company name with sparkle effect */}
        <div className="flex items-center justify-center gap-2 mb-8 animate-in fade-in-0 zoom-in-75 duration-700 group">
          <Sparkles className="h-6 w-6 text-primary animate-pulse" />
          <span className="text-2xl md:text-3xl font-semibold text-foreground/90">
            9ova
          </span>
        </div>

        {/* Infinite sliding text */}
        <div className="relative overflow-hidden py-8 mb-12">
          <div 
            ref={sliderRef}
            className="flex whitespace-nowrap will-change-transform"
            style={{ transform: 'translateX(0)' }}
          >
            {[...slidingTexts, ...slidingTexts].map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground/90 group-hover:text-primary transition-colors duration-300">
                  {item.text}
                </span>
                <item.icon className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 text-primary/50 group-hover:text-primary transition-colors duration-300 mx-4" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Content */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-muted-foreground">
            Ready to transform your ideas into reality? Let's start a conversation about your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white shadow-lg border border-primary/80 hover:bg-primary/90 hover:border-primary transition-all duration-300 group"
            >
              <a href="mailto:ranagaurav687@gmail.com">
                <span className="flex items-center gap-2">
                  Let's Discuss Your Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </Button>
            
            <Button
              asChild
              size="lg"
              className="bg-black/60 text-white border border-white/30 hover:bg-black/80 shadow-lg transition-all duration-300 group"
            >
              <a href="https://calendly.com/ranagaurav687/30min" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-2">
                  Schedule a Free Consultation
                  <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </span>
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/70 mt-8">
            © {currentYear} 9ova. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
