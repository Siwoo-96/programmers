// https://school.programmers.co.kr/learn/courses/30/lessons/120838?language=javascript

function solution(letter) {
    morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    const m = letter.split(' ');

    let answer = '';

    for (let i = 0; i < m.length; i++) { 
        answer += morse[m[i]];  
    }
    
    return answer;
}



console.log(solution(".... . .-.. .-.. ---")); // "hello"
console.log(solution(".--. -.-- - .... --- -.")); // "python"