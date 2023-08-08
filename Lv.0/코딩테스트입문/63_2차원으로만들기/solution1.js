// https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript
// 2차원 배열로 바꾸고 n은 배열 안의 개수

function solution(num_list, n) {
    let answer = [];
    for (let i = 0; i < num_list.length / n; i++) {
        let arr = [];
        for (let j = i * n; j < i * n + n; j++) {
            arr.push(num_list[j]);
        }
        answer.push(arr);
    }

    return answer;
}




console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]