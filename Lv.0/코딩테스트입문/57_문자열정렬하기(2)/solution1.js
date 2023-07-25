// https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript
//소문자로 바꾸고, 알파벳 순서대로 정렬

function solution(my_string) {
    let letter = Array.from(my_string.toLowerCase()).sort();

    return letter.join('');
}


console.log(solution("Bcad")); // "abcd"
console.log(solution("heLLo")); // "ehllo"
console.log(solution("Python")); // "hnopty"