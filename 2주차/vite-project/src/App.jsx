import React from "react";

function App() {
  return (
    <div>
      <h1>부모-자식 관계 테스트</h1>
      <GrandFather />
    </div>
  )
}
function GrandFather() {
  return(
    <div>
      <p>나는 할아버지 입니다.</p>
      <Monter />
    </div>
  )
}

function Monter() {
  return (
    <div>
      <p>나는 엄마입니다.</p>
      <Child />
    </div>
  )
}

function Child() {
  return (
    <div>
      <p>나는 자식입니다.</p>
    </div>
  )
}

export default App;