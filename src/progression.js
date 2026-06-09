import { randomInt } from 'crypto';

function generateProgression(start, step, length) {
  return Array.from({ length }, (_, i) => start + i * step);
}

export function progression() {
  const length = randomInt(5, 10);     // от 5 до 10 чисел
  const start = randomInt(1, 20);      // начальное число
  const step = randomInt(1, 10);       // шаг прогрессии
  const progression = generateProgression(start, step, length);
  const hiddenIndex = randomInt(0, length - 1);
  const correctAnswer = progression[hiddenIndex];
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return { question, correctAnswer: String(correctAnswer) };
}