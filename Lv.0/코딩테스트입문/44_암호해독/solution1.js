// https://school.programmers.co.kr/learn/courses/30/lessons/120892?language=javascript
// 문자열에서 code의 배수 번째 글자만 진짜 암호
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return

function solution(cipher, code) {
    let answer = '';
    
    for (let i = 0; i < cipher.length; i++) {
        if ((i + 1) % code === 0) {
            answer += cipher[i];
        }
    }

    return answer;
}






console.log(solution("dfjardstddetckdaccccdegk", 4)); // "attack"
console.log(solution("pfqallllabwaoclk", 2)); // "fallback"