// https://school.programmers.co.kr/learn/courses/30/lessons/120844?language=javascript
// 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return

function solution(numbers, direction) {
    let answer = [];

    if (direction === 'right') {
        answer.push(numbers[numbers.length - 1]);

        for (let i = 0; i < numbers.length - 1; i++) {
            answer.push(numbers[i]);
        }
    }

    if (direction === 'left') {
        for (let i = 1; i < numbers.length; i++) {
            answer.push(numbers[i]);
        }
        
        answer.push(numbers[0]);
    }

    return answer;
}



console.log(solution([1, 2, 3], "right")); // [3, 1, 2]
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left")); // [455, 6, 4, -1, 45, 6, 4]