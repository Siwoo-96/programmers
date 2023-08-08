// https://school.programmers.co.kr/learn/courses/30/lessons/120852?language=javascript
// n의 소인수를 오름차순으로 담은 배열을 return

function isPrime(x) {
    if (x === 2) {
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
    let i = 2;
    const answer = [];

    for (let i = 2; i <= n; i++) {
        if (!isPrime(i)) {
            continue;
        }
        while (true) {
            if (n % i === 0) {
                if (!answer.includes(i)) {
                    answer.push(i);
                }
                n = n / i;
            } else {
                break;
            }
        }
    }

    return answer;
}

console.log(solution(12)); // [2, 3]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]