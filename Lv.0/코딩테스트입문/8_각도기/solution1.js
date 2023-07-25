// https://school.programmers.co.kr/learn/courses/30/lessons/120829?language=javascript
// 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return
/**
예각 : 0 < angle < 90
직각 : angle = 90
둔각 : 90 < angle < 180
평각 : angle = 180
 */

function solution(angle) {
    if (angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (angle < 180) {
        return 3;
    } else if (angle === 180) {
        return 4;
    }
}



console.log(solution(70)); // 1
console.log(solution(91)); // 3
console.log(solution(180)); // 4