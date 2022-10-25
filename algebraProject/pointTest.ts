import { Point } from "./point";

let myPoint = new Point(-4, 4);
let myPoint1 = new Point(45, 98);
let myPoint2 = new Point(-65, 72);
let myPoint3 = new Point(41, -37);
let myPoint4 = new Point(-2, 5);

console.log(myPoint.toString());
console.log(myPoint.distanceToOrigin());

console.log(myPoint3.calculateDistance(myPoint4));


console.log(myPoint.calcularQuadrant());
console.log(myPoint.calcularQuadrant());

console.log(myPoint.calculateNearest([myPoint1,myPoint2,myPoint3]));