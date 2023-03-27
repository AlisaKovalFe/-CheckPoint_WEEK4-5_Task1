// Написать функцию, которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// (3, 2) → 3 * 3 = 9, (3, 3) → 3 * 3 * 3 = 27

const getPow = (x, n) => {
    return Math.pow(x, n)

    //через цикл (странное решение)
    // let pow = 1
    // for (let i = 1; i <= n; i++) {
    //     pow = pow * x
    // }
    // return pow
}

console.log(getPow(3, 2));
console.log(getPow(3, 3));