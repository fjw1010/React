// Template Literals : ``(백틱) : 변수와 표현식을 문자열 안에 쉽게 삽입할 수 있게 해 주는 문법
const customer = {
  name: "르탄이",
};
const item = {
  name: "커피",
  price: 4000,
};
console.log(
  "감사합니다" +
    customer.name +
    "님!" +
    item.price +
    "을(를)" +
    item.name +
    "원에 구매 하셨습니다."
);
// 위에와 같이 쓸 수 있지만, ``을 이용해서 사용하게 된다면, 아주 편리하게 사용할 수 있음!!!
console.log(
  `감사합니다. ${customer.name}님 ${item.name}을(를) ${item.price}에 구매 하셨습니다.`
);

const orderDetailes =
  "고객 : " +
  customer.name +
  "\n" +
  "상품 !" +
  item.name +
  "\n" +
  "가격 : " +
  item.price;

// 변수 안에도 이렇게 사용할 수 있지만 너무 복잡하고, 불편하다.
// 아래와 같이 템플릿리터럴을 사용하게 되면,
// 줄 바꿈 없이 편하게 사용할 수 있음(알아서 줄바꿈 해 줌!!!)
const orderDetails2 = `
고객 : ${customer.name}
상품 : ${item.name}
가격 : ${item.price}`;
