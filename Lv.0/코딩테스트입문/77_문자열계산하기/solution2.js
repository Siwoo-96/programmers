// https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript
// 주어진 문자열을 연산하기

function solution(my_string) {
    const temp = my_string.split(' ');

    let answer = Number(temp[0]);

    for (let i = 1; i < temp.length; i++) {
        if (temp[i] === '+' || temp[i] === '-') {
            continue;
        } else {
            if (temp[i - 1] === '+') {
                answer += Number(temp[i]);
            } else if (temp[i - 1] === '-') {
                answer -= Number(temp[i]);
            }
        }
    }

    return answer;
}



console.log(solution("3 + 4")); // 7