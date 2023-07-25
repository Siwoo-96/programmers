// https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript
// 주어진 문자열에서 소문자는 대문자로 바꾸고 대문자는 소문자로 변경

function solution(my_string) {
    const upper = my_string.toUpperCase();
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        if (upper.includes(my_string[i])) {
            answer += my_string[i].toLowerCase();
        } else {
            answer += my_string[i].toUpperCase();
        }
    }

    return answer;
}



console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"