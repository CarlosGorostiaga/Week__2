import { Mobile } from "./mobile";
import { MobileCollection } from "./mobileCollection";

let phone1 = new Mobile("Iphone ", "Apple", "12 Pro", "Blue", 1250);
let phone2 = new Mobile("RENO", "OPPO", "4 Find Pro", "Green", 980);
let phone3 = new Mobile("Galaxy", "Samsumg", "S22", "Black", 1100);
let phone4 = new Mobile("Nord", "One Plus", "2T 5G", "Grey", 299);

let myMobiles: Mobile[] = [phone1, phone2, phone3, phone4];

let myCollection = new MobileCollection(myMobiles);

myCollection.printCollection();
//console.log(myCollection.getMobiles());
//console.log(myCollection.getTotalPrice());

