// Удалите одной регуляркой все повторяющиеся слова из строки, 
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.

const deleteDubl = (string) => {
    let regexp = /\b(\w+)(\s*\1)+\b/g
    console.log(string.match(regexp));
    return string.replace(regexp, "$1")

    //решение нерегуляркой
    // let arr = string.split(' ')
    // let result = {}
    // let newArr = []
    // for (el of arr) {
    //     !result[el] ? result[el] = 1 : result[el]++

    //     if (result[el] == 1) {
    //         newArr.push(el)
    //     }
    // }
    // return newArr.join(', ')
}

console.log(deleteDubl('dsf xxx xxx sd xxx '));