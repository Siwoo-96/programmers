// https://school.programmers.co.kr/learn/courses/30/lessons/120835?language=javascript
// 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return

function solution(emergency) {
    let answer = [];
    for (let i = 0; i < emergency.length; i++) {
        answer.push(emergency[i]);
    }
    answer.sort((a, b) => b - a);

    for (let i = 0; i < emergency.length; i++) {
        emergency[i] = answer.indexOf(emergency[i]) + 1;
    }

    return emergency;
}



console.log(solution([3, 76, 24])); // [3, 1, 2]
// console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
// console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]