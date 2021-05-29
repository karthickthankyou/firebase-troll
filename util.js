const chalk = require('chalk');

module.exports.randomNumber = (num, min = 0) => {
  return Math.ceil(Math.random() * num) + min;
};

module.exports.dialog = (actor, text) => {
  return `${actor}: "${chalk.italic(text)}"`;
};
