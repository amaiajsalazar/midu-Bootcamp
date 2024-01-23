
// const t = [1, -1, 3]

// t.push(5)

// console.log(t.length) // se imprime 4
// console.log(t[1])     // se imprime -1

// t.forEach(value => {
//   console.log(value)  // se imprimen los números 1, -1, 3, 5 cada uno en su propia línea
// })                    

// value => {
//   console.log(value)
// }

// const t = [1, -1, 3]

// const t2 = t.concat(5) // crea un nuevo array

// console.log(t)  // se imprime [1, -1, 3]
// console.log(t2) // se imprime [1, -1, 3, 5]

// const t = [1, 2, 3] 

// const m1 = t.map(value => value * 2) 
// console.log(m1) // se imprime [2, 4, 6]

// const m2 = t.map(value => '<li>' + value + '</li>')
// console.log(m2)  
// // se imprime [ '<li>1</li>', '<li>2</li>', '<li>3</li>' 
// const t = [1, 2, 3, 4, 5]

// const [first, second, ...rest] = t

// console.log(first, second)  // se imprime 1, 2
// console.log(rest)          // se imprime [3, 4 ,5]

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
  }
  
  const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

//   console.log(object3.name.first)

// console.log(object1.name)         // se imprime Arto Hellas
// const fieldName = 'age' 
// console.log(object1[fieldName])    // se imprime 35


// object1.address = 'Helsinki'
// object1['secret number'] = 12341

// console.log(object1)

// const sum = (p1, p2) => { 
//     console.log (p1) 
//     console.log (p2) 
//     return p1 + p2 
//   } 

//   const result = sum(1, 5)
// console.log (result)

// const square = p => {
//     console.log(p)
//     return p * p
//   }
  
// //   const square = p => p * p //equivalent in one liner

// const t = [1, 2, 3]
// const tSquared = t.map(p => p * p)
// // tSquared ahora es [1, 4, 9]
// console.log(tSquared)

// function product(a, b) {
//     return a * b
//   }
  
//   const result = product(2, 6)
//   // result ahora es 12
//   console.log(result)


const average = function(a, b) {
    return (a + b) / 2
  }
//   const average = (a,b) => (a + b) / 2  //equivalent 1 liner
  
  const result = average(2, 5)
  // result ahora es 3.5
  console.log(result)