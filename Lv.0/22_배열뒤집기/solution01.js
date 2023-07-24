// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript
// num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return

function solution(num_list) {
    return num_list.reverse();
}



console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]