// 두 개의 날짜 사이의 경과 시간 계산하기
Date.daysDiff = (date1, date2) => {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) return '';
    
    // 주어진 Date 객체 인스턴스 값에서 
    // 표준시(1970년 1월 1일 00:00:00 UTC) 사이의 경과 시간을 계산
    // 이를 밀리 단위로 환산하여 반환
    const d1 = date1.getTime();
    const d2 = date2.getTime();

    let diff = d2 - d1;

    const seconds = Math.floor((diff = diff / 1000) % 60);
    const minutes = Math.floor((diff = diff / 60) % 60);
    const hours = Math.floor((diff = diff / 60) % 24)
    const days = Math.floor(diff / 24);
    // return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
}

var from = new Date(2000, 0, 1);
var to = new Date(from.getFullYear() + 1, from.getMonth() + 3,
from. getDate() + 5, from.getHours() + 4, from.getMinutes() + 30,
from.getSeconds() + 50);

console.log(`From   > ${from}`)
console.log(`To     > ${to}`)
console.log(Date.daysDiff(from, to));

