/**
 * 2) 객체
 *
 * 객체 : key - value
    *  JSON(JaverScript Object Notation)
    *  자바스크립트는 객체기반
    * 
    *   const uesr = {
            name: "bob",
            age: 30,
            isAdmin: true,
            printHello: () => console.log("하이"),
        }; << 현재 객체에는 4개의 속성이 있다!

        // 1번째 객체 접근 : . 표기법
        console.log(uesr.name); // 유저의 네임에 접근 bob
        console.log(uesr.age); // 유저의 나이에 접근 30
        uesr.printHello(); // 함수 접근 hello 도 출력

        // 2번째 객체 접근 : 괄호 표기법 [] <<
        const attribute = "name"; // name이라는 걸 가진 변수
        console.log(uesr[attribute]) // === console.log(uesr["name"]) << 이렇게도 변수 접근 가능

        // 객체에 있는 속성을 추가하고, 수정하는 방법
            uesr.email = "fjw_1010@naver.com"; // 추가함
            uesr.age = 31; // 수정
            delete uesr.isAdmin; // 속성에 있는 걸 삭제
        *
        
        위에 있는 uesr 객체는 불변성이 깨진 상태,
        객체 자체가 변경된 것은 아니라는 걸 기억하기
        불변성을 유지하는 것은 정말 중요함!
    *
* 배열 : []에 담긴 것
        const num = [1, 2, 3];
        console.log(num);

        배열도 요소에 접근하고 수정할 수 있음
        console.log(num[1]) // 접근
        num[1] = 10; // 수정
        console.log(num[1]); // 10으로 변경
    *
* 주요 메서드 : 자바스크립트 내부적으로 갖고 있는 객체나 배열에 핸들링 할 수 있는 함수(api로도 할 수 있음)
        객체의 키와 밸류 단위로 나누는 방법

            const uesr = {
                name: "르탄이",
                age: 30,
                isAdmin: true,
            }

            1) Objct.keys()
                const keys = Object.keys(uesr);
                console.log(keys);
                배열로 키가 출력 됨
                >> name, age, isAdmin
            *
            2) Objct.values()
                const values = Object.values(uesr);
                console.log(values);
                배열로 밸류가 출력이 됨
                >> 르탄이, 30, true
            *
            3) Objct.entries()
                const entriese = Object.entries(uesr);
                console.log(entriese);
                >> [['name', '르탄이'], ['age', 30], ['isAdmin', true]] 3개의 요소를 객체가 아닌, 배열 형태로
            *
            4) Objct.assign()
                const uesrDate = {
                    occupation: "개발자",
                };
                Objct.assign(uesr, uesrDate);
                console.log(user);
                원본 객체에 추가적인 객체의 속성을 복사하는 것!!!
                >> {name: '르탄이', age:30, isAdmin: true, occupation: '개발자'};

                현재 추가한 객체는 추가 객체인 것이고,
                기존에 있던 uesr는 대상 객체 라고 함
                대상 객체에 추가 객체로 속성을 복사함!

                결론은 Objct.assign()를 사용하면, 기존 객체에 합칠 수 있다 라고만 알면 됨
            *
        *
    

 */
