// Реализуйте функцию generateRange(min, max, step),
// которая принимает три аргумента и генерирует диапазон 
// целых чисел от min до max с шагом step. 
// min — левая граница диапазона,
// max — правая граница диапазона
// step — шаг. 
// (мин < макс)

const generateRange = (min, max, step) => {
    let arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}

console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));
