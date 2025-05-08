// 객체 구조 분해 할당. 잘 기억하기
const pants = {
  productName: "배기팬츠",
  color: "검정색",
  price: 30000,
}; // 리터럴로 객체 생성

console.log(pants);
// const productName = pants.productName;
// const color = pants.color;
// const price = pants.price;
const { productName, price, color } = pants; // 객체라 순서변경은 가능, 분해할 때 줄 때 이름이 같은 애를 찾는건데 이름이 다르면 undefined 일어남.
console.log(productName);
console.log(price);
console.log(color);

// 각 변수의 서술 순서는 무관하여 {객체 프로퍼티:목표변수} 형식으로 작성하여여
// 프로퍼티 키값과 다른 변수명을 설정할 수 있다.

//먼저 작성. 이름을 변경하고 싶다면 :(콜론)을 이용해서 변경할 수 있다.
const { productName: pn, price: pr, color: co } = pants;
console.log(pn);
console.log(pr);
console.log(co);
