import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: '1',
    title: 'Nebula Platform',
    description: 'A cutting-edge SaaS platform for cloud resource management and optimization, built with a focus on scalability and user experience.',
    imageUrl: '/image-1.png',
    imageHint: 'cloud platform',
    projectUrl: '#',
  },
  {
    id: '2',
    title: 'QuantumLeap AI',
    description: 'An AI-driven analytics tool that provides deep insights from complex datasets, empowering businesses to make smarter decisions.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'AI analytics',
    projectUrl: '#',
  },
  {
    id: '3',
    title: 'EcoShift Marketplace',
    description: 'An e-commerce platform connecting sustainable brands with conscious consumers, promoting eco-friendly products and practices.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'ecommerce sustainable',
    projectUrl: '#',
  },
  {
    id: '4',
    title: 'Synergy CRM',
    description: 'A comprehensive Customer Relationship Management system designed for small to medium-sized enterprises to enhance client engagement.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'CRM software',
    projectUrl: '#',
  },
  {
    id: '5',
    title: 'Nova VR Experience',
    description: 'An immersive virtual reality experience for architectural visualization, allowing clients to walk through designs before construction.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'VR architecture',
    projectUrl: '#',
  },
  {
    id: '6',
    title: 'Helios Solar Monitoring',
    description: 'A web application for real-time monitoring and analytics of solar panel performance, optimizing energy generation.',
    imageUrl: 'https://placehold.co/800x600.png',
    imageHint: 'solar energy',
    projectUrl: '#',
  },
];

export function ProjectShowcaseSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-16 lg:py-20 bg-background flex justify-center">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[85%] xl:w-[70%]">
        <div className="space-y-8 animate-in fade-in-0 duration-1000">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
            Our portfolio speaks for itself. Here are just a few examples of how we’ve helped businesses like yours achieve their digital goals.            </p>
          </div>
          
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-none w-[300px] md:w-[400px] snap-start"
                >
                  <Link href={project.projectUrl} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg group">
                      <div className="relative">
                        <Image
                          alt={project.title}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                          height={600}
                          src={project.imageUrl}
                          data-ai-hint={project.imageHint}
                          width={800}
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
                          <div className="mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                            <span className="inline-block px-4 py-2 bg-primary/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                              View Project
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            
            {/* Gradient fade effect on the sides */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
