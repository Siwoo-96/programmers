// https://school.programmers.co.kr/learn/courses/30/lessons/120838?language=javascript

function solution(letter) {
    morse = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
        '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
        '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
        '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
        '-.--': 'y', '--..': 'z'
    }

    return letter.split(' ').map(x => morse[x]).join('');
}



console.log(solution(".... . .-.. .-.. ---")); // "hello"
console.log(solution(".--. -.-- - .... --- -.")); // "python"