// https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return

function solution(spell, dic) {
    let letter = spell.sort().join('');

    let answer = [];

    for (let i = 0; i < dic.length; i++) {
        let arr = Array.from(dic[i]);
        answer.push(arr.sort().join(''));
    }

    for (let i = 0; i < answer.length; i++) {
        if (letter === answer[i]) {
            return 1;
        }
    }

    return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); // 2