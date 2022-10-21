import {Person} from "./person"

let persona = new Person("Carlos", 25, "Calle Constitucion");
console.log(persona.printName());
console.log(persona.yearOfBirth(2022));
console.log(persona.setAddres("Calle Oriente"));