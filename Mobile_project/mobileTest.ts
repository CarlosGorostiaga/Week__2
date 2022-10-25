import { Mobile } from "./mobile.js";

let phone1 = new Mobile("Iphone ", "Apple", "12 Pro", "Blue", 1250)
let phone2 = new Mobile("RENO", "OPPO", "4 Find Pro", "Green", 980);
let phone3 = new Mobile("Galaxy", "Samsumg", "S22", "Black", 1100)

let myMobiles = [phone1, phone2, phone3];
// let myMobiles = new Mobile("name","trademark","model","color",price)


// console.log(phone2.getPrice())
// console.log(phone1.getName());
// console.log(phone2.printAll());

for (let i of myMobiles){
    console.log(i.printAll());
    
}





