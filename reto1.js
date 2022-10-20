class Person {

    constructor(nombre, peso, altura, yearOfBirth) {
        this.name = nombre;
        this.yearOfBirth = yearOfBirth
        this.nacionalidad;
        this.colorPelo;
        this.colorOjos;
        this.weight = peso;
        this.height = altura;
        this.hobbies = ["Padel", "Cocina", "FanSeries"];
    }
    // Reto 2
    // Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
    // (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
    // clase.

    calculoIMC() {
        return this.weight / (this.height * this.height);

    }

    //     Reto 3

    // Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
    // como parámetro el año y calcule la edad de la persona.

    edad() {
        return 2022 - this.yearOfBirth
    }

    //     Reto 4
    // Añadir un método que se denomine printAll que muestre por consola cada uno de los
    // atributos de la clase Person seguido por “-” y el valor del atributo.

    printAll() {
        // console.log("- Nombre: " + this.name);
        // console.log("- Año de nacimiento: " + this.yearOfBirth);
        // console.log("- Nacionalidad: " + this.nacionalidad);
        // console.log("- Color de pelo: " + this.colorPelo);
        // console.log("- Color de ojos: " + this.colorOjos);
        // console.log("- Peso: " + this.weight);
        // console.log("- Altura: " + this.height);
        // console.log("- Hobbies: " + this.hobbies);


        for (let lista in this)
            console.log("-" + lista + ": " + this[lista]);
    }

    //     Reto 5

    // Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
    // denominado printHobbies, que muestre por consola las aficiones de la persona.

    printHobbies() {
        return this.hobbies;
    }

}

// // METODOS

// let persona = new Person("nombre", 80, 1.70, 1996)
// console.log(persona.calculoIMC())
// console.log(persona.edad());
// console.log(persona.printAll());
// console.log(persona.printHobbies());




let per1 = new Person("Juan", 70, 1.70, 1980);
let per2 = new Person("Pedro", 100, 1.80, 1990);
let per3 = new Person("Ana", 50, 1.60, 1998);
let per4 = new Person("Ander", 74, 1.68, 1996);

let listado = [per1, per2, per3, per4];

class Contacts {



    constructor() {

        this.listado = listado
    }

    printPersons() {
        return listado;

    }

}
let contacts = new Contacts();
console.log(contacts);
