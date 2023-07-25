// https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    
    let answer = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            answer += '*'
        }
        answer += '\n'
    }

    console.log(answer);
});