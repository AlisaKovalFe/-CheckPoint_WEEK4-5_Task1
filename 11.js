//Написать функцию, которая находит сумму всех чисел от 1 до num. 
// num — положительное целое число больше 0
// (2) → 3 (1 + 2)
// (8) → 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const sum = (num) => {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(sum(2));
console.log(sum(8));