// https://school.programmers.co.kr/learn/courses/30/lessons/120910?language=javascript
// 1시간에 두배만큼 증식 / t시간 후 세균의 수를 return

function solution(n, t) {
    let answer = n;

    for (let i = 1; i < t + 1; i++) {
        answer = answer * 2;
    }

    return answer;
}



console.log(solution(2, 10)); // 2048
console.log(solution(7, 15)); // 229,376