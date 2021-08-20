// 1. 数组的解构
const F4 = ['小沈阳', '宋小宝', '刘能', '赵四']
console.log(F4)

// let shenyang = F4[0]
// let xiaobao = F4[1]

// console.log(shenyang)
// console.log(xiaobao)

let [shenyang, xiaobao, liuneng, zhaosi] = F4

console.log(shenyang)
console.log(xiaobao)
console.log(liuneng)
console.log(zhaosi)


// 2. 对象结构
const zbs = {
    username: '赵本山',
    age: '不详',
    yanxiaopin: function() {
        console.log("演小品")
    }
}

// let username = zbs.username
// let age = zbs.age
// let yanxiaopin1 = zbs.yanxiaopin

// 解构赋值  必须同名
let {username, age, yanxiaopin} = zbs

console.log(username)
console.log(age)
yanxiaopin()