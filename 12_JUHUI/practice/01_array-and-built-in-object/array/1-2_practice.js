function filterRange(arr, a, b) {
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] < a || arr[i] > b) {
      arr.splice(i,1);
    }
  }
}
// 배열읭 요소 중 a와 b 사이에 속하지 않는 요소를 제거하는 함수를 만들기 위해선
// a보다 크고 b보다 작은게 아닌
// a보다 작거나 b보다 커야 제거된다는 점 유의.
// 뒤에서부터 순회하는 방식(i를 배열길이-1부터 0까지 감소)은 요소 제거 시 인덱스 변화 문제를 방지함.

const arr = [5, 3, 8, 1, 10, 4];

filterRange(arr, 1, 5);

console.log(arr);
