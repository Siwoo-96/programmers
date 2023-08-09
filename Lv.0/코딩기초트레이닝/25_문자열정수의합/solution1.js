// https://school.programmers.co.kr/learn/courses/30/lessons/181849?language=javascript

function solution(num_str) {
    let answer = 0;

    for (let i = 0; i < num_str.length; i++) {
        answer += Number(num_str[i]);
    }

    return answer;
}

console.log(solution("123456789")); // 45
console.log(solution("1000000")); // 1