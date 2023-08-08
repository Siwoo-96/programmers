// https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return

function solution(bin1, bin2) {
    return (parseInt(Number(bin1), 2) + parseInt(Number(bin2), 2)).toString(2);
}




console.log(solution("10", "11")); // "101"
console.log(solution("1001", "1111")); // "11000"
