// https://school.programmers.co.kr/learn/courses/30/lessons/120906?language=javascript
// n의 각 자리 숫자의 합을 return

function solution(n) {
    const letter = n.toString();

    let answer = 0;
    
    for (let i = 0; i < letter.length; i++) {
        answer += Number(letter[i]);
    }

    return answer;
}



console.log(solution(1234)); // 10
console.log(solution(930211)); // 16