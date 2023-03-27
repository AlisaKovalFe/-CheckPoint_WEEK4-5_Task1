// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

const replace = (string) => {
    return string.replace(/@/g, '!')
}

console.log(replace('aaa@bbb@ccc'));