// https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript
/*
n이하의 합성수가 몇개인지
소수를 배열로 넣기
*/

function isPrime(x) {
    if (x === 1 || x === 2) {
        return true;
    }
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            count += 1;
        }
    }

    return n - count;
}




console.log(solution(10)); // 5
console.log(solution(15)); // 8