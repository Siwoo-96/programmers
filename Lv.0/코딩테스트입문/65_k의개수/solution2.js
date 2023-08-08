// https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript
// i - j까지 k가 몇번나오는지?

function solution(i, j, k) {
    let count = 0;

    for (let x = i; x <= j; x++) {
        const temp = String(x);

        for (let y = 0; y < temp.length; y++) {
            if (Number(temp[y]) === k) {
                count += 1;
            }
        }
    }

    return count;
}



console.log(solution(1, 13, 1)); // 6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0