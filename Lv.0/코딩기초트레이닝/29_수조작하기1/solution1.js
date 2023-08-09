// https://school.programmers.co.kr/learn/courses/30/lessons/181926?language=javascript

function solution(n, control) {
    const obj = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10
    }

    for (let i = 0; i < control.length; i++) {
        n += obj[control[i]];
    }

    return n;
}

console.log(solution(0, "wsdawsdassw")); // -1