import readlineSync from 'readline-sync';

export function runGame(game) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.description);

  let correct = 0;
  const rounds = 3;

  while (correct < rounds) {
    const { question, correctAnswer } = game.generateRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      correct++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}