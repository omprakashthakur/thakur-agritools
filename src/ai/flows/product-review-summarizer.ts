'use server';

/**
 * @fileOverview Summarizes product reviews, including average rating and common feedback.
 *
 * - summarizeProductReviews - A function that summarizes product reviews.
 * - SummarizeProductReviewsInput - The input type for the summarizeProductReviews function.
 * - SummarizeProductReviewsOutput - The return type for the summarizeProductReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProductReviewsInputSchema = z.object({
  reviews: z.array(
    z.object({
      rating: z.number().min(1).max(5).describe('The star rating given by the reviewer (1-5).'),
      comment: z.string().describe('The text comment provided by the reviewer.'),
    })
  ).describe('An array of product reviews.'),
});
export type SummarizeProductReviewsInput = z.infer<typeof SummarizeProductReviewsInputSchema>;

const SummarizeProductReviewsOutputSchema = z.object({
  averageRating: z.number().describe('The average rating of all reviews.'),
  positiveFeedback: z.string().describe('Common positive feedback phrases from the reviews.'),
  negativeFeedback: z.string().describe('Common negative feedback phrases from the reviews.'),
});
export type SummarizeProductReviewsOutput = z.infer<typeof SummarizeProductReviewsOutputSchema>;

export async function summarizeProductReviews(input: SummarizeProductReviewsInput): Promise<SummarizeProductReviewsOutput> {
  return summarizeProductReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeProductReviewsPrompt',
  input: {schema: SummarizeProductReviewsInputSchema},
  output: {schema: SummarizeProductReviewsOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing product reviews.

  Given the following product reviews, provide a summary including:

  1.  The average rating (out of 5 stars).
  2.  Common positive feedback phrases.
  3.  Common negative feedback phrases.

  Reviews:
  {{#each reviews}}
  Rating: {{this.rating}}
  Comment: {{this.comment}}
  {{/each}}

  Summary:
  Average Rating: {{averageRating}}
  Positive Feedback: {{positiveFeedback}}
  Negative Feedback: {{negativeFeedback}}`,
});

const summarizeProductReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeProductReviewsFlow',
    inputSchema: SummarizeProductReviewsInputSchema,
    outputSchema: SummarizeProductReviewsOutputSchema,
  },
  async input => {
    // Calculate the average rating.
    const totalRating = input.reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / input.reviews.length;

    const {output} = await prompt({
      ...input,
      averageRating,
    });
    return output!;
  }
);
