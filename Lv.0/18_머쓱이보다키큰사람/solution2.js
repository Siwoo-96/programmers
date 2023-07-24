// https://school.programmers.co.kr/learn/courses/30/lessons/120585?language=javascript
// 배열에서 height 보다 키 큰 사람은 몇명인가

function solution(array, height) {
    let answer = 0;

    array.forEach((x) => {
        if (x > height) {
            answer += 1;
        }
    })

    return answer;
}

console.log(solution([149, 180, 192, 170], 167)); // 3
console.log(solution([180, 120, 140], 190)); // 0