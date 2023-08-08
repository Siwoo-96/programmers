// https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript
// 2차원 배열로 바꾸고 n은 배열 안의 개수

function solution(num_list, n) {
    const answer = [];

    for (let i = 0; i < num_list.length; i += n) {
        const temp = [];

        for (let j = i; j < i + n; j++) {
            temp.push(num_list[j]);
        }
        answer.push(temp);
    }

    return answer;
}




console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]