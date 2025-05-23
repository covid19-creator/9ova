'use client';

import { Zap, PenTool, BarChartHorizontalBig, CircleDot, MessageSquareText, ClipboardCheck, Sparkles, Repeat, Send, Asterisk } from 'lucide-react';
import { GradientCard } from '@/components/ui/gradient-card';
import { useCounter } from '@/hooks/use-counter';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const benefits = [
  {
    icon: Zap,
    title: 'Fast turnaround',
    description: "Our portfolio speaks for itself. Here are just a few examples of how we've helped businesses like yours achieve their digital goals.",
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: PenTool,
    title: 'Tailored design',
    description: 'Unique, brand-reflecting designs that increase engagement and stand out from the competition',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BarChartHorizontalBig,
    title: 'Scalable solutions',
    description: 'Built to grow with your business, supporting up to 10,000 users and beyond.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: CircleDot,
    title: 'Fixed price',
    description: 'Transparent pricing with no hidden fees, making it easier to budget and plan.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { value: 37, label: 'Finalized projects', suffix: '+' },
  { value: 94, label: 'Conversion rate improvement', suffix: '%' },
  { value: 12, label: 'Years of experience', suffix: '+' },
];

const services = [
  'Responsive Design',
  'User Interface',
  'User Experience',
  'Custom Code',
  'Component Libraries',
  'Desktop & Mobile Apps',
  'Website Migration',
  'Modern Tech Stack',
];

const fields = ['AI', 'SaaS', 'Fintech', 'E-Commerce', 'ESports', 'Automotive', 'Fashion', 'Real Estate'];

const approaches = [
  {
    icon: MessageSquareText,
    title: 'Consulting',
    description: "We start by understanding your goals, design preferences, and target audience.",
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Collaborative review',
    description: 'During the design phase, we invite you to review and provide feedback for a better structure and functionality.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Design & Development',
    description: 'We establish a structure focused on functionality and accessibility, using cutting-edge technologies for total immersion.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Repeat,
    title: 'Iterate',
    description: "Polishing the details is important when it comes to the final product. We're iterating until you're happy with the results.",
    gradient: 'from-yellow-500 to-orange-500',
  },
];

export function BenefitsSection() {
  const projectsCount = useCounter(37, 2000);
  const conversionCount = useCounter(94, 2000);
  const yearsCount = useCounter(12, 2000);
  const sectionRef = useIntersectionObserver();

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-16 lg:py-20 bg-background flex justify-center">
      <div className="w-[85%] space-y-12">
        {/* Benefits Title */}
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-in fade-in-0 slide-in-from-bottom-2 duration-700 hover:scale-[1.02] transition-transform duration-300">
          Benefits
        </h2>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <GradientCard
              key={benefit.title}
              className={`group relative flex flex-col items-start p-6 rounded-xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 cursor-pointer overflow-hidden [animation-delay:${index * 150}ms]`}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"
                   style={{ backgroundImage: `linear-gradient(to right, ${benefit.gradient})` }} />
              <div className="relative z-10">
                <benefit.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-foreground/90 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300">{benefit.description}</p>
              </div>
            </GradientCard>
          ))}
        </div>

        {/* Large Text Block */}
        <div className="text-left py-8 animate-in fade-in-0 duration-1000 delay-200">
          <p className="relative text-3xl md:text-4xl lg:text-5xl font-bold leading-normal">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
                BUILDING WEBSITES
              </span>
              <span className="relative text-foreground/40 hover:text-foreground/60 transition-colors duration-300">
                BUILDING WEBSITES
              </span>
            </span>
            <span className="block mt-2 text-foreground/40 hover:text-foreground/60 transition-colors duration-300">
              THAT NOT ONLY LOOK GREAT
              <br/> BUT ALSO DELIVER MEASURABLE RESULTS.
            </span>
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div 
            className="animate-in fade-in-0 slide-in-from-bottom-5 duration-500 hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: '300ms' }}
          >
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              {projectsCount}{stats[0].suffix}
            </p>
            <p className="text-lg text-muted-foreground mt-2 hover:text-foreground/80 transition-colors duration-300">
              {stats[0].label}
            </p>
          </div>
          <div 
            className="animate-in fade-in-0 slide-in-from-bottom-5 duration-500 hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: '450ms' }}
          >
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              {conversionCount}{stats[1].suffix}
            </p>
            <p className="text-lg text-muted-foreground mt-2 hover:text-foreground/80 transition-colors duration-300">
              {stats[1].label}
            </p>
          </div>
          <div 
            className="animate-in fade-in-0 slide-in-from-bottom-5 duration-500 hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: '600ms' }}
          >
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold text-foreground hover:text-primary transition-colors duration-300">
              {yearsCount}{stats[2].suffix}
            </p>
            <p className="text-lg text-muted-foreground mt-2 hover:text-foreground/80 transition-colors duration-300">
              {stats[2].label}
            </p>
          </div>
        </div>

        {/* Services and Fields Section */}
        <div className="grid md:grid-cols-5 gap-8 items-start py-8 animate-in fade-in-0 duration-700 delay-400">
          <div className="md:col-span-3 space-y-3">
            {services.map((service, index) => (
              <p 
                key={service} 
                className={`text-3xl font-medium text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 cursor-pointer animate-in slide-in-from-left-4 duration-500 [animation-delay:${index * 100 + 500}ms]`}
              >
                {service}
              </p>
            ))}
          </div>
          <GradientCard 
            className="md:col-span-2 p-8 rounded-xl bg-card relative shadow-lg hover:shadow-xl transition-all duration-300 animate-in slide-in-from-right-4 duration-700 [animation-delay:800ms] overflow-hidden group border border-primary/10 hover:border-primary/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"
                 style={{ backgroundImage: 'linear-gradient(to right, from-indigo-500 to-purple-500)' }} />
            <Asterisk className="absolute top-6 right-6 h-8 w-8 text-primary/60 group-hover:rotate-180 transition-transform duration-500" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-foreground group-hover:text-foreground/90 transition-colors duration-300">Fields</h3>
              <ul className="space-y-2">
                {fields.map((field, index) => (
                  <li 
                    key={field} 
                    className={`text-lg font-medium text-foreground/80 hover:text-foreground hover:translate-x-2 transition-all duration-300 cursor-pointer animate-in slide-in-from-right-4 duration-500 [animation-delay:${index * 100 + 900}ms]`}
                  >
                    {field}
                  </li>
                ))}
              </ul>
            </div>
          </GradientCard>
        </div>

        {/* Approach Title */}
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl pt-8 animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-500 hover:scale-[1.02] transition-transform duration-300">
          Approach
        </h2>

        {/* Approach Grid - Bento Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, index) => (
            <GradientCard
              key={approach.title}
              className={`group relative flex flex-col p-6 rounded-xl bg-card shadow-sm hover:shadow-xl transition-all duration-300 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 cursor-pointer overflow-hidden
                ${index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}
                ${index === 1 ? 'sm:col-span-2 lg:col-span-2' : ''}
                ${index === 2 ? 'sm:col-span-1 lg:col-span-2' : ''}
                ${index === 3 ? 'sm:col-span-1 lg:col-span-2' : ''}
                [animation-delay:${index * 200 + 600}ms]
                hover:scale-[1.02] hover:-translate-y-1
                border border-primary/10 hover:border-primary/30
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 ease-out"
                   style={{ backgroundImage: `linear-gradient(to right, ${approach.gradient})` }} />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300">
                    <approach.icon className="h-6 w-6 text-primary group-hover:scale-110 group-hover:text-primary/80 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground ml-3 group-hover:text-foreground/90 transition-colors duration-300">{approach.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300 leading-relaxed">{approach.description}</p>
                {index === 0 && (
                  <div className="mt-4 pt-4 border-t border-primary/10">
                    <span className="text-xs font-medium text-primary/60">First step of our process</span>
                  </div>
                )}
              </div>
            </GradientCard>
          ))}
          <GradientCard
            className="group relative flex flex-col p-6 rounded-xl bg-[hsl(0_0%_21%)] text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-500 cursor-pointer overflow-hidden [animation-delay:1400ms] hover:scale-[1.02] hover:-translate-y-1 border border-primary/20 hover:border-primary/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 ease-out" />
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300">
                  <Send className="h-7 w-7 text-primary-foreground group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl text-blue-500 font-bold group-hover:text-primary-foreground/90 transition-colors duration-300 ml-3">Ready to take off</h3>
              </div>
              <p className="text-sm text-primary-foreground/80 group-hover:text-primary-foreground/90 transition-colors duration-300 mb-6 leading-relaxed">
                Handing off the fully working website or landing page which is ready to launch right away, empowering you with a seamless transition from concept to final product.
              </p>
              <a 
                href="mailto:ranagaurav687@gmail.com" 
                className="inline-flex items-center px-6 py-3 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium backdrop-blur-sm hover:bg-primary/30 transition-all duration-300 hover:scale-105"
              >
                Let's Talk
                <Send className="ml-2 h-4 w-4" />
              </a>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
