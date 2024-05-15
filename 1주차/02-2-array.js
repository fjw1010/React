/**
 * 배열 : push(추가), pop(빼기), map()
 *  push(배열 속성에 추가하는 방법)
 */
const fruits = ["Apple", "Banana"];
console.log(fruits); // 사과, 바나나만 출력됨!

fruits.push("Orange"); // push로 배열에 오렌지를 추가
console.log(fruits); // 추가된 오렌지까지 출력됨!
["사과", "바나나", "오렌지"];
/**
 *  pop(배열의 담긴 속성을 빼는 방법, 마지막 요소가 제거됨!)
 *      const fruits = ["사과", "바나나", "오렌지"];
 *      튀어나올 값을 담을 변수 생성
 *      const lastFruti = fruits.pop();
 *
 *      console.log(lastFruti);
 *      >> 출력 값은 마지막 요소인 오렌지만 삭제 됨!
 */
const lastFruti = fruits.pop();
console.log(lastFruti);
/**
 *  map(원본 배열에서 가공을 거쳐 새로운 배열을 리턴(반환) 하는 것이 map!!)
 *      1) 배열 내의 모든 요소 각각에 대해
 *      2) 주어진 함수를 호출한 결과를 모아 (콜백함수)
 *      3) 새로운 배열을 반환함!
 *      4) map은 원본 배열의 개수(요소의 개수)만큼 하나하나 체크
 *      5) map은 여러 개의 데이터 타입도 반환 가능
 */
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (num) {
  return num * num; // 여기서 만약 리턴이 없다면 undefined 5개 출력
});
console.log(squares);

/**
 *  filter
    실용적인 예시
    만약에 배열에 담긴 객체의 제목 동영상 02를 접근하여,
    그 값만 나오게 하고 싶을 때 아래와 같이 코드를 사용하면 됨!
 */
const numbers1 = [1, 2, 3, 4, 5];
const event = numbers1.filter(function (num) {
  return num % 2 === 0;
});

console.log(event);
// 2의 나머지 값만 나오게 됨! [2, 4]
// num의 2인 것만 return 해 달라고 하였으니까

const 동영상리스트 = [
  {
    아이디: 1,
    제목: "동영상01",
    썸네일이미지: "image01.jpg",
  },
  {
    아이디: 2,
    제목: "동영상02",
    썸네일이미지: "image02.jpg",
  },
  {
    아이디: 3,
    제목: "동영상03",
    썸네일이미지: "image03.jpg",
  },
];
const 필터링된동영상리스트 = 동영상리스트.filter(function (영상) {
  return 영상.제목 === "동영상02";
});

/**
 * 근데... filter를 사용해 보니 마치 if문과 비슷함
    그럼 if문을 쓰지 않고, filter를 사용하는 이유는?
    *
        1) 가독성 향상
            filter()는 배열의 요소를 필터링하는 과정을 더 직관적으로 표현할 수 있음
            if문을 사용하면 조건 검사와 배열 조작이 섞여있어 가독성이 더 떨어질 수 있음
            filter()를 사용하면 조건 검사와 배열 조작이 분리되어 코드가 더 깔끔해짐
        2) 재사용성 향상
            filter() 함수는 재사용이 용이하다!
            특정 조건으로 배열을 필터링하는 로직을 함수로 만들어 두면 필요할 때마다 재사용할 수 있기 때문
            filter()를 사용하면 조건 검사와 배열 조작이 분리되어 코드가 더 깔끔해짐
        3) 병렬 처리 기능
            filter() 함수는 배열의 각 요소를 병렬로 처리할 수 있음
            이를 통해 성능 향상을 기대할 수 있음
            if문은 순차적으로 처리되므로 병렬 처리가 어려움
        4) 가독성과 유지보수성 향상
            filter() 함수는 배열 조작 로직을 캡슐화하여 코드의 가독성과 유지보수성을 높일 수 있음
            if문을 사용하면 조건 검사와 배열 조작이 섞여 있어 코드 이해가 어려울 수 있음
        
        >> 상황에 따라 적절히 사용하는 것이 중요!
        하지만, 배열 조작이 필요한 경우에는 filter() 함수를 사용하는 것이 코드 품질 향상에 도움이 될 수 있음!!!
    *
 */
