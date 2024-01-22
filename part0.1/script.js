// console.log("Hola mundoo!")

// 3 formas de crear una variable
let firstName = 'Amaia'
const lastName = 4
// antigua
var isDeveloper = true

// console.log(firstName, lastName, isDeveloper)

// diferencia entre var y let
// var es global
// let es local

// js es multiparadigma, su tipado es debil y dinamico
// debil: no se especifica el tipo de dato
// dinamico: se puede cambiar el tipo de dato

// let tipadoEstatico: string = 'hola'  

// js si que tiene tipos de datos
// son tipos de datos primitivos: son imutables
// undefined
// null 
// BigInt
// Symbol

// tipos de datos compuestos: son mutables
// Object
// Array
// Function    

const prueba = 'Amaia'
const pruebawithuppercase = prueba.toUpperCase()
// console.log(pruebawithuppercase)


const list = []
list.push(157)
// console.log(list[0])


const anotherlist= list.concat(2)
// console.log(list)
// console.log(anotherlist)


const sumar = (a, b) => {
    console.log(a, '+', b)
    return a + b
}

const op1 = 2
const op2 = 3

console.log(sumar(op1, op2))


function restar(a, b) {
    console.log(a, '-', b)
    return a - b
}

console.log(restar(op1, op2))