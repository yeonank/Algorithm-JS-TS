var input = require('fs').readFileSync('example.txt').toString().split('\n'); //'/dev/stdin'
console.log('input', input);
var count = Number(input[0]);
var scores = input[1].split(' ');
var sum = 0;
var maxScore = Math.max.apply(Math, scores);
scores.forEach(function (d) {
    sum += d / maxScore * 100; //여기서 this를 설정하지 않아도 되네..?
});
console.log(sum / count);
