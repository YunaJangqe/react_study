// 1. 함수 선언문
function funcA() {
    console.log("funcA");
}

let varA = funcA;
varA();

// 함수 표현식
let varB = function() { //익명함수
    console.log("funcB");
};

varB(); //호이스팅 안됨

// 2 화살표 함수
let varC = () => {
    return 1;
};

let varD = (value) => 1;

console.log(varC());