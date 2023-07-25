// https://school.programmers.co.kr/learn/courses/30/lessons/120813?language=javascript
// n 이하의 홀수가 오름차순으로 담긴 배열을 return

function solution(n) {
    let answer = [];

    for (let i = 1; i < n + 1; i++) {
        if (i % 2 === 1) {
            answer.push(i);
        }
    }

    return answer;
}



console.log(solution(10)); // [1, 3, 5, 7, 9]
console.log(solution(15)); // [1, 3, 5, 7, 9, 11, 13, 15]