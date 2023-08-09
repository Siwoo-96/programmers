// https://school.programmers.co.kr/learn/courses/30/lessons/181935?language=javascript

function odd(x) {
    let answer = 0;

    for (let i = 1; i <= x; i++) {
        if (i % 2 === 1) {
            answer += i;
        }
    }

    return answer;
}

function even(x) {
    let answer = 0;

    for (let i = 1; i <= x; i++) {
        if (i % 2 === 0) {
            answer += Math.pow(i, 2);
        }
    }

    return answer;
}

function solution(n) {
    return n % 2 === 0 ? even(n) : odd(n);
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220