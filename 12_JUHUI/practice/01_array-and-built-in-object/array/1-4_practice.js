function Student(firstName, lastName, score){
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

const studentList = [
  new Student('길동', '홍', 60),
  new Student('보고', '장', 70),
  new Student('관순', '유', 80)
];

sortFromScore(studentList);
console.log(studentList);
console.log(makeFullName(studentList));

// Student 객체에서 비교되는 두 요소를 score를 내림차순으로 정렬하는 함수
function sortFromScore (arr) {
  arr.sort((a,b) => b.score - a.score);
}

// 이름 합성해 name속성으로 만들어 반환하는 함수
function makeFullName(arr) {
	return arr.map(user => ({
    name : user.lastName + user.firstName,
    score : user.score })
  );
}