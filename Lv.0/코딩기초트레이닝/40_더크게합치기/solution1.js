// https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=javascript

function solution(a, b) {
    return Number(String(a) + String(b)) < Number(String(b) + String(a)) ? Number(String(b) + String(a)) : Number(String(a) + String(b));
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898