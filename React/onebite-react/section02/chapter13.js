// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
/* 
Promise의 효능
    - 비동기 작업 실행
    - 비동기 작업 상태 관리
    - 비동기 작업 결과 저장
    - 비동기 작업 병렬 실행
    - 비동기 작업 재실행
    - 기타 등등...
*/
/*
상태
    대기 (Pending): 아직 작업이 완료되지 않은 상태
    성공 (Fulfilled): 비동기 작업이 성공적으로 마무리된 상태
    실패 (Rejected): 비동기 작업이 실패된 상태

    해결 (resolve): 대기 -> 성공
    거부 (reject): 대기 -> 실패
*/

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });

  return newP;
});
