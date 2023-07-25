// https://school.programmers.co.kr/learn/courses/30/lessons/120839?language=javascript /
// 가위는 2 바위는 0 보는 5로 표현합니다. 
// rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return

function solution(rsp) {
    let answer = '';

    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            answer += '0';
        } else if (rsp[i] === '0') {
            answer += '5';
        } else if (rsp[i] === '5') {
            answer += '2';
        }
    }

    return answer;
}


console.log(solution("2")); // "0"
console.log(solution("205")); // "052"