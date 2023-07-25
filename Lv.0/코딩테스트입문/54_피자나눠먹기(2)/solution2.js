// https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript

function solution(n) {
    let i = 1;

    while (true) {
        if ((i * 6) % n === 0) {
            break;
        }
        i++
    }

    return i;
}

console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2

//answer = (6의배수) % n === 0