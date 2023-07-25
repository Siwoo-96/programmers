// https://school.programmers.co.kr/learn/courses/30/lessons/120850?language=javascript
// my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return

function solution(my_string) {
    const num = '0123456789';
    const answer = [];

    for (let i = 0; i < my_string.length; i++) {
        if (num.includes(my_string[i])) {
            answer.push(Number(my_string[i]));
        }
    }

    return answer.sort((a, b) => a - b);
}


console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); // [2, 2, 4, 8]
console.log(solution("abcde0")); // [0]