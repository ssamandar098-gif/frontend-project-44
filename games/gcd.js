import { gcd } from '../src/math.js';

export const description = 'Find the greatest common divisor of given numbers';

export function generateRound() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = gcd(num1, num2);

  return { question: `${num1} ${num2}`, correctAnswer: String(correctAnswer) };
}