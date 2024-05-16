const originalUser = {
    name: "르탄이",
    age: 28,
};

/**
 * spread operator
 * 객체나 배열을 복사할 때 정말 많이 사용
 * ...을 사용해서 복사할 객체를 새롭게 넣어주면,
 * 기존의 원본 객체의 값이 바뀌더라도 복사의 객체는 바뀌지 않음!
 * 코드 예시
 *  const updatedUse = {...originalUser};
 * 결과 값은 르순이로 변경 돼 있음!
 */

const updatedUse = {...originalUser};
updatedUse.name = "르순이";

console.log(originalUser);
console.log(updatedUse);

// 배열을 사용했을 때
const furst = [1, 2, 3];
const second = [4, 5, 6];

const combinedArray = [...furst, ...second];