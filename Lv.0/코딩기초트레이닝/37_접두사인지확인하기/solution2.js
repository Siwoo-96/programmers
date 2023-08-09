// https://school.programmers.co.kr/learn/courses/30/lessons/181906?language=javascript

function solution(my_string, is_prefix) {
    for (let i = 0; i < is_prefix.length; i++) {
        if (is_prefix[i] !== my_string[i]) {
            return 0
        }
    }

    return 1;
}

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0