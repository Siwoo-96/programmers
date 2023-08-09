// https://school.programmers.co.kr/learn/courses/30/lessons/181935?language=javascript

function solution(n) {
    let odd = 0;
    let even = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            even += Math.pow(i, 2);
        } else {
            odd += i;
        }
    }

    return n % 2 === 0 ? even : odd;
}

console.log(solution(7)); // 16
console.log(solution(10)); // 220