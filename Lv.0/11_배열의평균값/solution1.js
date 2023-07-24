// https://school.programmers.co.kr/learn/courses/30/lessons/120817?language=javascript
// numbers의 원소의 평균값을 return

function solution(numbers) {
    const avg = numbers.reduce((acc, cur, index, arr) => {
        if (index === arr.length - 1) {
            return (acc + cur) / arr.length;
        }
        return acc + cur;
    }, 0);

    return avg;
}


console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0