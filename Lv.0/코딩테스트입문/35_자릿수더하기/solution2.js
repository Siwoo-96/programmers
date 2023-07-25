// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript
// n의 각 자리 숫자의 합을 return

function solution(n) {
    return Array.from(String(n)).reduce((x, y) => {
        return Number(x) + Number(y)
    }, 0)
}



console.log(solution(1234)); // 10
console.log(solution(930211)); // 16