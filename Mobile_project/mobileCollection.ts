import { Mobile } from "./mobile.js";
export class MobileCollection {
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]) {

        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation()
    }

    // --------------------Getters y Setters------------------------------

    public setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        return mobiles;
    }

    public getMobiles() {
        return this.mobiles
    }

    public setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
        return totalPrice;
    }
    public getTotalPrice() {
        return this.totalPrice
    }

    //------------------Metodos-------------------------
    private totalPriceCalculation(): number {
        let totalPriceSum: number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            totalPriceSum += this.mobiles[i].getPrice();
        }
        return totalPriceSum;

    }

    public printCollection(): void {
        for (let i = 0; i < this.mobiles.length; i++) {
            console.log("The characteristics of the mobile " + this.mobiles[i].getName() + " are:" + "\n" +
                "Name: " + this.mobiles[i].getName() + "\n" +
                "Trademark: " + this.mobiles[i].getTradeMark() + "\n" +
                "Model: " + this.mobiles[i].getModel() + "\n" +
                "Color: " + this.mobiles[i].getColor() + "\n" +
                "Price: " + this.mobiles[i].getPrice() + "\n"
            );

        }
        console.log("....");
        console.log("Suma de Precios: " + this.totalPrice);

    }
}