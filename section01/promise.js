const myPromise = new Promise((resolve, reject) => {
    //비동기 작업 처리
    setTimeout(() => {
        const text= prompt("hello를 입력해줘! 그러면 선물을 줄게!");
        if(text === 'hello') {
            resolve('success');
        } else {
            reject('error messageee');
        }
    }, 2000);
});

/**
 * 상태
 * - 대기 (pending): 비동기 작업을 처리하는 중
 * - 이행 (flfilled): 비동기 작업이 정상적으로 처리가 된 경우
 * - 거부 (rejected): 비동기 작업이 정상적으로 처리되지 않은 경우
 */

myPromise
    .then((result) => {
        console.log('result:', result)
        return `선물은 : ${result}`
    })
    .then((result) => {
        console.log('result:', result)
    })
    .catch((err) => {
        console.log('err:', err)
    })
    .finally(() => {
        console.log('finally~!');
    })