// https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript
// num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return

function solution(num_list) {
    let answer = new Array(2).fill(0);

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            answer[0] += 1;
        } else {
            answer[1] += 1;
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]