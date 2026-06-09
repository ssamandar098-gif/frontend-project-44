import { randomInt } from 'crypto';

export const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export function generateRound() {
  const number = randomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return { question: String(number), correctAnswer };
}