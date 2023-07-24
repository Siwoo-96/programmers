// https://school.programmers.co.kr/learn/courses/30/lessons/120909?language=javascript
// n이 제곱수라면 1을 아니라면 2를 return

function solution(n) {
    for (let i = 0; i < n / 2; i++) {
        if (i * i === n) {
            return 1;
        }
    }
    return 2;
}


console.log(solution(144)); // 1
console.log(solution(976)); // 2