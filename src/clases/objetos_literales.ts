//Las interfaces sirven para decidir como queremos que sea la estructura de principalmente los arreglos, en este sentido, yo puedo evitar errores de tipado por ejemplo cuando estemos haciendo tablas y necesitos un DTO (el contrato)

interface UserDto {
    name: string;
    password: string;
}

export const user: UserDto = {
    name: "Juan",
    password: "contraseña_super_segura"
}

//Anotación importante, al modificar un arreglo, este se modifica en todas partes sin importar si se declara la modificación antes o despues.

console.log({user}) 