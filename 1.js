// Реализуйте функцию, принимающую слово и возвращающую количество 
// заглавных букв в нем

const getCapLetter = (string) => {
    let quantity = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperСase()) {
            quantity++
        }
    }
    return quantity

    //мое первое длинное решение, на память оставлю
    // let upper = string.toUpperCase()
    // let quantity = 0

    // for (let i = 0; i < string.length; i++) {
    //     if (string[i] > upper[i]) {
    //         quantity++
    //     } else {
    //         quantity
    //     }
    // }

    // return string.length - quantity

}

console.log(getCapLetter("проКрАСТИНация"));