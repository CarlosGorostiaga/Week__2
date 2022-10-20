let {Person} = require("./Person");
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



module.exports = {Contacts}