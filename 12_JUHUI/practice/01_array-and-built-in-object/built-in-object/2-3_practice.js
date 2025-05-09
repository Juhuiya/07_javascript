let arr = ["1080px", "$100", "+200", "60kg", "6m", "-15"];
console.log(removeChar(arr));

// arr 배열에는 숫자 뒤에 단위 문자가 붙거나 숫자 앞에 특수 문자가 1개 붙는 형태의 문자열들이 담겨있다. 해당 값들의 앞 또는 뒤에 위치한 문자를 제거하고 숫자로 형변환한 값들이 담긴 새로운 배열을 반환하는 removeChar 함수를 작성한다.
function removeChar(arr) {
  //return arr.map((item) => parseInt(item) || +item.slice(1));
  return arr.map((item) => {
    const cleaned = item.replace(/[^0-9.-]+/g, "");
    return Number(cleaned);
  });
}
// 앞에 붙는 문자가 1개가 아닌 상황도 처리하려면
/*    return arr.map(item => {
        // 숫자, 마이너스(-), 소수점(.)만 남기고 모두 제거
        const cleaned = item.replace(/[^0-9.-]+/g, '');
        return Number(cleaned);
});*/
