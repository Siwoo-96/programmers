// https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript
// 배열에서 7이 몇개 들어있는지 확인

function solution(array) {
    const result = array.join('');
    let count = 0;

    for (let i = 0; i < result.length; i++) {
        if (result[i] === '7') {
            count += 1;
        }
    }

    return count;
}



console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0