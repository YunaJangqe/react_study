// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수

//     setTimeout(() => {
//         console.log("안녕");
//         reject("실패");
//     }, 2000);
// });

// setTimeout(() => {
//     console.log(promise);
// }, 3000);

//////////

// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수

//     setTimeout(() => {
//         const num = null;
//         if(typeof num === "number") {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다");
//         }
//     }, 2000);
// });

// // then 메서드
// // -> 그 후에
// promise.then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });

//////////

function add(num) {
    const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수

        setTimeout(() => {
            if(typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

add(0)
    .then((result) => {
        console.log(result);
        return add(result);
    })
    .then((result) => {
        console.log(result);
        return add(undefined);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error => {
        console.log(error);
    }));