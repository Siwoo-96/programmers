// https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript
// 배열에서 7이 몇개 들어있는지 확인

function solution(array) {
    let answer = 0;

    for (let i = 0; i < array.length; i++) {
        let seven = array[i].toString();
        for (let j = 0; j < seven.length; j++) {
            if (seven[j] === '7') {
                answer += 1;
            }
        }
    }

    return answer;
}



console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0