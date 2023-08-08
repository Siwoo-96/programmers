// https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript

function solution(numbers) {
    const arr = [
        "zero", "one", "two", "three", "four", 
        "five", "six", "seven", "eight", "nine"
    ]

    let answer = '';
    let letter = '';

    for (let i = 0; i < numbers.length; i++) {
        letter += numbers[i];
        if (arr.includes(letter)) {
            answer += arr.indexOf(letter);
            letter = '';
        }
    }

    return Number(answer);
}


console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
