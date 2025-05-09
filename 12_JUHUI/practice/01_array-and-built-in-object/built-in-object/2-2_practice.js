console.log(getSecondsToday());
console.log(getSecondsToTomorrow());

//오늘 흐른 시간을 초 단위로 알려주는 getSecondsToday 함수
function getSecondsToday() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = now - startOfDay;
  return `${Math.round(diff / 1000)}초나 흘렀습니다. 시간을 소중히 씁시다^^}`;
}

//오늘 남은 시간을 초단위로 알려주는 getSecondsToTomorrow 함수
function getSecondsToTomorrow() {
  const now = new Date();
  const startOfTomorrow = new Date(
    now.getFullYear(),
    now.getMonth,
    now.getDate() + 1
  );
  const diff = startOfTomorrow - now;
  return `${Math.round(
    diff / 1000
  )}초 밖에 안남았습니다. 다시는 오지 않는 오늘입니다.`;
}
