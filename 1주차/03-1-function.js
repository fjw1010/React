/**
 * 조건연산자 === 삼항연산자
 * if else를 대체하는 형태를 갖게 됨!!
 *  const score = 85;
    let grade = "";

    if (score >= 80) {
        grade = "A";
    } else {
        grade = "B";
    };

    이렇게도 사용할 수 있지만,
    조건연산자와 삼항연사자는 아래처럼 쓰일 수 있음!!
    const score = 85;
    const grade = score >= 80 ? "A" : "B";

    console.log(grade);

    왜 삼항연산자 라고 하는 거냐면
    1) score >=80,
    2) "A" :
    3) "B";
    이렇게 3개여서 삼항연산자인 것
 */
