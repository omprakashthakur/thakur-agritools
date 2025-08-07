import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// The dev server will discover and register flows automatically.
// Explicitly importing them here creates a circular dependency.

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
