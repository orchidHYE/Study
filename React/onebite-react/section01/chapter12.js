// 1. 함수 표현식
function funcA() {
  //console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  // 익명 함수: funcA와 같이 선언문을 이용해서 함수를 만드는 것이 아닌, 값으로 함수를 만드는 것(함수 표현식). 함수 표현식으로 생성된 함수는 함수명 자체로 호출을 할 수 없기에 익명 함수로 불린다. 또한, 호이스팅이 적용되지 않는다.
  //console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
