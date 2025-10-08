/* project kalkulator sederhana
note : - gunakan konsep Arrow Function
       - Buat 2 Variabel dengan fitur ES6 (let a = 20)
       - gunakan Operator = +, -, *, /, **, %
*/

let a = 6
let b = 3

const penjumlahan = (a,b) => {
    console.log(`= ${a+b}`)
}
penjumlahan(a,b)

const pengurangan = (a,b) => {
    console.log(`= ${a-b}`)
}
pengurangan(a,b)

const perkalian = (a,b) => {
    console.log(`= ${a*b}`)
}
perkalian(a,b)

const pembagian = (a,b) => {
    console.log(`= ${a/b}`)
}
pembagian(a,b)

const perpangkatan = (a,b) => {
    console.log(`= ${a**b}`)
}
perpangkatan(a,b)

const modulus = (a,b) => {
    console.log(`= ${a%b}`)
}
modulus(a,b)
