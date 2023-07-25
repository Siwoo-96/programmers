// https://school.programmers.co.kr/learn/courses/30/lessons/120834?language=javascript
// 나이가 a = 0, b = 1...으로 표현

function solution(age) {
const alph = 'abcdefghijklmnopqrstuvwxyz';
const num = age.toString();

let answer = '';

for (let i = 0; i < num.length; i++) {
    answer += alph[Number(num[i])];
}

return answer;
}




console.log(solution(1)); // "cd"
console.log(solution(51)); // "fb"
console.log(solution(100)); // "baa"