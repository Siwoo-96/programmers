// https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript
// n만큼 문자열을 잘라서 배열로 만들기

function solution(my_str, n) {
    let answer = [];
    let letter = '';
    
    for (let i = 0; i < my_str.length; i++) {
        letter += my_str[i];
        if (letter.length === n) {
            answer.push(letter);
            letter = '';
        }
    }

    if (letter.length !== 0) {
        answer.push(letter);
    }

    return answer;
}


console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]