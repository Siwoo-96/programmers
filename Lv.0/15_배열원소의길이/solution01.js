// https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript
// strlist 각 원소의 길이를 담은 배열을 retrun

function solution(strlist) {
    const answer = [];

    for (let i = 0; i < strlist.length; i++) {
        answer.push(strlist[i].length);
    }

    return answer;
}

	

console.log(solution(["We", "are", "the", "world!"])); // [2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); // [1, 4, 12]