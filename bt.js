let numArr = "10, 20, 30".split(', ')
let total = numArr.reduce((acc, num)=> {
    acc += parseInt(num)
    return acc
},0)

console.log(total / numArr.length)

