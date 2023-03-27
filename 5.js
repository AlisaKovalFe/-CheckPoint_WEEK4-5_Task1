// Преобразуйте первую букву каждого слова строки в верхний регистр.

const transformLetter = (string) => {
    let newString = ''
    let arr = string.split(' ')

    for (let i = 0; i < arr.length; i++) {
        newString += arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1) + ' '

        //или так, это для себя оставила
        // newString += arr[i][0].toUpperCase() + arr[i].slice(1) + ' '
    }
    return newString

    //метод
    // let newArr = arr.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1) + ' ')
    // return newArr.join('')
}

console.log(transformLetter("привет! я хороший человек"));

