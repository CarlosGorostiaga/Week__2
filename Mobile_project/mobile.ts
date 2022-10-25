export class Mobile {
    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number) {

        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;

    }

    //-----------------Getters y Setters -------------------

    public setName(name: string) {
        this.name = name;
        return name;
    }

    public getName() {
        return this.name;
    }

    public setTradeMark(trademark: string) {
        this.trademark = trademark;
        return trademark;
    }
    public getTradeMark() {
        return this.trademark;
    }
    public setModel(model: string) {
        this.model = model
        return model;
    }
    public getModel() {
        return this.model;
    }
    public setColor(color: string) {
        this.color = color;
        return color;
    }
    public getColor() {
        return this.color
    }
    public setPrice(price: number) {
        this.price = price
        return price;
    }
    public getPrice() {
        return this.price
    }


    public showName(name: string) {
        console.log(this.name)
    }

    public showPrice(price: number) {
        console.log(this.price);

    }
    public showEvery() {
        return this;
    }
    public printAll(): void {
        console.log(this);
        
        }
    
}