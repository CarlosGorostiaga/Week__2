class Person {

    public name: string;
    public age: number;
    private addres: string;

    constructor(name: string, age: number, addres: string) {

        this.name = name;
        this.age = age;
        this.addres = addres

    }

    public setAddres(addres: string) {
        this.addres = addres
        return addres;
    }

    public getAddres(addres: string) {
     return this.addres
    }


    public printName(): string {
        return this.name;


    }

    public yearOfBirth(currentYear: number): number {
        return currentYear - this.age;
    }
}

let persona = new Person("Carlos", 25, "Calle Constitucion");
console.log(persona.printName());
console.log(persona.yearOfBirth(2022));
console.log(persona.setAddres("Calle Oriente"));



