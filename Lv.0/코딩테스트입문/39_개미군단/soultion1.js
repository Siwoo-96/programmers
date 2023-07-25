// https://school.programmers.co.kr/learn/courses/30/lessons/120837?language=javascript
// 장군개미는 5의 공격력을, 병정개미는 3의 공격력을 일개미는 1의 공격력이 있고 최소한의 병력으로 물리치기

function solution(hp) {
    const first = Math.floor(hp / 5);
    const second = Math.floor((hp % 5) / 3);
    const third = hp - (first * 5 + second * 3);

    return first + second + third;
}



console.log(solution(23)); // 5
console.log(solution(24)); // 6
console.log(solution(999)); // 201