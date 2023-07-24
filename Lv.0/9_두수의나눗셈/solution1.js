// https://school.programmers.co.kr/learn/courses/30/lessons/120806?language=javascript
// num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return

function solution(num1, num2) {
    return parseInt((num1 / num2 * 1000), 10);
}

//정수만 return = Math.trunc()

console.log(solution(3,2)); // 1500
console.log(solution(7,3)); // 2333
console.log(solution(1,16)); // 62