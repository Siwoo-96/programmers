// https://school.programmers.co.kr/learn/courses/30/lessons/120897?language=javascript
// n의 약수를 오름차순으로 담은 배열을 return

function solution(n) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }

    return answer.sort((a, b) => a - b);
}


console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); // [1, 29]