// https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript
// spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return

function solution(spell, dic) {
    const letter = spell.sort().join('');

    for (let i = 0; i < dic.length; i++) {
        const temp = Array.from(dic[i]).sort().join('');

        if (letter === temp) {
            return 1;
        }
    }

    return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); // 1
console.log(solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])); // 2