/**
 * promise
    * 비동기 작업이 수행될 때 그 결과 값을 나중에 받기 위한 '약속'
    * promise 객체를 사용하면 결과에 따라 콜백 함수를 연결할 수 있음
    * .then(), .catch(), finally()
    * then 성공한 경우?
    * catch 실패한 경우?
    * 
    * Pending (대기중) : 초기 상태로, 아직 성공 또는 실패가 결정되지 않은 상태
    * 
    * Fulfilled (이행됨) : 연산이 성공적으로 완료되어 프로미스가 결과 값을 반환한 상태
    * Rejected(거부됨) : 연산이 실패하거나 오류가 발생한 상태
 */

//then()과 catch() 사용코드 예시
const myPromise = new Promise(function(resolve, reject) {
    if(true) {
        resolve("성공");
    } else {
        reject("실패")
    }
})

myPromise
    .then(function(value) {
        console.log(value)
    })
    .catch(function(value) {
        console.log(value)
    })


// async 함수는 항상 promise를 반환함 
async function fetchDate() {
    return 'Data loaded';
};
// 위의 코드와 아래의 코드는 같은 뜻
async function fetchDate() {
    return Promise.resolve('Date loaded');
}

fetchDate().then(console.log) // 'Date loaded'

// Await : 프로미스의 완료를 기다리는 동안 함수의 실행을 일시적으로 중단 (정상일 수도, 실패일 수도)
// 프로미스가 해결되면, 자동으로 함수의 실행을 재개할 수 있음 따라서 비동기 코드의 동기적 표현이 가능!
// await 키워드를 사용해서 뒤에 있는 로직을 기다리게 하는 과정이 중요
// 1번이 끝나야 2번 2번이 끝나야 3번이 출력
// 기다리게 하려면 await < 를 넣어야 함
async function fetchDate() {
    const date = await fetch('https://jsonplaceholder.typicode.com/todos/1'); // 비동기
    const json = await date.json(); // 비동기
    console.log(json)
}
fetchDate()