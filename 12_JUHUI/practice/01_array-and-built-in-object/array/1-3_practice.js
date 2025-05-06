let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

// 코드 작성
// 숫자 오름차순
numbers.sort((a,b) => a - b);
console.log(numbers);

// 숫자 내림차순
numbers.sort((a,b)=> b - a);
console.log(numbers);

// 문자 오름차순
strings.sort();
console.log(strings);

// 문자 내림차순 (조건 연산자 중첩사용)
strings.sort((a,b) => a < b ? 1 : a > b ? -1 : 0)
//strings.sort((a, b) => b.localeCompare(a)); // 다른 내림차순 방법법
console.log(strings);
