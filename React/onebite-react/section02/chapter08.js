// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. incloudes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isIncloude = arr2.includes(10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);

// 값이 여러개라면 최소 인덱스 값을 출력시킴
// 존재하지 않는 값일 경우 -1 출력

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

// 4-1. indexOf와 findIndex 차이
// indexOf는 특정 값을 배열에서 찾을 때, 얕은복사로만 찾기 때문에 객체값은 찾지 못한다.
// 반면 findIndex는 콜백함수를 이용해, 특정 프로퍼티 값을 비교할 수 있기 때문에 객체값도 찾을 수 있다.
let ObjectArr = [{ name: "orchidHYE" }, { name: "shin" }];

// console.log(ObjectArr.indexOf({ name: "shin" }));

// console.log(ObjectArr.findIndex((item) => item.name === "orchidHYE"));

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [{ name: "orchidHYE" }, { name: "shin" }];

const finded = arr5.find((item) => item.name === "orchidHYE");

console.log(finded);
