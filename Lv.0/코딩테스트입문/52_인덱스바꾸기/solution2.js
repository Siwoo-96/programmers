// https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript
// 주어진 문자열에서 num1 과 num2의 위치에 있는 글자를 바꿔라

function solution(my_string, num1, num2) {
    const arr = Array.from(my_string);
    let temp = arr[num1];
    arr[num1] = arr[num2];
    arr[num2] = temp;

    return arr.join('');
}




console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"