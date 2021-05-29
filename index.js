#!/usr/bin/env node
const { Select, Toggle } = require('enquirer');
const chalk = require('chalk');
const { randomNumber, dialog } = require('./util.js');

console.clear();
const text_marriage = `Marry a nigerian princess. (Hurry! Only ${randomNumber(
  1000,
  500,
)} remaining...)`;
const text_lottery = 'Win a lottery.';
const text_quit = `No, I'm happy being lonely. 👓 `;
const king = 'Nigerian king';

console.log(`Hey 🖖,

We are legit guys 🌚 from your friendly firebass team!
We are glad to inform you that today is your lucky day.
Such a lucky person you are, you got to meet the nigerian king himself.

`);

let virgin_user = true;

const runPromt = async () => {
  console.clear();
  virgin_user = false;
  const prompt = new Select({
    name: 'color',
    message: `${dialog(king, 'Pick one')} ${virgin_user ? '😜' : '😂 '}`,
    choices: [text_marriage, text_lottery, text_quit],
  });
  let answer = await prompt.run();
  if (answer === text_marriage) {
    console.log(
      `

      ${dialog(
        king,
        `Oops, you are late son.
        All my daughters got married ${randomNumber(9)} minutes ago.
        But do not lose hope, I will personally reach out to you when one of my daughters get divorced.

        I am looking at you Alicia. 🤨`,
      )}
      `,
    );
    entry();
  } else if (answer === text_lottery) {
    console.log(
      `

        ${dialog(
          king,
          `Well that turned out to be your unlucky number! 😏
          May be its not the number that's to be blamed.🙄`,
        )}

        `,
    );

    entry();
  } else {
    harshFarewell();
  }
};

const entry = async () => {
  const prompt = new Toggle({
    message: virgin_user
      ? `Nigerian king: ${chalk.italic(
          `"Hey, lucky person! Would you like to talk to me for a second??`,
        )} 😍"`
      : 'Try again? 😏',
    disabled: virgin_user ? 'Absolutely' : 'Um... Okay.',
    enabled: 'Nope',
  });
  let answer = await prompt.run();
  if (!answer) {
    runPromt();
  } else {
    harshFarewell();
  }
};

const harshFarewell = () => {
  console.clear();
  console.log(`

  ${dialog(king, `Ok. Good bye. 😠`)}

  `);
};

entry();
