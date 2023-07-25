// https://school.programmers.co.kr/learn/courses/30/lessons/120898?language=javascript
// 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 
// 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return

function solution(message) {
    return message.length * 2;
}


console.log(solution("happy birthday!")); // 30
console.log(solution("I love you~")); // 22
