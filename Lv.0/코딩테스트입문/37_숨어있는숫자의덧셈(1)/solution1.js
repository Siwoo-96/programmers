// https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript
// my_string안의 모든 자연수들의 합을 return

function solution(my_string) {
    const num = '0123456789';
    let answer = 0;

    for (let i = 0; i < my_string.length; i++) {
        if (num.includes(my_string[i])) {
            answer += Number(my_string[i]);
        }
    }

    return answer;
}



console.log(solution("aAb1B2cC34oOp")); // 10
console.log(solution("1a2b3c4d123")); // 16