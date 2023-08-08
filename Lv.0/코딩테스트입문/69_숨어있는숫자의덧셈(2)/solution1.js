// https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript
// 문자열 안에 숫자들의 합

function isNumber(c) {
    const numbers = '012345689';

    for (let i = 0; i < numbers.length; i++) {
        if (c === numbers[i]) {
            return true;
        }
    }

    return false;
}

function solution(s) {
    let result = 0;
    let temp = '';

    for (let i = 0; i < s.length; i++) {
        if (isNumber(s[i])) {
            temp += s[i];
        } else {
            if (temp != '') {
                result += Number(temp);
                temp = '';
            }
        }
    }

    if (temp.length !== 0) {
        result += Number(temp);
    }

    return result;
}

console.log(solution("aAb1B2cC34oOp")); // 37
console.log(solution("1a2b3c4d123Z")); // 133
console.log(solution("a1b23")); // 24