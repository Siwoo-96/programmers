// https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript
// 배열에서 가장 큰 수와 그 큰수가 배열의 몇번째에 있는지 담는 배열을 출력

function solution(array) {
    let max = array[0];

    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    let answer = [];

    answer.push(max);
    answer.push(array.indexOf(max));

    return answer;
}




console.log(solution([1, 8, 3])); // [8, 1]
console.log(solution([9, 10, 11, 8])); // [11, 2]