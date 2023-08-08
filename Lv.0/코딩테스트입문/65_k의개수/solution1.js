// https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript
// i - j까지 k가 몇번나오는지?

function solution(i, j, k) {
    let answer = '';
    let result = 0;
    
    for (let x = i; x < j + 1; x++) {
        answer = x.toString();
        for (let j = 0; j < answer.length; j++) {
            if (answer[j] === k.toString()){
                result += 1;
            }
        }
    }

    return result;
}



console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0