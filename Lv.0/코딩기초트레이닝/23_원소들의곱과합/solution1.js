// https://school.programmers.co.kr/learn/courses/30/lessons/181929?language=javascript

function solution(num_list) {
    const sum = num_list.reduce((a, b) => a + b, 0);
    const multi = num_list.reduce((a, b) => a * b, 1);

    return Math.pow(sum, 2) > multi ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0