// https://school.programmers.co.kr/learn/courses/30/lessons/120853?language=javascript
// 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.

function solution(s) {
    const arr = s.split(' ');
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== 'Z' && arr[i] !== 'Z') {
            answer += Number(arr[i]);
        }
    }

    return answer;
}



console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3