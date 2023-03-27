// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'


const cut = (string, substr) => {

    // по условию непонятно, что нужно вернуть сам вырезанный элемент / массив без вырезанного элемента, поэтому в решении будет несколько вариантов

    // 1. цикл
    let arr = string.split(' ')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === substr) {

            // вернула массив без вырезанного элемента
            arr.splice(i, 1)
            return arr

            // вернула выврезанный элемент, если все-таки это нужно
            // return substr
        }
    }


    //2. методы
    // возврат массив без вырезанного элемента
    // let arr = string.split(' ')
    // return arr.filter((el) => el !== substr)

    // возврат вырезанного элемента
    // let arr = string.split(' ')
    // return arr.find((el) => el == substr)

    // 3. если втупую нужно вернуть вырезанный кусок (неуниверсальный вариант)
    // return string.slice(4, 7) 
}

console.log(cut('aaa bbb ccc', 'bbb'));