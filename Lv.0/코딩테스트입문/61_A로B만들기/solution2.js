// https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript
// before의 순서를 바꿔서 after가 나오면 1 아니면 0을 리턴

function solution(before, after) {
    return Array.from(before).sort().join('') === Array.from(after).sort().join('') ? 1 : 0;
}



console.log(solution("olleh", "hello")); // 1
console.log(solution("allpe", "apple")); // 0