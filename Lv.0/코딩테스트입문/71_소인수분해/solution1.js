// https://school.programmers.co.kr/learn/courses/30/lessons/120852?language=javascript
// n의 소인수를 오름차순으로 담은 배열을 return
function isPrime(x) {
    if (x === 1) {
        return false;
    }

    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(n) {
    let answer = [];

    for (let i = 1; i < n + 1; i++) {
        if (n % i === 0) {
            answer.push(i);
        }
    }
    
    let result = [];

    for (let i = 0; i < answer.length; i++) {
        if (isPrime(answer[i]) === true) {
            result.push(answer[i]);
        } 
    }
    
    return result;
}

console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]