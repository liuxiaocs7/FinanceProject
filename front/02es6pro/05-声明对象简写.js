// 传统

let username = 'Tom'
let age = 2
let sing = function() {
    console.log('I love Jerry')
}

let person = {
    username,
    age,
    sing,
}

console.log(person.username)
console.log(person.age)
person.sing()