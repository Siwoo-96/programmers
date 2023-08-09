// https://school.programmers.co.kr/learn/courses/30/lessons/181839?language=javascript

function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) {
        return Math.pow(a, 2) + Math.pow(b, 2);
    } else if (a % 2 === 1 || b % 2 === 1) {
        return 2 * (a + b);
    } else {
        return a > b ? a - b : b - a;
    }
}

console.log(solution(3, 5)); // 34
console.log(solution(6, 1)); // 14
console.log(solution(2, 4)); // 2