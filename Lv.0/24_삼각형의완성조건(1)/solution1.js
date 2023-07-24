// https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 세 변으로 삼각형을 만들 수 있다면 1, 만들 수 없다면 2를 return

function solution(sides) {
    sides.sort((a, b) => b - a);
    
    if (sides[0] < sides[1] + sides[2]) {
        return 1;
    } else {
         return 2;
    }
}


console.log(solution([1, 2, 3])); // 2
console.log(solution([3, 6, 2])); // 2
console.log(solution([199, 72, 222])); // 1