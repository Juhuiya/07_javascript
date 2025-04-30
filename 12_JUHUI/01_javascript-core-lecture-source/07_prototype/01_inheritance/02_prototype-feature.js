// 프로토타입 특징
const user = {
  id: "user",
  login() {
    console.log(`${this.id}님 로그인 되었습니다.`);
  },
};

// login() {
//   console.log(`${this.id}님 로그인 되었습니다.`);
// },가

// login : function() {
//   console.log(`${this.id}님 로그인 되었습니다`);
// }; 이렇게 축약된거임.

const student = {
  __proto__: user,
};

// student.__proto__.id가 아니라
student.id = "user01"; // 이렇게 사용
// 프로토타입은 프로퍼티를 읽을 때만 사용하며 프로퍼티 추가, 수정, 삭제 연산은 언제나 객체에 직접한다.
console.log(student);
// login 메소드 내의 this는 프로토타입의 영향을 받지 않으며 this는 언제나 .앞에 잇는 객체를 의미한다.
student.login();
console.log(`🐯🐰🐻🐱🐵🐶🐺🦊`);

for (let key in student) {
  // for in 반복문은 상속 프로퍼티도 순회 대상에 포함시킨다.
  //console.log(key);
  let isOwn = student.hasOwnProperty(key);
  if (isOwn) {
    console.log(`객체 자신의 property : ${key}`);
  } else {
    console.log(`상속 property : ${key}`);
  }
}
