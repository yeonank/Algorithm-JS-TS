const input = require('fs').readFileSync('example.txt').toString().split('\n'); //'/dev/stdin'
console.log('input', input);
const count: number = Number(input[0]) as number;
const scores: Array<number> = input[1].split(' ');
let sum= 0;
const maxScore = Math.max(...scores);

scores.forEach(d=>{
    sum+=d/maxScore*100;//여기서 this를 설정하지 않아도 되네..?
});

console.log(sum/count);