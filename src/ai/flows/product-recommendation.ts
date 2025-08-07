// ProductRecommendation.ts
'use server';
/**
 * @fileOverview An AI agent that provides personalized product recommendations based on user history and cart items.
 *
 * - getProductRecommendations - A function that takes viewing history and cart items as input and returns product recommendations.
 * - ProductRecommendationInput - The input type for the getProductRecommendations function.
 * - ProductRecommendationOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductRecommendationInputSchema = z.object({
  viewingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the user viewing history.'),
  cartItems: z
    .array(z.string())
    .describe('An array of product IDs representing the items currently in the user cart.'),
});
export type ProductRecommendationInput = z.infer<typeof ProductRecommendationInputSchema>;

const ProductRecommendationOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('An array of product IDs representing the recommended products.'),
});
export type ProductRecommendationOutput = z.infer<typeof ProductRecommendationOutputSchema>;

export async function getProductRecommendations(
  input: ProductRecommendationInput
): Promise<ProductRecommendationOutput> {
  return productRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {schema: ProductRecommendationInputSchema},
  output: {schema: ProductRecommendationOutputSchema},
  prompt: `You are an expert eCommerce product recommendation engine.

  Based on the user's viewing history and the items currently in their cart, recommend products that they are likely to be interested in purchasing.

  Viewing History: {{viewingHistory}}
  Cart Items: {{cartItems}}

  Recommendations:`, // Handlebars syntax
});

const productRecommendationFlow = ai.defineFlow(
  {
    name: 'productRecommendationFlow',
    inputSchema: ProductRecommendationInputSchema,
    outputSchema: ProductRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
