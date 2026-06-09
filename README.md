### Hexlet tests and linter status:
[![Actions Status](https://github.com/ssamandar098-gif/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ssamandar098-gif/frontend-project-44/actions)


MARKDOWN
# Brain Games 🧠

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ssamandar098-gif_frontend-project-44&metric=quality_gate_status)](https://sonarcloud.io/summary/new_code?id=ssamandar098-gif_frontend-project-44)

**Brain Games** — серия обучающих игр в терминале для развития логики, математики и быстрого мышления.

## 📦 Установка

```bash
npm install
▶️ Запуск
Главное меню (игра по умолчанию — "Проверка на чётность")
Bash
npm run brain-games
Отдельные игры
Bash
npm run brain-even        # Проверка на чётность
npm run brain-calc        # Калькулятор (+, -, *)
npm run brain-gcd         # НОД (наибольший общий делитель)
npm run brain-progression # Арифметическая прогрессия
npm run brain-prime       # Простое ли число?
🎮 Описание игр
Игра	Задача
brain-even	Ответь «yes», если число чётное, иначе «no»
brain-calc	Посчитай выражение из двух чисел и оператора
brain-gcd	Найди наибольший общий делитель двух чисел
brain-progression	Угадай пропущенное число в прогрессии
brain-prime	Определи, является ли число простым
📋 Примеры
brain-even
TEXT
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
brain-calc
TEXT
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
brain-gcd
TEXT
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
brain-progression
TEXT
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!
brain-prime
TEXT
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 10
Your answer: no
Correct!
Question: 13
Your answer: yes
Correct!
Congratulations, Sam!
🧱 Структура проекта
frontend-project-44/
├── bin/                 # Исполняемые файлы (точки входа)
│   ├── brain-games
│   ├── brain-even
│   ├── brain-calc
│   ├── brain-gcd
│   ├── brain-progression
│   └── brain-prime
├── src/
│   ├── index.js         # Общая логика игр
│   ├── math.js          # Математические утилиты (НОД, простые числа)
│   └── progression.js   # Генерация арифметической прогрессии
├── games/               # Логика конкретных игр
│   ├── even.js
│   ├── calc.js
│   ├── gcd.js
│   ├── progression.js
│   └── prime.js
├── node_modules/
├── package.json
└── .gitignore
✅ Требования
Node.js ≥ 18
npm ≥ 9
📜 Лицензия
ISC

© Samandar, 2026