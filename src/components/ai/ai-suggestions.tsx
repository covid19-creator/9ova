"use client";

import { useEffect, useState } from 'react';
import { generateSuggestions, type SuggestionsInput } from '@/ai/flows/ai-powered-suggestions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb } from 'lucide-react';

export function AISuggestions() {
  const [suggestions, setSuggestions] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSuggestions = async () => {
      setIsLoading(true);
      // This profile would ideally be dynamic or based on more specific user input
      const input: SuggestionsInput = {
        userProfile: "A startup founder looking for innovative web solutions, interested in AI integration, user experience design, and scalable architectures. Based in a major tech city.",
      };

      try {
        const result = await generateSuggestions(input);
        setSuggestions(result.suggestions);
      } catch (error) {
        console.error("Failed to generate AI suggestions:", error);
        setSuggestions(["Explore our AI-driven development services.", "Consider a UX audit for your existing platform.", "Learn about scalable cloud solutions."]); // Fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchSuggestions();
  }, []);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <Skeleton className="h-6 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!suggestions || suggestions.length === 0) {
    return <p className="text-muted-foreground">No specific suggestions available at the moment. Check back soon!</p>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {suggestions.map((suggestion, index) => (
        <Card key={index} className="bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-primary/30 transition-shadow duration-300 animate-in fade-in-0 slide-in-from-bottom-5" style={{animationDelay: `${index * 150}ms`}}>
          <CardHeader className="flex flex-row items-center space-x-3 pb-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            <CardTitle className="text-lg text-foreground">Idea {index + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80">{suggestion}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
