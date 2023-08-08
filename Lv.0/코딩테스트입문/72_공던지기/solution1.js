// https://school.programmers.co.kr/learn/courses/30/lessons/120843?language=javascript
// k번째로 공을 던지는 사람의 번호는 무엇인지 return

function solution(numbers, k) {
    answer = 0;
    for (let i = 0; i < numbers.length; i++) {
        answer = numbers[Math.abs((k - 1) * 2 % numbers.length)];
    }

    return answer;
}

console.log(solution([1, 2, 3, 4], 2)); // 3
console.log(solution([1, 2, 3, 4, 5, 6], 5)); // 3
console.log(solution([1, 2, 3], 3)); // 2