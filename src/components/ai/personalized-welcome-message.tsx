"use client";

import { useEffect, useState } from 'react';
import { generatePersonalizedWelcomeMessage, type PersonalizedWelcomeMessageInput } from '@/ai/flows/personalized-welcome-message';
import { Skeleton } from '@/components/ui/skeleton';

export function PersonalizedWelcomeMessage() {
  const [welcomeMessage, setWelcomeMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      setIsLoading(true);
      let locationData: string | undefined = undefined;
      // Attempt to get location - very basic, no reverse geocoding
      // This will ask for user permission
      // For a real app, handle permission denial more gracefully
      // and consider privacy implications.
      try {
        if (navigator.geolocation) {
          // This part is tricky because getCurrentPosition is async and doesn't fit well
          // with the direct AI call in useEffect without more complex state.
          // For this example, we'll simplify and not fetch real-time location
          // to avoid permission popups on initial load for a demo.
          // In a real app, you might ask for location later or based on an action.
          // locationData = "User's approximate region"; // Placeholder
        }
      } catch (error) {
        console.warn("Could not get location for personalization:", error);
      }

      const input: PersonalizedWelcomeMessageInput = {
        location: locationData,
        browsingHistory: "User interested in innovative web solutions and AI technology.", // Placeholder
      };

      try {
        const result = await generatePersonalizedWelcomeMessage(input);
        setWelcomeMessage(result.message);
      } catch (error) {
        console.error("Failed to generate personalized welcome message:", error);
        setWelcomeMessage("Welcome to LandingSpark! Discover innovation with us."); // Fallback message
      } finally {
        setIsLoading(false);
      }
    };

    fetchWelcomeMessage();
  }, []);

  if (isLoading) {
    return <Skeleton className="h-6 w-3/4 mt-2" />;
  }

  return <p className="mt-2 text-lg text-foreground/80 animate-in fade-in duration-700">{welcomeMessage || "Welcome to LandingSpark!"}</p>;
}
