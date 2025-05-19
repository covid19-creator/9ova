// src/ai/flows/ai-powered-suggestions.ts
'use server';
/**
 * @fileOverview AI-powered suggestions for potential content or features.
 *
 * - generateSuggestions - A function that generates personalized suggestions for users.
 * - SuggestionsInput - The input type for the generateSuggestions function.
 * - SuggestionsOutput - The return type for the generateSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestionsInputSchema = z.object({
  userProfile: z
    .string()
    .describe(
      'A description of the user profile, including their interests, browsing history, and location.'
    ),
});
export type SuggestionsInput = z.infer<typeof SuggestionsInputSchema>;

const SuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of personalized suggestions for the user.'),
});
export type SuggestionsOutput = z.infer<typeof SuggestionsOutputSchema>;

export async function generateSuggestions(input: SuggestionsInput): Promise<SuggestionsOutput> {
  return generateSuggestionsFlow(input);
}

const generateSuggestionsPrompt = ai.definePrompt({
  name: 'generateSuggestionsPrompt',
  input: {schema: SuggestionsInputSchema},
  output: {schema: SuggestionsOutputSchema},
  prompt: `You are an AI assistant that provides personalized suggestions to users based on their profiles.

  Based on the following user profile:
  {{userProfile}}

  Provide a list of suggestions that the user might be interested in.
  The suggestions should be tailored to the user's interests, browsing history, and location.
  Suggestions:`,
});

const generateSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateSuggestionsFlow',
    inputSchema: SuggestionsInputSchema,
    outputSchema: SuggestionsOutputSchema,
  },
  async input => {
    const {output} = await generateSuggestionsPrompt(input);
    return output!;
  }
);
