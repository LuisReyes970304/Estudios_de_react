//Crea una funcion llamada useState
/**
 * Debe retornar un arreglo con dos elementos:
 * - Un string(El valor inicial)
 * - Una Function anónima de flecha que: 
 * -- Recibe un string.
 * -- Imprime ese string en consola. 
 */


const [name, setName] = createState("Goku");
console.log(name); // Goku
setName("Vegeta"); // Imprime Vegeta

function createState(name: string, setName = (value: string) => console.log(value)){
    return [
        name,
        setName
    ]
}