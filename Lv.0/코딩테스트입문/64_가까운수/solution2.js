// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
// 배열에서 n과 가장 가까운 수를 리턴

function solution(array, n) {
    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++) {
        if (min > Math.abs(array[i] - n)) {
            min = Math.abs(array[i] - n)
        }
    }

    array.sort((a, b) => a - b)

    for (let i = 0; i < array.length; i++) {
        if (Math.abs(array[i] - n) === min) {
            return array[i];
        }
    }
}



console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12