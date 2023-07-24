// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript
// 주어진 문자열에서 n번만큼 글자를 반복 출력하기

function solution(my_string, n) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        for (let j = 0; j < n; j++) {
            answer += my_string[i];
        }
    }

    return answer;
}



console.log(solution("hello", 3)); // "hhheeellllllooo"