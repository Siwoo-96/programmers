// https://school.programmers.co.kr/learn/courses/30/lessons/181842?language=javascript

function solution(str1, str2) {
    return str2.includes(str1) ? 1 : 0;
}

console.log(solution("abc", "aabcc")); // 1
console.log(solution("tbt", "tbbttb")); // 0