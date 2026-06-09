import { progression } from '../src/progression.js';

export const description = 'What number is missing in the progression?';

export function generateRound() {
  const { question, correctAnswer } = progression();
  return { question, correctAnswer };
}