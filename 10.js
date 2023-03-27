// Напишите функцию change_register(str), которая принимает 
// в качестве аргумента строку и и заменяет регистр каждого 
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», 
// то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
    let newString = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += str[i].toLowerCase()
        } else {
            newString += str[i].toUpperCase()
        }
    }
    return newString

    //методом
    // let newString = ''
    // let arr = str.split('')
    // arr.map((el) => el === el.toUpperCase() ? newString += el.toLowerCase() : newString += el.toUpperCase())
    // return newString
}

console.log(changeRegister('КаЖдЫй ОхОтНиК'));