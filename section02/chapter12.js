function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b; // 3
        callback(sum);
    }, 3000);
}

add(1, 2, (value) => {
    //console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉돈된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (coldownedFood) => {
        console.log(coldownedFood);

        freezeFood(coldownedFood, (freezedFood) => {
            console.log(freezedFood);
        });
    })
});