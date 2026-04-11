import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';

const apiKey = process.env.VERCEL_AI_API_KEY;

if (!apiKey) {
  throw new Error('VERCEL_AI_API_KEY environment variable is not set');
}

export const model = openai('gpt-4o-mini');

export async function generateAIResponse(prompt: string): Promise<string> {
  try {
    const { text } = await generateText({
      model,
      prompt,
    });
    return text;
  } catch (error) {
    console.error('AI generation error:', error);
    throw error;
  }
}
