// 비교 연산자
// 동등 비교 (==, !=) : 암묵적 타입변환을 통해 타입 일치 시킨 후 같은 값인지 비교
// 일치 비교 (===, !==) : 타입과 값이 모두 일치하는지 비교

// Falsy :> undefined, null, '', NaN, 0

// 숫자 1, 문자 '1', 논리값 true 비교
console.log(`1 == '1' : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);

console.log(`----------------------------`);

console.log(`1 === '1' : ${1 === '1'}`); // 타입도 같은 상태에서 값 비교를 한다면 === 비교를 해야함.
console.log(`1 === true : ${1 === true}`);

console.log(`----------------------------`);

// 숫자 0, 문자 '0', 논리값 false, 빈 문자열 '' 비교
console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == false : ${0 == false}`);
console.log(`0 == '' : ${0 == ''}`);

console.log(`----------------------------`);

console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === false : ${0 === false}`);
console.log(`0 === '' : ${0 === ''}`);

console.log(`----------------------------`);
// null과 undefined 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`); // 타입도 같은지 확인

console.log(`----------------------------`);

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

console.log(`----------------------------`);

// 비교연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다.
console.log(`'hello' === 'hello' : ${'hello' === 'hello'} `);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'} `);

console.log(`----------------------------`);

// 크기 비교 연산자
console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`); // a는 97, b는 98이라 true라 뜸.
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);

