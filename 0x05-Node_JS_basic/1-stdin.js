const process = require('process');
const readline = require('readline');

console.log('Welcome to Holberton School, what is your name?');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', (input) => {
  console.log(`Your name is: ${input}`);

  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing');
});
