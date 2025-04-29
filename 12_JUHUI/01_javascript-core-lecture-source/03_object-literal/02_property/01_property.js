var obj = {
    normal: 'noraml value',
    '@ s p a c e @' : 'space value', // 특수문자 사용시
    0 : 1,                           // 숫자 키는 내부적으로 문자열로 변환
    var : 'var',                     // 예약어 키는 사용은 가능하지만 나중에 잘못된 오류를 나타낼 수 있기 때문에 권장하지 않음
    normal: 'new value',             // map객체와 같음, 이미 존재하는 키를 중복 선언하면 나중에 선언한 값으로 덮어씀
};

console.log(`obj >>> `, obj);

