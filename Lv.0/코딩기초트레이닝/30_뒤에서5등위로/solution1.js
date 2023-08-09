// https://school.programmers.co.kr/learn/courses/30/lessons/181852?language=javascript

function solution(num_list) {
    num_list.sort((a, b) => a - b);

    return num_list.slice(5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])); // [15, 32, 38, 46, 56]