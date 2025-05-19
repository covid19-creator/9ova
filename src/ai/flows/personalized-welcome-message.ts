'use server';

/**
 * @fileOverview Generates a personalized welcome message based on user context.
 *
 * - generatePersonalizedWelcomeMessage - A function that generates a personalized welcome message.
 * - PersonalizedWelcomeMessageInput - The input type for the generatePersonalizedWelcomeMessage function.
 * - PersonalizedWelcomeMessageOutput - The return type for the generatePersonalizedWelcomeMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeMessageInputSchema = z.object({
  location: z
    .string()
    .optional()
    .describe('The user\'s location, if available.'),
  browsingHistory: z
    .string()
    .optional()
    .describe('A summary of the user\'s recent browsing history.'),
});
export type PersonalizedWelcomeMessageInput = z.infer<
  typeof PersonalizedWelcomeMessageInputSchema
>;

const PersonalizedWelcomeMessageOutputSchema = z.object({
  message: z
    .string()
    .describe('The personalized welcome message for the user.'),
});
export type PersonalizedWelcomeMessageOutput = z.infer<
  typeof PersonalizedWelcomeMessageOutputSchema
>;

export async function generatePersonalizedWelcomeMessage(
  input: PersonalizedWelcomeMessageInput
): Promise<PersonalizedWelcomeMessageOutput> {
  return personalizedWelcomeMessageFlow(input);
}

const personalizedWelcomeMessagePrompt = ai.definePrompt({
  name: 'personalizedWelcomeMessagePrompt',
  input: {schema: PersonalizedWelcomeMessageInputSchema},
  output: {schema: PersonalizedWelcomeMessageOutputSchema},
  prompt: `You are a marketing expert tasked with generating a personalized welcome message for a user visiting a landing page.

  The goal is to create a message that is engaging and relevant to the user, based on their available information.

  Consider the following information about the user:

  Location: {{location}}
  Browsing History: {{browsingHistory}}

  Generate a concise and friendly welcome message that acknowledges this information.
  If location and browsing history is not available, generate a general welcome message.
  Keep the message under 50 words.
  `,
});

const personalizedWelcomeMessageFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeMessageFlow',
    inputSchema: PersonalizedWelcomeMessageInputSchema,
    outputSchema: PersonalizedWelcomeMessageOutputSchema,
  },
  async input => {
    const {output} = await personalizedWelcomeMessagePrompt(input);
    return output!;
  }
);

