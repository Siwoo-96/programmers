// https://school.programmers.co.kr/learn/courses/30/lessons/120840?language=javascript
// balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return

function factorial(num) {
    let total = 1;

    for (let i = num; i > 1; i--) {
        total *= i;
    }
    return total;
}

function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}



console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10
