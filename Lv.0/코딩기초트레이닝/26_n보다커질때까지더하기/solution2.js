// https://school.programmers.co.kr/learn/courses/30/lessons/181884?language=javascript

function solution(numbers, n) {
    let answer = 0;
    let i = 0;

    while (answer <= n) {
        answer += numbers[i];
        i++;
    }

    return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239