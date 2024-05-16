/**
 * Destructuring 배열을 사용할 때,
 * 구조분해 할당
 */
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
// 위에 같이 지정을 하게 된다면, 배열의 첫번 째 요소인
// firstColor === red
// secondColor === green
// 결과 값은 red, green이 나옴 !
// 3번째 요소를 갖고 오고 싶다면 , , < 콤마로 사용할 수 있음!!!
