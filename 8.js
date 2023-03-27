// Дана строка с буквами, пробелами и цифрами.
// Найдите сумму всех чисел из данной строки.

const getSum = (str) => {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
        if (Number(str[i])) {
            sum += Number(str[i])
        }
    }
    return sum

    //метод
    // let arr = [...str]
    // return arr.reduce((acc, cur) => {
    //     if (Number(cur)) {
    //         acc += Number(cur)      
    //     }
    //     return acc
    // }, 0)

    //метод2
    // return [...str].filter((el) => Number(el)).reduce((sum, cur) => sum + Number(cur), 0)
}

console.log(getSum('2f gh2 1 y3'));