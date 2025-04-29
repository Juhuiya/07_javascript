// 단축 평가
// 표현식을 평가하는 도중 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것
// $$, || 연산자 표현식의 결과가 때로는 boolean값이 아닐 수 있다.

console.log('apple' || 'banana');
console.log('' || 'banana'); // ''이 부분이 false로 바뀌어서 계산됨.

console.log(`apple` && `banana`); // 맨 마지막의 논리에 맞는 banana가 출력됨.
console.log(false && `banana`);

console.log(`-----------------------`);

// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고
// 프로퍼티를 참조할 때 단축 평가를 활용할 수 있다.

var obj = null;

// var val = obj.value; 이렇게 하면 오류남.
// obj가 Falsy(null, undefined) 값이면 좌항만 실행해야 val2 -> null
// obj가 Truthy값이면 val2 -> obj.value
var val2 = obj && obj.value;


