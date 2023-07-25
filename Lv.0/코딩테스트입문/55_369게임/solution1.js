// https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript
// order은 말해야하는 숫자, 3,6,9 가 몇번 들어가는지 출력

function solution(order) {
    const num = order.toString();
    const speak = '369';

    let answer = 0;

    for (let i = 0; i < num.length; i++) {
        if (speak.includes(num[i])) {
            answer += 1;
        }
    }

    return answer;
}



console.log(solution(3)); // 1
console.log(solution(29423)); // 2