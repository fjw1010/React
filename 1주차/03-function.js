/**
 * 기존 함수의 형태
 *  const add = function(a, b) {
        return a + b;
    };
    화살표 함수는 return이 한 가지 요소일 때 사용!
    const add = (a, b) => a + b;
    console.log(add(1, 4));

    화살표 함수를 사용해야 할 때,
    그 함수 안에서 console.log() << 를 하고 싶을 때는
    원래 함수 형태로 돌려야만 함!!
    
    XXX 이렇게 하면 안 됨 XXX
    1) const add = (a, b) => {a + b};
    2) 아래처럼 사용하게 되면 무한루프에 빠지게 됨!!!
    const add = (a, b) => {
        console.log(add(1, 3));
        return a + b;
    };

    아래처럼 사용하거나, 또는
    const add = (a, b) => {
        const result = a + b;
        console.log(result);
        return result;
    };

    add(1, 3);

    const add = (a, b) => {
        console.log(a + b); // 리턴하기 전에 원하는 값이 출력되는지 확인하는 것
    };

    add(3, 4); >> 리턴이 없더라도 매개변수 안에 더할 값을 입력해야만 출력이 됨!!! <<< 중요
 */
