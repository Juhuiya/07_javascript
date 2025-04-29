// 프로퍼티 값 단축 구문
var id = 'p-00001';
var price = 30000;

var product = {
    id : id,
    price : price 
};

console.log(product);


// ES6부터 프로퍼티 값으로 변수를 사용하는 경우 변수명과 프로퍼티 키가 동일할 때 생략할 수 있다.
var product2 = {id,price}; // product와 같은거임.
console.log(product2); // 이것을 프로퍼티 값 단축구문이라 함.
