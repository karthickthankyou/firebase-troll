const chalk = require('chalk');

module.exports.randomNumber = (num, min = 0) => {
  return Math.ceil(Math.random() * num) + min;
};

module.exports.dialog = (actor, text) => {
  return `${actor}: "${chalk.italic(text)}"`;
};
module.exports.nameInsulter = (name) => {
  return name.match(/.{1,3}/g).join('...') + '🤢';
};

module.exports.waitFor = (milliseconds = 3000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

// process.stdin.on('keypress', (str, key) => {
//     if (key.ctrl && key.name === 'c') {
//       process.exit();
//     } else {
//       console.log(`You pressed the "${str}" key`);
//       console.log();
//       console.log(key);
//       console.log();
//     }
//   });
