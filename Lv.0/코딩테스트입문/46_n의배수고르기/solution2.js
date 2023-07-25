// https://school.programmers.co.kr/learn/courses/30/lessons/120905?language=javascript
// numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return

const solution = (n, numlist) => {
    const answer = [];

    numlist.forEach((x) => {
        if (x % n === 0) {
            answer.push(x);
        }
    })

    return answer;
}




console.log(solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])); // [6, 9, 12]
console.log(solution(5, [1, 9, 3, 10, 13, 5])); // [10, 5]
console.log(solution(12, [2, 100, 120, 600, 12, 12])); // [120, 600, 12, 12]