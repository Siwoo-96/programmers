// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript
// 배열에서 n과 가장 가까운 수를 리턴

function solution(array, n) {
    const arr = array.sort((a, b) => a - b);
    let answer = Infinity;
    let min = 0;

    for (let i = 0; i < arr.length; i++) {
        let result = Math.abs(n - arr[i])
        if (answer > result) {
            answer = result;
            min = array[i];
        }
    }

    return min;
}



console.log(solution([3, 10, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12