// https://school.programmers.co.kr/learn/courses/30/lessons/181939?language=javascript

function solution(a, b) {
    const numA = Number(String(a) + String(b));
    const numB = Number(String(b) + String(a));

    return numA > numB ? numA : numB;
}

console.log(solution(9, 91)); // 991
console.log(solution(89, 8)); // 898