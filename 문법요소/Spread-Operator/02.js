/**
 * rest operator는 spread operator와 비슷하다!
 * 하지만 언제 사용해야 하는가?
 * 1) 함수의 매개변수
 * 2) 객체분해 할당 시, 여러 값을 그룹핑!
 */
function sum(numbers) {
  // number 는 배열

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  // return numbers.reduce(function (acc, cur) {
  //   return acc + cur;
  // });
}
const result = sum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
/**
 * 배열의 값을 가져올 때는
 * 배열이 담긴 변수가 없는 상태에서 함수의 매개변수에 값을 리턴하여,
 * 출력 값을 배출해 내는 방법
 *
 * function add(배열) {
 *  return 배열.reduce(function (매개변수1, 매개변수2) {
 *      return 매개변수1 + 매개변수2;
 * })
 * };
 * 위의 함수를 변수에 담아서 함수를 불러온 다음, 거기에 배열의 값을 넣어보자
 * const addArray = add([1, 2, 3, 4, 5]);
 * console.log(addArray);
 * 의 값은 이미 리턴이 되었기 때문에 전부 합쳐진 값이 출력될 것!
 * 1 + 2 + 3 + 4 + 5 = 15
 *
 * 근데 여기서 배열을 사용하지 않고 ...을 붙히게 된다면, 배열에 있는 요소들 전부를 지정해 올 수 있음..?
 */
const person = {
  name: "John",
  age: 30,
  country: "USA",
  occupation: "Developer",
};
const { name, ...rest } = person;

/**
 * 객체의 값을 가져올 때는
 * key의 값을 가져온다! 라고 배웠지만,
 *  ex) const {name, age} = person;
 * 객체의 리셋 오퍼레이터는
 * name을 제외한 나머지 값을 가져오고 싶을 때 사용하는 것 같음
 */

console.log(a);

// ... 의 역할을 복사
const arr = [1, 2, 3];

const arr2 = [...arr, 4];
//const arr2 = [1,2,3, 4];
