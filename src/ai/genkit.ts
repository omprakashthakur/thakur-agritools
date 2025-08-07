import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Import flows to ensure they are registered.
import './flows/product-recommendation';
import './flows/product-review-summarizer';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
