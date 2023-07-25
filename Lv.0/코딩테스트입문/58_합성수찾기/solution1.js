// https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript
/*
n이하의 합성수가 몇개인지
소수를 배열로 넣기
*/

function solution(n) {
    let answer = 0;

    for (let i = 1; i < n + 1; i++) {
        let count = 0;
        for (let j = 1; j < i + 1; j++) {
            if (i % j === 0) {
                count += 1;
            }
        }
        if (count >= 3) {
            answer += 1;
        }
    }

    return answer;
}




console.log(solution(10)); // 5
console.log(solution(15)); // 8