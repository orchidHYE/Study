// 5가지 배열 변형 메서드
// 1. fileter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환
let arr1 = [
  { name: "orchidHYE", hobby: "tennis" },
  { name: "hyobin", hobby: "tennis" },
  { name: "gildong", hobby: "reading" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "tennis");

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

// 3. sort
// 배열의 사전순으로 정렬하는 메서드
let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b) {
    return -1; // b, a 배치
  } else if (a < b) {
    return 1; // a, b 배치
  } else {
    return 0; // a, b 자리 그대로 유지
  }
});

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "orchidHYE"];
const joined = arr6.join(" ");
console.log(joined);
