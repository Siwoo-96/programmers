// https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript
// 주어진 문자열을 연산하기

function solution(my_string) {
    const sum = my_string.split(' ');
    let answer = Number(sum[0]);

    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === ' ') {
            continue;
        } else if (sum[i] === '+') {
            answer += Number(sum[i + 1]);
        } else if (sum[i] === '-') {
            answer -= Number(sum[i + 1]);
        }
    }

    return answer;
}



console.log(solution("3 + 4")); // 7