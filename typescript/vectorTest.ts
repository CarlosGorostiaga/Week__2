import { Vector } from "./vector";

let newVector = new Vector(10,10);
let newVector2 = new Vector(10,10);

newVector.print();
console.log(newVector.add(newVector2));
newVector.print();
console.log(newVector.subs(newVector2));
newVector.print();
console.log(newVector.mult(newVector2));
newVector.print();
console.log(newVector.multNumber(7));