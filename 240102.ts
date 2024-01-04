import * as readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let numbers: Array<number>;
rl.on('line', (line: any) => {
  if (count === 1) {
    numbers = line.split('').map((d) => Number(d));
    let sum = 0;
    numbers.forEach((d) => {
      sum = sum + d;
    });
    console.log(sum);
    process.exit();
  }
  count++;
}).on('close', () => {
  process.exit();
});
