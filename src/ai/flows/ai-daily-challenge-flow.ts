'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating personalized daily coding or command-line challenges.
 *
 * - aiDailyChallenge - A function that generates a unique daily challenge based on user preferences.
 * - AIDailyChallengeInput - The input type for the aiDailyChallenge function.
 * - AIDailyChallengeOutput - The return type for the aiDailyChallenge function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const AIDailyChallengeInputSchema = z.object({
  skillLevel: z.enum(['beginner', 'intermediate', 'advanced']).describe('The user\'s current skill level.'),
  topicsOfInterest: z.array(z.string()).describe('A list of topics the user is interested in (e.g., "Linux CLI", "Python Functions", "Data Structures").'),
  learningGoals: z.string().optional().describe('Optional: Specific learning goals or areas the user wants to focus on.'),
});
export type AIDailyChallengeInput = z.infer<typeof AIDailyChallengeInputSchema>;

// Output Schema
const AIDailyChallengeOutputSchema = z.object({
  challengeTitle: z.string().describe('A concise title for the daily challenge.'),
  challengeDescription: z.string().describe('A detailed description of the task, including requirements and constraints.'),
  challengeType: z.enum(['coding', 'command-line']).describe('The type of challenge: "coding" for programming tasks, "command-line" for terminal-based tasks.'),
  topic: z.string().describe('The primary topic area covered by this challenge (e.g., "Python - File Handling", "Linux - Process Management").'),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']).describe('The assessed difficulty level of the challenge.'),
  expectedOutput: z.string().optional().describe('Optional: An example of the expected output for the challenge.'),
  solutionHint: z.string().optional().describe('Optional: A subtle hint to help the user if they get stuck.'),
});
export type AIDailyChallengeOutput = z.infer<typeof AIDailyChallengeOutputSchema>;

// Prompt Definition
const dailyChallengePrompt = ai.definePrompt({
  name: 'dailyChallengePrompt',
  input: { schema: AIDailyChallengeInputSchema },
  output: { schema: AIDailyChallengeOutputSchema },
  prompt: `You are an AI assistant specialized in creating engaging and personalized daily coding or command-line challenges.\nYour goal is to generate a unique daily challenge based on the user's skill level, topics of interest, and optional learning goals.\n\nThe challenge should be:\n- Unique and creative.\n- Relevant to the user's specified skill level: {{{skillLevel}}}.\n- Focused on one or more of these topics of interest: {{#each topicsOfInterest}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}.\n{{#if learningGoals}}\n- Tailored to these specific learning goals: {{{learningGoals}}}.\n{{/if}}\n\nProvide a clear title, a detailed description, specify whether it's a 'coding' or 'command-line' challenge, identify the main topic, and assign a difficulty level. Optionally, include an expected output example and a subtle hint.\n\nHere is the user's input:\nSkill Level: {{{skillLevel}}}\nTopics of Interest: {{#each topicsOfInterest}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}\n{{#if learningGoals}}Learning Goals: {{{learningGoals}}}{{/if}}\n\nPlease generate a daily challenge in the following JSON format:`,
});

// Flow Definition
const aiDailyChallengeFlow = ai.defineFlow(
  {
    name: 'aiDailyChallengeFlow',
    inputSchema: AIDailyChallengeInputSchema,
    outputSchema: AIDailyChallengeOutputSchema,
  },
  async (input) => {
    const { output } = await dailyChallengePrompt(input);
    if (!output) {
      throw new Error('Failed to generate daily challenge.');
    }
    return output;
  }
);

// Wrapper function for external usage
export async function aiDailyChallenge(input: AIDailyChallengeInput): Promise<AIDailyChallengeOutput> {
  return aiDailyChallengeFlow(input);
}
