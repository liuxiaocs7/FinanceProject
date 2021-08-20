// 第二种导出模块的方法，分开导出
// export let star = '王力宏'

// export function sing(title) {
//     console.log(title)
// }

// 第二种导出模块的方法，一起导出
let star = '王力宏'

function sing(title) {
    console.log(title)
}

export { star, sing }