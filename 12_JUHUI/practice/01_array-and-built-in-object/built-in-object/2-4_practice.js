const list = ['기러기', '토마토', '스위스', '인도인', '별똥별', '우별림'];

list.forEach(item => console.log(palindrom(item)));

// 앞으로 읽어도 거꾸로 읽어도 똑같은 문자인지 판별하는 palindrom 함수를 만든다.
function palindrom(str) {
  return str === str.split('').reverse().join('');
}