/**
 * rest operator는 spread operator와 비슷하다!
 * 하지만 언제 사용해야 하는가?
 * 1) 함수의 매개변수
 * 2) 객체분해 할당 시, 여러 값을 그룹핑!
 */
function sum(...numbers) {
    return numbers.reduce(function(acc, cur) {
        return acc + cur;
    });
}

const result = sum(1, 2, 3, 4, 5);
console.log(result);

const person = {
    name: "John",
    age: 30,
    country: "USA",
    occupation: "Developer",
};
const {name, ...a} = person;
/**
 * 객체의 값을 가져올 때는
 * key의 값을 가져온다! 라고 배웠지만,
 *  ex) const {name, age} = person;
 * 객체의 리셋 오퍼레이터는
 * name을 제외한 나머지 값을 가져오고 싶을 때 사용하는 것 같음
 */

console.log(a)