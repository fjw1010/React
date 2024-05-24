import React from 'react';
function App() {
  
	// <---- 자바스크립트 영역 ---->
  const handlerClick = () => {
    alert('클릭!')
  }

  return (
  /* <---- HTML/JSX 영역  ---->*/
    <div
      style={{
        height: '100vh',
        display: ' flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>이것은 내가 만든 App컴포넌트 입니다.</p>
      <button onClick={handlerClick}>클릭!</button>
    </div>
  );
}

export default App;