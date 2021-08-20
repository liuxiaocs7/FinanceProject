// 声明变量
var a
a = 1
var a = true

// SyntaxError: Identifier 'a' has already been declared 
// let定义的变量不可以重复声明
// let a
// a = 1
// let a = true

console.log(a)

// var star = 5
var flag = true
if(flag) {
    // 作用域
    // var star = 5
    let star = 5
    console.log(star)
}
// 使用var在作用域外面还是可以访问
// 使用let声明的变量在作用域外面无法访问
// console.log(star)

// var和let都具备函数级别的作用域 (var是支持的-->闭包)
function test1() {
    var f1 = '函数test1的变量'
    console.log(f1)
}

test1();

// 3.var存在变量提升的特性，let不存在
console.log(username)
var username

console.log(username1)
// 使用var变量可以声明在后面
let username1
