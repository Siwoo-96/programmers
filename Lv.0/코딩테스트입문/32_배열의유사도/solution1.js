// https://school.programmers.co.kr/learn/courses/30/lessons/120903?language=javascript
// 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return

function solution(s1, s2) {
    let answer = 0;

    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                answer += 1;
            }
        }
    }
    
    return answer;
}


console.log(solution(["a", "b", "c"], ["com", "b", "d", "p", "c"])); // 2
console.log(solution(["n", "omg"], ["m", "dot"])); // 0