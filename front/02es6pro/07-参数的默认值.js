function add(a, b = 0) {
    console.log('a是', a)
    console.log('b是', b)
    return 100 + a + b
}

// 后定义的把先定义的覆盖了
// function add() {
//     return 100
// }


let result = add(10)
console.log(result)
