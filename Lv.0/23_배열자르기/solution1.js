// https://school.programmers.co.kr/learn/courses/30/lessons/120833?language=javascript
// numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return

function solution(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}



console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]