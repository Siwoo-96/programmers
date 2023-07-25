// https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript
//num에 k가 있으면 k가 들어있는 숫자의 자리수를 리턴 없으면 -1리턴

function solution(num, k) {
    const answer = String(num);
    return answer.includes(k) ? answer.indexOf(k) + 1 : -1;
}



console.log(solution(29183, 1)); // 3
console.log(solution(232443, 4)); // 4
console.log(solution(123456, 7)); // -1