// https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript
// 1부터 숫자를 곱해서 n보다 작은 값이 나오는 값까지 곱하기

function solution(n) {
    let i = 1;
    let answer = 1;

    while (true) {
        answer *= i;

        if (n < answer) {
            return i - 1;
        }

        i++;
    }
}


console.log(solution(3628800)); // 10
console.log(solution(7)); // 3