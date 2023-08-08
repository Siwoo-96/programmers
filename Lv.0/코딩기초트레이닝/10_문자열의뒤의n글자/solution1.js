// https://school.programmers.co.kr/learn/courses/30/lessons/181910?language=javascript

function solution(my_string, n) {
    return my_string.slice(my_string.length - n);
}

console.log(solution("ProgrammerS123", 11)); // "grammserS123"
console.log(solution("He110W0r1d", 5)); // "W0r1d"