// https://school.programmers.co.kr/learn/courses/30/lessons/181882?language=javascript

function solution(arr) {
    let answer = arr.map(x => {
        if (x >= 50 && x % 2 === 0) {
            return x / 2;
        } else if (x < 50 && x % 2 === 1) {
            return x * 2;
        } else {
            return x;
        }
    })
    
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // [2, 2, 6, 50, 99, 49]