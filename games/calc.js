import { randomInt } from 'crypto';

export const description = 'What is the result of the expression?';

export function generateRound() {
  const operators = ['+', '-', '*'];
  const operator = operators[randomInt(0, operators.length)];
  const num1 = randomInt(1, 50);
  const num2 = randomInt(1, 20);

  let correctAnswer;
  switch (operator) {
    case '+': correctAnswer = num1 + num2; break;
    case '-': correctAnswer = num1 - num2; break;
    case '*': correctAnswer = num1 * num2; break;
  }

  return { question: `${num1} ${operator} ${num2}`, correctAnswer: String(correctAnswer) };
}