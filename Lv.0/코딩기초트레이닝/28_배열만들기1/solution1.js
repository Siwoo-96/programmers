// https://school.programmers.co.kr/learn/courses/30/lessons/181901?language=javascript

function solution(n, k) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % k === 0) {
            answer.push(i)
        }
    }
    
    return answer;
}

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]