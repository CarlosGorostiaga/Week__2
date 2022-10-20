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

    calculoIMC() {
        return this.weight / (this.height * this.height);

    }

    edad() {
        return 2022 - this.yearOfBirth;
    }

    printAll() {

        for (let lista in this)
            console.log("-" + lista + ": " + this[lista]);
    }

    printHobbies() {
        return this.hobbies;
    }

}

module.exports = {Person}