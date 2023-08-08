// https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript
// 1부터 숫자를 곱해서 n보다 작은 값이 나오는 값까지 곱하기

function solution(n) {
    let multipl = 1;
    let answer = 0;

    for (let i = 1; i < n + 1; i++) {
        multipl *= i;
        if (multipl <= n) {
            answer += 1;
        }
    }

    return answer;
}


console.log(solution(3628800)); // 10
console.log(solution(7)); // 3