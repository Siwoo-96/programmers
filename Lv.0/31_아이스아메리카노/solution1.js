// https://school.programmers.co.kr/learn/courses/30/lessons/120819?language=javascript
// 아이스 아메리카노 한잔에 5,500원 
// 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return

function solution(money) {
    let answer = [];
    answer[0] = Math.floor(money / 5500);
    answer[1] = money % 5500;

    return answer;
}



console.log(solution(5500)); // [1, 0]
console.log(solution(15000)); // [2, 4000]


//아메리카노 잔수 = Math.floor(money / 5500);
//잔돈 = money - (아메리카노 잔 수 * 5500)