// сгенерировать num чисел до 100 и отсортировать их 
// в порядке возрастания

const generate = (num) => {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random() * 101)) // на созвоне было Math.floor(Math.random() * 100 + 1) (почему на созвоне +1 отдельно непонятно, то есть будто генерируется диапазон от 0 до 99 и потом плюс 1)
    }
    arr.sort((a, b) => a - b)
    return arr
}

console.log(generate(5));