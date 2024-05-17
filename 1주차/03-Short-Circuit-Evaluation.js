/**
 * 단축평가 :: 함축해서 표현하기 위해!!!
 * - 논리 연산자를 활용(||, &&, ?, ??)
 *  1) || : 또는 (논리 OR 연산자) : 둘 중 하나라도 참이면 결과는 참을 반환함
 *      truthy, falsy
 *      falsy : false, 0, "", null, undefined, NaN
 *  2) && : 그리고 (논리 AND 연산자) : 두 값이 모두 참이여야 결과도 참
    *   const a = true;
        const b = true;
        const c = false;

        const result = a || b; // 참
        console.log(result);

        const result2 = a || c; // 참
        console.log(result2);

        const result3 = a && b; // 참
        console.log(result3);

        const result4 = a && c; // 거짓
        console.log(result4);
 *  *
 *  3) ? (삼항 연산자) : 
 *  조건을 축약해서 표현할 때 사용, 조건이 참이면 ? 뒤의 첫 번째 값이 거짓이면, 뒤의 두번 째 값이 결과가 됨

    *   const a = 1 <= 0;
        const test = a ? "참" : "거짓";

        console.log(test);
 *  4) ?? (null 병합 연산자) : 왼쪽의 피연산자(값)가 null 또는 undefined인 경우 오른쪽 값을 반환
        const a = null;
        const b = undefined;
        const c = "오오";

        const test = b ?? a;

        console.log(test);
        일 경우 오른쪽의 값이 null이기 때문에
        null이 반환됨!!
        반대로 null ?? undefined 라고 한다면
        undefined 가 출력됨
        >> 즉, 왼쪽에 null 또는 undefined인 경우 무조건 오른쪽이 반환되는 것 <<
 */
// 논리합연산자 (||)
const getUserName = (user) => {
  return user.name || "신원미상";
  /**
   * 원래라면은
   * if (user.name === undefined) {
   *    return "신원미상"
   * } 이라고 써야하지만 || 연산자를 이용해서
   * 위의 코드처럼 함축하여 사용할 수 있음!!!
   */
};
const person = {
  age: 30,
};

console.log(getUserName(person));

// 정말 중요!!! 논리 곱 연산자(&&)
const loggedIn = true;
const userName = "르탄이";
loggedIn && console.log(`환영합니다 ${userName}님!`);

// 삼항연산자(?) : optional chaining
const user = {
  profile: {
    name: "르탄이",
    detaile: {
      age: 30,
      location: "서울시 강남구",
    },
  },
  printHello: () => console.log("안녕"),
};
/**
 * 만약 객체에 있는 나이로 접근하고 싶다면
 * 아래처럼 불러오면 되는데,
 * profile가 profile2로 변경 되었을 때 출력하면
 * 오류가 날 것
 * 이런 오류 대신 undefined 가 나오게 하고 싶다면?
 * profile? >> 라고 "?."를 붙혀주게 되면
 * 오류 대신 undefined가 나오게 됨 !!
 *
 * 옵셔널은 메서드에도 접근할 수 있음
 * 위에 있는 프린트헬로우 함수를 사용하고 싶을 때
 *
 * user.printHello() < 로 함수를 불러올 수 있지만
 *
 * 만약 user.printHello1() < 이러면 당연히 오류가 나옴
 *
 * 그럴 때 옵셔널 체인지(?.)를 사용하면,
 * 오류 대신에 undefined 라는 값이 담김!!
 * user.printHello1?.()
 * >> undefined
 * 하지만 이대로 쓴다면 아무 것도 출력이 안될 것이라
 * 출력을 하고 싶다면, 변수에 값을 담아야 출력이 됨
 * const a = user.printHello1?.();
 * console.log(a);
 */
console.log(user.profile.detaile.age);

const a = user.printHello1?.();
console.log(a);

let userLocation = null;
console.log(userLocation ?? "없는 위치");
