// https://school.programmers.co.kr/learn/courses/30/lessons/120862?language=javascript
// numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return

function solution(numbers) {
    let max = numbers[0] * numbers[1];

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (max < numbers[i] * numbers[j]) {
                max = numbers[i] * numbers[j]
            }
        }
    }

    return max;
}




console.log(solution([1, 2, -3, 4, -5])); // 15
console.log(solution([0, -31, 24, 10, 1, 9])); // 240
console.log(solution([10, 20, 30, 5, 5, 20, 5])); // 600