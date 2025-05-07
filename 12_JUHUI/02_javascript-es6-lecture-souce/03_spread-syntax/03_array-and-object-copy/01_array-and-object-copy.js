// 스프레드 문법의 활용 => 배열 또는 객체를 복사할 때 주로 사용한다.

const arr = [10, 20, 30];
const arrCopy = [...arr];
console.log(arr);
console.log(arrCopy);
console.log(arr === arrCopy); // 연결을 끊고 새로운 주소를 가진 배열객체를 만들겠다

const obj = { name: "홍길동", age: 19 };
//const objCopy = { ...obj };
const objCopy = { ...obj, name: "유관순" }; //obj는 객체고, name값을 가지고 있는데 name이 또 있으면 덮어쓰기됨. 해당 내용의 값만 넣어주면 됨. 이런 방식을 잘 사용할 거니까 잘 기억. 많이 축약해서 사용하는거
console.log(obj);
console.log(objCopy);
console.log(obj === objCopy);
