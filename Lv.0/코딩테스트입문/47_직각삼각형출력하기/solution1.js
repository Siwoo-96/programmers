// https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

function solution(n) {
    let answer = '';

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i + 1; j++) {
            answer += '*'
        }
        answer += '\n'
    }

    return answer;
}

console.log(solution(3));
// *
// **
// ***

console.log(solution(5));
// *
// **
// ***
// ****
// *****