class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.basket = { size: this.size, stuffing: this.stuffing };
        this.allPrice;
        this.allCallories;
        this.allList;
    }
    static SIZE_SMALL = { price: 50, callories: 20, name: "Маленький гамбургер" };
    static SIZE_BIG = { price: 100, callories: 40, name: "Великий гамбургер" };
    static STUFFING_CHEESE = { price: 10, callories: 20, name: "Начинка з сиром" };
    static STUFFING_SALAD = { price: 20, callories: 5, name: "Начинка з салатом" };
    static STUFFING_POTATOES = { price: 15, callories: 10, name: "Начинка з картоплею" };
    static TOPPING_MAYO = { price: 20, callories: 5, name: "+ Добавити  майонезу" };
    static TOPPING_SAUCE = { price: 15, callories: 0, name: "+ Добавити приправу" };
    set basket(el) {
        if (this.stuffing === undefined) {
            return console.log("Не вибрано гамбургер або начинка");
        }
        this.allPrice = el.size.price + el.stuffing.price;
        this.allCallories = el.size.callories + el.stuffing.callories;
        this.allList = `Ви вибрали ${el.size.name} - ${el.stuffing.name}`;
        console.log(`Ви вибрали ${el.size.name} - ${el.stuffing.name}`);
        return this.allList;
    }
    addTopping(el) {
        this.allPrice += el.price;
        this.allCallories += el.callories;
        this.allList += ` ${el.name}`;
        console.log(`${this.allList}`);
        return this.allList;
    }
    calculatePrice() {
        console.log(`Ціна - ${this.allPrice}`);
    }
    calculate() {
        console.log(`Калорій - ${this.allCallories}`);
    }
}
let newHamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
newHamburger.calculatePrice();
newHamburger.calculate();
newHamburger.addTopping(Hamburger.TOPPING_MAYO);
newHamburger.calculatePrice();
newHamburger.calculate();
newHamburger.addTopping(Hamburger.TOPPING_SAUCE);
newHamburger.calculatePrice();
newHamburger.calculate();
