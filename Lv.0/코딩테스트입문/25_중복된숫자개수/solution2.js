// https://school.programmers.co.kr/learn/courses/30/lessons/120583?language=javascript
// array에 n이 몇 개 있는 지를 return

function solution(array, n) {
    return array.filter(x => x === n).length;
}



console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0