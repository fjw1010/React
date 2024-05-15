/**
 * Destructuring
 * De : not
 * structuring : 구조
 * 변수 안에 있는 key - value의 값을 각각 찢어서 나타낼 수 있음!!
 */
const food = {
  name: "오믈렛",
  price: 7000,
};
// 아래처럼 객체를 찢어서 나타낼 수 있음
const { name, price } = food;

// 함수를 이용했을 때도 사용 가능
const person = {
  name: "르순이",
  age: 28,
};
function greet(person) {
  console.log(`
      안녕하세요. 제 이름은 ${person.name}입니다. 나이는 ${person.age}살 이예요.
      `);
}
// 위에처럼 person.name을 사용할 수도 있지만 직접 name과 age에 접근해서 사용도 가능함
function persons({ name, age }) {
  console.log(`안녕하세요 제 이름은 ${name}입니다. 나이는 ${age} 살이예요`);
}
persons(person);

/**
 * 함수 매개변수 즉 function persons({name, age})의 순서는 상관없음
 * 오타만 나지 않으면..!! 하지만 함수 안에서 쓰일 때의 순서만 신경쓰면 됨!
 * 그 순서만 지켜주면 원하는대로 출력될 것임 >> 키가 중요함!!! <<
 */
