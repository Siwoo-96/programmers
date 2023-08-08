// https://school.programmers.co.kr/learn/courses/30/lessons/181936?language=javascript

function solution(number, n, m) {
    return number % n === 0 && number % m === 0 ? 1 : 0;
}

console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0