// https://school.programmers.co.kr/learn/courses/30/lessons/181884?language=javascript

function solution(numbers, n) {
    let answer = 0;

    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
        if (answer > n) {
            return answer;
        }
    }
}

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239