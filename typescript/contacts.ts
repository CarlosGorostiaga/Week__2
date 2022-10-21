import {Person} from "./person"

let persona = new Person("Javier", 25, "Calle Constitucion");
let persona1 = new Person("Leopoldo", 32, "Calle Poniente");
let persona2 = new Person("Lautaro", 27, "Calle Galapagar");
let people = [persona, persona1, persona2]
export class Contacts {

    public people: Person []

    constructor() {
        this.people = people;
    }

    public printCalendar(): void {
        for (let p in this){
            console.log(this[p]);
            
        }
    }
}

// let contacts = new Contacts
// console.log(contacts);
