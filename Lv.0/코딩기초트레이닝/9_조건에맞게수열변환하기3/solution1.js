// https://school.programmers.co.kr/learn/courses/30/lessons/181835?language=javascript

function solution(arr, k) {
    let answer = arr.map(x => {
        if (k % 2 === 0) {
            return x + k;
        } else {
            return x * k
        }
    })
    
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98], 3)); // [3, 6, 9, 300, 297, 294]
console.log(solution([1, 2, 3, 100, 99, 98], 2)); // [3, 4, 5, 102, 101, 100]