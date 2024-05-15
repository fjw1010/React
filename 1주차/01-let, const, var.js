/**
 * 1) 변수, 상수
 *  var를 사용하지 않는 이유 : 논리적인 흐름에서 계속 벗어나기 때문에 그렇다!
 * let a = "let 변수 a";
 * if (true) {
 *  let b = "let 변수 b";
 *  console.log(b);
 * }
 * console.log(a);
 * console.log(b);
 * a의 변수는 a의 변수만 사용 가능하지만,
 * if문 안에 있는 변수 b는 if안에서만 사용 가능한 변수
 * 하지만 var를 사용하게 된다면
 * if(trur) {
 *  var b = "var 변수 b"
 * }
 * console.log(b);
 * >> if문의 범위 안에 있는 것이 아닌 함수 스코프를 갖기 때문에 {} < 안에 있든, 없든
 * 선언이 되기 때문에 오류 발생의 이유가 될 수 있어서 가능하면 let과 const를 사용하는 것이 제일 좋음!
 * 가능하면 const를 사용하는 것이 제일 좋다.
 * 그 이유는 변경이 되지 않기에, 오류 발생의 원인이 되지 않아서임!
 * 그렇기 때문에 안정성도 높아지고, 버그도 예방할 수 있음.
 * const를 먼저 선언하고, 변경이 될 값에만 let을 쓰는 것이 제일 바람직
 *
 * let과 const는 블록스코프 : 선언된 블록 내에서만 사용 가능!!!
 *
 * 2) let : 블록 스코프
 *  변수의 값을 필요에 따라 유연하게 사용할 수 있음
    * 아래는 var를 선언 했을 때 예시
    * function test() {
        var test = "오오";
        if (true) {
            var test = "바뀔까?"
        };
        console.log(test); 안 바뀌어야 하는데 var를 사용하게 되면... 바뀜!!! 조심하자
    }

    test()
    
    var 사용 시 호이스팅 문제 발생
            console.log(testValue);
            var testValue = "hello, world!";
        *
        var를 사용하게 된다면 var가 호이스팅 때문에 위로 올라가서 출력이 됨
        위에서부터 아래로 코드가 읽히면서 출력이 되는 것이 보편적인데
        var를 사용하면 그게 아니게 되어서.. 가능하면 const > let 우선적으로 사용하는 것이
        오류도 나지 않고, 유지보수적으로도 좋음!!!
    *
    * let과 const도 호이스팅이 되지만, var처럼 문제가 일어나지 않음
    ex)
        console.log(test);
        const test = "hello";
    위에와 같이 변수가 선언 되기도 전에 초기 값을 주지 않은 상태에서 먼저 써 버리면... 오류남!!! 큰일!!!

    XXX 변수는 이렇게 사용하자!! 가독성도, 보수유지도, 오류도 날 일이 XXX
        const test1 = "hi";
        console.log(test1);
 */
