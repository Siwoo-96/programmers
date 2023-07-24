// https://school.programmers.co.kr/learn/courses/30/lessons/120831?language=javascript
// n이하의 짝수의 합

function solution(n) {
    let answer = 0;
    
    for (let i = 1; i < n + 1; i++) {
        if (i % 2 === 0) {
            answer += i;
        }
    }

    return answer;
}


console.log(solution(10)); // 30
console.log(solution(4)); // 6
