// https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript
// 주어진 문자열에서 num1 과 num2의 위치에 있는 글자를 바꿔라

function solution(my_string, num1, num2) {
    let answer = '';

    for (let i = 0; i < num1; i++) {
        answer += my_string[i];
    }

    answer += my_string[num2];

    for (let i = num1 + 1; i < num2; i++) {
        answer += my_string[i];
    }

    answer += my_string[num1];

    for (let i = num2 + 1; i < my_string.length; i++) {
        answer += my_string[i];
    }

    return answer;
}




console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"