// https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript
// 주어진 문자에서 중복된 문자 제거

function solution(my_string) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        if (!answer.includes(my_string[i])) {
            answer += my_string[i];
        }
    }

    return answer;
}


console.log(solution("people")); // "peol"
console.log(solution("We are the world")); // "We arthwold"