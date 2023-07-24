// https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript
// numbers의 원소의 평균값을 return

function solution(numbers) {
    let answer = 0;

    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }

    return (answer / numbers.length).toFixed(1);
}


console.log (solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log (solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0