// https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript
// 배열에서 가장 큰 수와 그 큰수가 배열의 몇번째에 있는지 담는 배열을 출력

function solution(array) {
    const max = Math.max(...array);
    return [max, array.indexOf(max)]
}




console.log(solution([1, 8, 3])); // [8, 1]
console.log(solution([9, 10, 11, 8])); // [11, 2]