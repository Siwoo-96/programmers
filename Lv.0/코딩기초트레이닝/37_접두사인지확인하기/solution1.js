// https://school.programmers.co.kr/learn/courses/30/lessons/181906?language=javascript

function solution(my_string, is_prefix) {
    let temp = '';

    for (let i = 0; i < my_string.length; i++) {
        temp += my_string[i];
        if (temp === is_prefix) {
            return 1;
        }
    }
    
    return 0;
}

console.log(solution("banana", "ban")); //, 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0