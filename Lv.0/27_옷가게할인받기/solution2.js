// https://school.programmers.co.kr/learn/courses/30/lessons/120818?language=javascript
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return
// 소수점 이하를 버린 정수를 return

function solution(price) {
    if (price < 100000) {
        return price;
    } else if (price < 300000) {
        return Math.floor(price * 0.95);
    } else if (price < 500000) {
        return Math.floor(price * 0.9);
    } else {
        return Math.floor(price * 0.8);
    }
}



console.log(solution(150000)); // 142,500
console.log(solution(580000)); // 464,000