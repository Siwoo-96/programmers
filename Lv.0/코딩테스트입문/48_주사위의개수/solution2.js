// https://school.programmers.co.kr/learn/courses/30/lessons/120845
// 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 
// 상자에 들어갈 수 있는 주사위의 최대 개수를 return

function solution(box, n) {
    let answer = box.map((x) => Math.floor(x / n));
    return answer.reduce((x, y) => x * y, 1);
}


console.log(solution([1, 1, 1], 1)); // 1
console.log(solution([10, 8, 6], 3)); // 12