import React from "react"

const App = () => {
  const title = "제목입니다."
  return (
    <div>
      <h1>추출테스트</h1>
      <Todo title={title} />
    </div>
  )
}

export default App;

const Todo = ({ title = "미제출" }) => {
  return (
    <div>
      <h3>{title}</h3>
      투두입니다.
    </div>
  )
}