// https://school.programmers.co.kr/learn/courses/30/lessons/120820?language=javascript
// 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return

function solution(age) {
    return 2022 - age + 1;
}


console.log(solution(40)); // 1983
console.log(solution(23)); // 2000