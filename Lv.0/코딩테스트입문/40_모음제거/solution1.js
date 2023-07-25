// https://school.programmers.co.kr/learn/courses/30/lessons/120849?language=javascript
// a, e, i, o, u 를 제거

function solution(my_string) {
    const letter = 'aeiou';
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        if (!letter.includes(my_string[i])) {
            answer += my_string[i];
        }
    }

    return answer;
}

//문자열이 포함되어있다면, 잘라내기

console.log(solution("bus")); // "bs"
console.log(solution("nice to meet you")); // "nc t mt y"