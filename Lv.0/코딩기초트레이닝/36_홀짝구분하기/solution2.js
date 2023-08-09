// https://school.programmers.co.kr/learn/courses/30/lessons/181944?language=javascript

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
});