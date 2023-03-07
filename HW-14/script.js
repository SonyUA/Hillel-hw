// Створіть об’єкт який представлятиме кошик для покупок в онлайнн магазині.

// Товари будуть зберігатися в массиві в форматі вказаному нижче.

// Об'єкт повинен мати метод для додавання товару:

// addItem - якщо такого товару немає то він додається до массиву items, якщо такий товар уже є то потрібно збільшити його властивість count на одиницю

// deleteItem - видаляє товар з массиву items

// getTotalSum - повертає загальну вартість всіх товарів.

// Перевірку товару робити по значенню властивості name

const shoppingCart = {
    items: [
        {
            name: "Headphone",
            count: 1,
            price: 100,
        },
    ],

    addItem(item, price) {
        if (typeof item === "string" && typeof price === "number") {
            let result = this.items.find((el) => (el.name === item ? (el.count += 1) : false));
            if (!result) {
                this.items.push({ name: item, count: 1, price: price });
            }
        } else {
            console.log(`некоректно введені дані`);
        }
    },

    deleteItem(item) {
        if (typeof item === "string" && this.items.length !== 0) {
            let result = this.items.find((el) => (el.name === item && el.count >= 2 ? (el.count -= 1) : false));
            if (!result) {
                this.items.forEach((el, i) => (el.name === item && el.count === 1 ? this.items.splice(i, 1) : false));
            }
        } else {
            console.log(`В корзині нічого видаляти`);
        }
    },

    getTotalSum() {
        let result = this.items.reduce((acc, curr) => {
            acc += curr.price * curr.count;
            return acc;
        }, 0);
        console.log(result);
        return result;
    },
};
shoppingCart.addItem("Headphone", 100);
shoppingCart.addItem("Headphone", 100);
shoppingCart.deleteItem("Headphone");
shoppingCart.addItem("Laptop", 300);
shoppingCart.addItem("Mouse", 200);
shoppingCart.addItem("Mouse", 200);
shoppingCart.addItem("Laptop", 200);
shoppingCart.deleteItem("Laptop");
console.log(shoppingCart.items);
console.log(shoppingCart.getTotalSum());
