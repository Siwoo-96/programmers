// https://school.programmers.co.kr/learn/courses/30/lessons/181879?language=javascript

function solution(num_list) {
    return num_list.length > 10 ? num_list.reduce((x, y) => x + y, 0) : num_list.reduce((x, y) => x * y, 1);
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1])); // 51
console.log(solution([2, 3, 4, 5])); // 120