// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript
// 주어진 문자열 뒤집어서 출력

function solution(my_string) {
    return Array.from(my_string).reverse().join('');
}



console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); // "daerb"