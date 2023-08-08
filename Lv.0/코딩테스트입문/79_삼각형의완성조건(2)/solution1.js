// https://school.programmers.co.kr/learn/courses/30/lessons/120868?language=javascript
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 나머지 한 변이 될 수 있는 정수의 개수를 return

function solution(sides) {
    sides.sort((a, b) => a - b);

    let sum = sides[0] + sides[1];
    let answer = [];

    for (let i = 1; i <= sum; i++) {
        if (sides[1] <= i && i < sum) {
            answer.push(i);
        }

        if (sides[1] - sides[0] < i && sides[1] >= i) {
            answer.push(i);
        }
    }

    answer.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] !== answer[i + 1]) {
            count += 1;
        }
    }

    return count;
}



console.log(solution([1, 2])); // 1
console.log(solution([3, 6])); // 5
console.log(solution([11, 7])); // 13