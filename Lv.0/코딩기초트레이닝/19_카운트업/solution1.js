// https://school.programmers.co.kr/learn/courses/30/lessons/181920?language=javascript

function solution(start, end) {
    const answer = [];

    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    
    return answer;
}

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]