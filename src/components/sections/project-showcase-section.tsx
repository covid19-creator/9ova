"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const projects = [
  {
    id: '1',
    title: 'GemPro Marketing Agency',
    description: 'A full-service digital marketing agency specializing in brand development, social media management, and strategic marketing solutions for businesses of all sizes.',
    imageUrl: '/Image-1.png',
    imageHint: 'marketing agency',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about GemPro Marketing Agency Project',
    type: 'website'
  },
  {
    id: '2',
    title: 'Belle Beauty & Skincare',
    description: 'A mobile application revolutionizing the beauty industry by connecting users with premium skincare products and personalized beauty recommendations.',
    imageUrl: '/Belle-Beauty.png',
    imageHint: 'beauty skincare app',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about Belle Beauty & Skincare App',
    type: 'mobile'
  },
  {
    id: '3',
    title: 'Bloom Health Hospital',
    description: 'A modern healthcare platform providing comprehensive medical services, patient care management, and telemedicine solutions for improved healthcare accessibility.',
    imageUrl: '/Image-4.png',
    imageHint: 'healthcare hospital',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about Bloom Health Hospital Project',
    type: 'website'
  },
  {
    id: '4',
    title: 'Connect',
    description: 'A social networking mobile app designed to help people build meaningful connections, share experiences, and engage with communities of shared interests.',
    imageUrl: '/connect.jpg',
    imageHint: 'social networking app',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about Connect App',
    type: 'mobile'
  },
  {
    id: '5',
    title: 'NXThorizon Consultancy',
    description: 'A strategic business consultancy firm offering expert guidance in digital transformation, process optimization, and business growth strategies.',
    imageUrl: '/Image-2.png',
    imageHint: 'business consultancy',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about NXThorizon Consultancy Project',
    type: 'website'
  },
  {
    id: '6',
    title: 'Musico',
    description: 'A music streaming and discovery app that helps music lovers explore new artists, create playlists, and connect with fellow music enthusiasts.',
    imageUrl: '/musico.png',
    imageHint: 'music streaming app',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about Musico App',
    type: 'mobile'
  },
  {
    id: '7',
    title: 'Coupengini',
    description: 'An innovative affiliate marketing platform that connects brands with influencers, enabling seamless collaboration and performance-based marketing campaigns.',
    imageUrl: '/coupengini.png',
    imageHint: 'affiliate marketing platform',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about Coupengini Project',
    type: 'website'
  },
  {
    id: '8',
    title: 'JewelMe',
    description: 'An online marketplace dedicated to home decor enthusiasts, offering curated collections of unique furniture, art pieces, and decorative items for every style.',
    imageUrl: '/jewelme.png',
    imageHint: 'home decor marketplace',
    projectUrl: 'mailto:ranagaurav687@gmail.com?subject=Inquiry about JewelMe Project',
    type: 'website'
  },
];

export function ProjectShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useIntersectionObserver();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const lastX = useRef(0);
  const lastTime = useRef(Date.now());
  const velocityHistory = useRef<number[]>([]);

  const handleDragStart = (clientX: number) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(clientX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    lastX.current = clientX;
    lastTime.current = Date.now();
    velocityHistory.current = [];
    sliderRef.current.style.scrollBehavior = 'auto';
    sliderRef.current.style.cursor = 'grabbing';
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || !sliderRef.current) return;
    const x = clientX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 0.8; // Reduced multiplier for smoother movement
    const currentTime = Date.now();
    const timeDiff = currentTime - lastTime.current;
    const distanceDiff = clientX - lastX.current;
    
    // Calculate velocity with smoothing
    const newVelocity = distanceDiff / timeDiff;
    velocityHistory.current.push(newVelocity);
    if (velocityHistory.current.length > 5) {
      velocityHistory.current.shift();
    }
    const smoothedVelocity = velocityHistory.current.reduce((a, b) => a + b, 0) / velocityHistory.current.length;
    setVelocity(smoothedVelocity);
    
    sliderRef.current.scrollLeft = scrollLeft - walk;
    lastX.current = clientX;
    lastTime.current = currentTime;
  };

  const handleDragEnd = () => {
    if (!sliderRef.current) return;
    setIsDragging(false);
    sliderRef.current.style.cursor = 'grab';
    
    // Apply momentum scrolling with improved calculation
    if (Math.abs(velocity) > 0.05) {
      const momentum = velocity * 1500; // Increased momentum multiplier
      const targetScroll = sliderRef.current.scrollLeft - momentum;
      
      sliderRef.current.style.scrollBehavior = 'smooth';
      sliderRef.current.scrollLeft = targetScroll;
    }
    
    setVelocity(0);
    velocityHistory.current = [];
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    handleDragStart(e.pageX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    handleDragMove(e.pageX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    handleDragEnd();
  };

  const handleTouchStart = (e: TouchEvent) => {
    handleDragStart(e.touches[0].pageX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleDragMove(e.touches[0].pageX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <section ref={sectionRef} id="projects" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="w-[85%] mx-auto">
        <div className="space-y-8 animate-in fade-in-0 duration-1000">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our portfolio speaks for itself. Here are just a few examples of how we've helped businesses like yours achieve their digital goals.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="relative">
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-[7.5%] select-none touch-pan-x will-change-scroll"
            style={{ 
              scrollBehavior: 'smooth',
              cursor: 'grab',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              touchAction: 'pan-x',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="flex-none w-[350px] md:w-[450px] snap-start"
              >
                <div className="block overflow-hidden rounded-lg group border-2 border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm bg-white/10">
                  <div className="relative">
                    <Image
                      alt={project.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 cursor-pointer"
                      height={700}
                      src={project.imageUrl}
                      data-ai-hint={project.imageHint}
                      width={900}
                      onClick={() => setSelectedProject(project)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                         style={{
                           backgroundSize: '400px 400px',
                           backgroundPosition: 'var(--mouse-x, 50%) var(--mouse-y, 50%)',
                         }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.description}
                      </p>
                      <div className="mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 flex gap-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium backdrop-blur-sm hover:bg-primary/30 transition-colors duration-200"
                        >
                          View Details
                        </button>
                        <Link
                          href={project.projectUrl}
                          className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                        >
                          Contact
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient fade effect on the sides */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Project Image Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0 duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] rounded-lg overflow-hidden animate-in zoom-in-50 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors duration-200"
              onClick={() => setSelectedProject(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              <p className="text-white/90 mb-4">{selectedProject.description}</p>
              <div className="flex gap-2">
                <Link
                  href={selectedProject.projectUrl}
                  className="inline-block px-6 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Contact About This Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
