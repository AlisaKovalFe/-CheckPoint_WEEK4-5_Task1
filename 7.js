// Определите, что переданная строка является емэйлом.
// Примеры емэйлов для тестирования mymail @mail.ru, my.mail@mail.ru,
// my - mail@mail.ru, my_mail @mail.ru, mail @mail.com, mail @mail.by, 
// mail @yandex.ru.

const checkEmail = (str) => {
    let regexp = /[\w-_.]+@([\w-]+\.)+\w+/g // по идее, если точка - любой символ, то вместо первой квадратной скобки, можено оставить только точку, надо уточнить
    // let regexp = /^[A-Z0-9._%+-\s]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i // это тоже работает
    return regexp.test(str)
}

console.log(checkEmail('mymail@mail.ru'));
console.log(checkEmail('my.mail@mail.ru'));
console.log(checkEmail('my-mail@mail.ru'));
console.log(checkEmail('my_mail@mail.ru'));
console.log(checkEmail('mail@mail.com'));
console.log(checkEmail('mail@mail.by'));
console.log(checkEmail('mail@yandex.ru'));

//моя доп проверка
console.log(checkEmail('his@site.com.uk'));
console.log(checkEmail('mail4@mail.ru'));
console.log(checkEmail('mail%%4@mail.ru'));
console.log(checkEmail('mail+5s@mail.ru'));
console.log(checkEmail('my mail@mail.ru'));
