// 빌트인 전역함수

//isFinite
/*
전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true를 반환하고, 무한수이면 false를 반환한다.
전달받은 인수가 숫자가 아닌 경우 타입 변환 후 검사를 수행하며, NaN으로 평가되는 값이면 false를 반환한다.
 */

console.log(isFinite(10));          // true            
console.log(isFinite('10'));        // true        
console.log(isFinite(null));        // true          
console.log(isFinite(Infinity));    // false    
console.log(isFinite(-Infinity));   // false     
console.log(isFinite(NaN));         // false     
console.log(isFinite('abc'));       // false 

console.log("-----------------------------");

// isNaN
// 
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN('abc'));
console.log(isNaN('10'));
console.log(isNaN(''));
console.log(isNaN(true));
console.log(isNaN(false));
console.log(isNaN(undefined));
console.log(isNaN({}));

console.log("-----------------------------");


// parseFloat
// 전달받은 문자열 인수를 부동 소수점 숫자, 실수로 해석하여 반환한다.
console.log(parseFloat('10.01'));       
console.log(parseFloat('10'));          
console.log(parseFloat('10 20 30'));
console.log(parseFloat('10cm'));
console.log(parseFloat('GS25'));
console.log(parseFloat('  1004  '));
console.log("-----------------------------");
console.log(parseInt('10')); // 10
console.log(parseInt('10.01')); // 10

console.log(parseInt('GS25'));
console.log(parseInt('10cm'));

//encodeURI
//URI(인터넷에 있는 자원을 나타내는 유일한 주소)를 문자열로 전달받아 이스케이프 처리를 위해
//네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환한다.
const uri = 'http://greedy.com?name=홍길동&job=student';
const enc = encodeURI(uri);
console.log(enc);

const dec = decodeURI(enc); 
console.log(dec);
// 이렇게 둘이 쌍으로 사용됨

// encodeURIComponet
const uriComp = 'name=홍길동&job=student'; 
const encComp = encodeURIComponent(uriComp); 
console.log(encComp);
const decComp = decodeURIComponent(encComp); 
console.log(decComp);
