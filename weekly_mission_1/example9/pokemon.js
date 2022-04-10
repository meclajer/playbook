// Crear clase Pokemon y exportar usando ESM
export default class Pokemon {

    // Crea un constructor que permita recibir un nombre
    constructor(name) {
        this.name = name
    }

    // Crea la función sayHello()
    sayHello() {
        console.log(this.name + " dice: ¡HOLA!")
    }

    // Crea la función sayMessage()
    sayMessage(msg) {
        console.log(this.name + " te dice: " + msg)
    }

}