// 프로토타입 접근 시 사용하는 모던 메소드
const user = {
  activate: true,
};

// Object.create(proto) : [[Prototype]]이 proto를 참조하는 빈 객체를 만드는 메소드
const student = Object.create(user);
console.log(student); // {}만 출력됨
console.log(student.activate); // 가장 가까운 내용의 프로토타입을 가져옴 그래서 true 출력됨

// Object.getPrototypeOf(obj) : obj의 [[Prototype]] 반환
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === user); // user타입이니? ㅇㅇ맞음

// Object.setPrototypeOf(obj, proto) : obj의 [[Prototype]]을 proto가 되도록 설정
Object.setPrototypeOf(student, {});
console.log(Object.getPrototypeOf(student));
console.log(Object.getPrototypeOf(student) === user); // user 타입 아님. false

// __proto__를 getter, setter로 직접 사용하면 키가 "__proto__"일 때 에러가 발생하는
// 의도치 않은 상황이 생길 수도 있으므로 메소드 사용을 권장한다.
const obj = Object.create(user); // obj라는 빈 객체를 만드는데 이 안에 프로토타입 속성에 user를 추가해 상속시키는 상태
let key = "__proto__";
console.log("-------->", obj[key]);
obj[key] = { test: "새로운 객체 덮어쓰기!!!" };
console.log(obj[key]);
console.log(obj.__proto__);
