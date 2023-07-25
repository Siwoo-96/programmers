// https://school.programmers.co.kr/learn/courses/30/lessons/120815?language=javascript

function solution(n) {
    let pizza = 6;
    
    while (pizza % n !== 0) {
        pizza += 6;
    }

    return pizza / 6;
}






console.log(solution(6)); // 1
console.log(solution(10)); // 5
console.log(solution(4)); // 2

//answer = (6의배수) % n === 0