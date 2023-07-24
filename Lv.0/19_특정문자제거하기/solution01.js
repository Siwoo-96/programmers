// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript
// my_string에서 letter를 제거한 문자열을 return

function solution(my_string, letter) {
    let answer = '';

    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] !== letter) {
            answer += my_string[i];
        }
    }

    return answer;
}


console.log(solution("abcdef", "f")); // "abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"