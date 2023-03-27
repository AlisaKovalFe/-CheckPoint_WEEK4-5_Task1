// Напиши функцию, которая в массиве чисел находит и 
// возвращает наименьшее число.

const getMin = (arr) => {
    arr.sort((a, b) => a - b)
    return arr[0]

    //через цикл
    // let min = arr[0]
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < min) {
    //         min = arr[i]
    //     }
    // }
    // return min
}

console.log(getMin([94, 2, 71, 10, 22, 71]));