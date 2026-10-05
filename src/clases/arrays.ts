
const arreglo: number[] = [1, 2, 3, 4]
console.log({arreglo})
arreglo.push(5);

const arreglo2: (number|string)[] = [...arreglo]
arreglo2.push("10")
console.log({arreglo2})