/**
 * 문제1)
 *  다음 두 배열 `array1`과 `array2`가 주어졌을 때, 두 배열을 합친 새 배열 `combinedArray`를 스프레드 연산자를 사용하여 만들고, 결과를 출력하는 코드를 작성하세요.
    또한, `array1`을 스프레드 연산자를 사용하여 복제한 후 원본 배열 `array1`에 변화를 주어 복제된 배열이 영향을 받지 않는지 검증하는 코드도 작성하세요.
 */

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = ["배열 합친 것 => ", ...array1, ...array2];

console.log(combinedArray);

const cloneArray = [...array1];
array1.push(4);

console.log("원본 배열 복사 => ", cloneArray);
console.log("원본에 추가한 것 => ", array1);

/**
 * 문제2)
 *  다음 두 객체 `obj1`과 `obj2`가 주어졌을 때, 두 객체의 속성을 스프레드 연산자를 사용하여 병합한 새 객체 `mergedObj`를 생성하고 결과를 출력하세요.
    단, 같은 이름의 키가 존재할 경우 `obj2`의 값이 우선하여 반영되어야 합니다.
    또한, `mergedObj`에서 `name` 속성의 값을 **'원장님'**으로 변경 후, 원본 객체 `obj1`과 `obj2`가 변경되지 않는 것을 확인하세요.
 */

const obj1 = {
    name: "르순이",
    age: 26,
};
const obj2 = {
    name: "르탄이",
    email: "fjw_1010@naver.com",
};

const mergedObj = {...obj1, ...obj2}
console.log(mergedObj);

mergedObj.name = "원장님"

console.log(mergedObj);