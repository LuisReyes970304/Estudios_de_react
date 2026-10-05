// Existen dos maneras de hacer funciones. 
//La manera normal, o bien usando funciones flechas. las segundas no pueden ser llamadas antes de declararse.

function greet(name: string): string {
    return `Hola ${name}`
};
const message = greet("Juan");
console.log({message})


//Estas se pueden hacer mas facil usando una función flecha.
//Cuando intentas cambiar una función flecha, se presenta un TypeError.
const greet2 = (name: string): string => {
    return `Hola ${name}`
}
console.log({greet2});

function getUser () {
    return {
        uid: "ABC-123",
        username: "El_papi23"
    }
}
const user2 = getUser();
console.log({user2})

//Al utilizar parentesis en una función flecha le estamos indicando que se trata de un retorno implicito.
const getUser2= () => ({
    uid: "EFC-456",
    username: "El_papazote24"
})
const user3 = getUser2()
console.log({user3})