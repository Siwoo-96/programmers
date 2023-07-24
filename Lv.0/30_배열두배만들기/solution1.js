// https://school.programmers.co.kr/learn/courses/30/lessons/120809?language=javascript
// numbers의 각 원소에 두배한 원소를 가진 배열을 return

function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);
    }

    return answer;
}


console.log(solution([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); // [2, 4, 200, -198, 2, 4, 6]