// https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript
// 주어진 문자열에서 한번만 나오는 문자를 사전 순서대로 출력

function solution(s) {
    let obj = {};

    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] === undefined) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }

    let answer = [];

    for (let key in obj) {
        if (obj[key] === 1) {
            answer.push(key);
        }
    }
    answer.sort();

    return answer.join('');
}



console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"