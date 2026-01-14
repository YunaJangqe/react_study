// 객체
let o1 = { name: "홍길동" };
let o2 = o1; //얕은 복사 - 객체의 참조값을 복사함
let o3 = { ...o1 }; //깊은 복사 - 새로운 객체를 생성하면서 프로퍼티만 따로 복사 함

console.log(o1 === o2);
console.log(o1 === o3);

//JSON.stringify() 객체를 문자열로 변환하는 기능
console.log(JSON.stringify(o1) === JSON.stringify(o3));