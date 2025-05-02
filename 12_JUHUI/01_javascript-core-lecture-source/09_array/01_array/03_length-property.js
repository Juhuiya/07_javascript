// length property는 요소의 개수를 나타내는 0이상의 정수 값을 가진다.
console.log([].length);
const arr = [1, 2, 3, 4, 5];
console.log(arr.length);

// length property 값은 배열에 요소를 추가하거나 삭제하면 자동으로 갱신된다.
arr.push(6);
console.log(arr);
console.log(arr.length);
arr.pop();
console.log(arr);
console.log(arr.length);

arr.length = 3;
console.log(arr);
console.log(arr.length);

arr.length = 10;
console.log(arr);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr));

// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소배열을 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);
console.log(sparse.length); // 값은 없지만 자리는 잡고 있음
console.log(Object.getOwnPropertyDescriptors(sparse));

// 객체에서 프로퍼티를 순회한다 >>>> for in 구문 사용
const obj = { name: "홍길동", age: 20 };
for (let test in obj) {
  console.log(test);
}

// key값 순회(length property 미포함함)
for (let key in arr) {
  console.log(key);
}

console.log("---------------");
// value값 순회(현재 가지고 있는 length 만큼 반복)
for (let item of arr) {
  console.log(item);
}
