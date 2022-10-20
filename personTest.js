let {Person} = require("./Person");

let persona = new Person("nombre", 80, 1.70, 1996)
console.log(persona.calculoIMC())
console.log(persona.edad());
console.log(persona.printAll());
console.log(persona.printHobbies());