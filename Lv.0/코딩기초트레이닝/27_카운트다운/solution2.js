// https://school.programmers.co.kr/learn/courses/30/lessons/181899?language=javascript

function solution(start, end) {
    const answer = [];

    while (start !== end - 1) {
        answer.push(start);
        start -= 1;
    }

    return answer;
}

console.log(solution(10, 3)); // [10, 9, 8, 7, 6, 5, 4, 3]