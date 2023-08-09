// https://school.programmers.co.kr/learn/courses/30/lessons/181929?language=javascript

function solution(num_list) {
    const multiply = num_list.reduce((x, y) => x * y, 1);
    const sum = Math.pow(num_list.reduce((x, y) => x + y, 0), 2);

    return multiply < sum ? 1 : 0
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0