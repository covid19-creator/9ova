import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  projectUrl?: string;
}

export function ProjectCard({ title, description, imageUrl, imageHint, projectUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-card/80 backdrop-blur-sm">
      <CardHeader className="p-0">
        <Image
          alt={title}
          className="aspect-[4/3] w-full object-cover"
          height={300}
          src={imageUrl}
          data-ai-hint={imageHint}
          width={400}
        />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-semibold mb-2 text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/80 line-clamp-3">{description}</CardDescription>
      </CardContent>
      {projectUrl && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
