// 나머지 매개변수(...)
function merge(msg1, msg2) {
  console.log(arguments); // 받은거 확인
  return msg1 + msg2;
}

console.log(merge("안녕하세요.")); //정해진 인수보다 적게 전달되면 undefined.
console.log(merge("안녕하세요.", "반갑습니다."));
console.log(merge("안녕하세요.", "반갑습니다.", "제 이름은 홍길동입니다.")); //많이 전달되면 해당 인수 무시하고 동작.

console.log(`----------------------------------------------------`);

// 나머지 매개변수(...)를 활용해서 변경
function mergeAll(...args) {
  let msg = "";
  for (let arg of args) msg += arg;
  return msg;
}

console.log(mergeAll("안녕하세요."));
console.log(mergeAll("안녕하세요.", "반갑습니다."));
console.log(mergeAll("안녕하세요.", "반갑습니다.", "제 이름은 홍길동입니다.")); 