// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터철 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
    job: "FE Developer",
    extra: {},
    10: 20,
    "like car": true, //띄어쓰기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;

let age = person["age"];

let property = "hobby";
let hobby = person[property];

// 3.2 새로운 프로퍼티를 추가하는 방법
person["favoriteFood"] = "초콜릿";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티에 존재 유무를 확인하는 방법 (in 연산자)
let result = "name" in person;

console.log(result);