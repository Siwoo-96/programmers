// https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript
// 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return

function solution(array) {
    array.sort((a, b) => a - b); 
    
    return array[Math.floor(array.length / 2)];
}


console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
