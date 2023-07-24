// https://school.programmers.co.kr/learn/courses/30/lessons/120836?language=javascript
// 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return

function solution(n) {
    let answer = 0;

    for (let i = 1; i < n + 1; i++) {
        if (n % i === 0) {
            answer += 1;
        }
    }

    return answer;
}



console.log(solution(20)); // 6
console.log(solution(100)); // 9