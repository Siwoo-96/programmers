// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript
// str1 안에 str2가 있다면 1을 없다면 2를 return

function solution(str1, str2) {
    return str1.includes(str2) ? 1 : 2;
}



console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
console.log(solution("AbcAbcA", "AAA")); // 2