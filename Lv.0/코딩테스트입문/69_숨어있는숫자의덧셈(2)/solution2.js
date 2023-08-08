// https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript
// 문자열 안에 숫자들의 합

function solution(s) {
    const num = '0123456789';
    let temp = '';
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        if (num.includes(s[i])) {
            temp += s[i];
        } else {
            if (num.includes(s[i - 1])) {
                sum += Number(temp);
                temp = ''
            } else {
                temp = '';
            }
        }
    }

    if (temp !== '') {
        sum += Number(temp);
    }

    return sum;
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("a1b23")); // 24