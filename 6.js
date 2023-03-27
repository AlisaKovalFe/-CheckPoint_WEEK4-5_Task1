// Дана строка 'ahb acb aeb aeeb adcb axeb'.
// Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: 
// буква 'a', любой символ, буква 'b'.

const findStr = (str) => {
    let regexp = /a.b/g
    return str.match(regexp)
}

console.log(findStr('ahb acb aeb aeeb adcb axeb'));