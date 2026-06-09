import { isPrime } from '../src/math.js';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export function generateRound() {
  const number = Math.floor(Math.random() * 100) + 2; // от 2 до 101
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question: String(number), correctAnswer };
}