import { toBuy, addData, sectionThree } from "./sectionForm.js";
let data = {
    vegetables: [
        { name: "Буряк", country: "Україна", color: "червоний", count: 23, price: 3 },
        { name: "Морква", country: "Україна", color: "оранжевий", count: 40, price: 7 },
        { name: "Капуста", country: "Польща", color: "зелений", count: 52, price: 5 },
        { name: "Цибуля", country: "Литва", color: "білий", count: 35, price: 2 },
    ],
    fruits: [
        { name: "Лимон", country: "Греція", color: "жовтий", count: 27, price: 9 },
        { name: "Банан", country: "Єгипет", color: "жовтий", count: 45, price: 10 },
        { name: "Гранат", country: "Польща", color: "червоний", count: 59, price: 17 },
        { name: "Апельсин", country: "Турція", color: "оранжевий", count: 31, price: 12 },
    ],
    nuts: [
        { name: "Фісташка", country: "Греція", color: "зелений", count: 25, price: 6 },
        { name: "Фундук", country: "Єгипет", color: "білий", count: 46, price: 3 },
        { name: "Арахіс", country: "Польща", color: "коричневий", count: 54, price: 2 },
        { name: "Грецькій", country: "Турція", color: "оранжевий", count: 32, price: 5 },
    ],
};

let aside = document.querySelector(".aside");
let sectionOne = document.querySelector(".section-one");
let sectionTwo = document.querySelector(".section-two");
let keysValues = Object.values(data);
let btnNumber;

function addInfo(e) {
    e.stopPropagation();
    btnNumber = Number(e.target.dataset.btn);
    if (btnNumber === 3) {
        return;
    }
    if (isNaN(btnNumber)) {
        btnNumber = 0;
        return;
    }

    sectionTwo.innerHTML = "";

    if (e.srcElement.classList[2] === "textGold") {
        sectionOne.innerHTML = "";
        e.srcElement.classList.remove("textGold");
        return;
    }
    addStyleActive(btnNumber);
    addFirstSection(btnNumber);
}

function addFirstSection(num) {
    sectionThree.innerHTML = "";
    sectionOne.innerHTML = keysValues[num]
        .map((el, i) => {
            return `<button type="button" class="btn" data-btn="${i + aside.childElementCount}">${el.name}</button>`;
        })
        .join(" ");
}

function addSecondSection(e) {
    let btn = e.target;
    if (btn.classList.contains("local-btn")) {
        return;
    }
    sectionThree.innerHTML = "";
    e.stopPropagation();
    sectionTwo.innerHTML = keysValues[btnNumber]
        .map((el, i) => {
            if (el.name === e.target.innerText) {
                addData(el);
                return `<h2 class='secTwo__title'>${el.name}</h2> 
                <p class='secTwo__text'>Виробник: ${el.country}</p>
                <p class='secTwo__text'>Колір: ${el.color}</p>
                <p class='secTwo__text'>Кількість: ${el.count}</p>
                <p class='secTwo__text'>Ціна: ${el.price} грн - 1шт</p>
                <button class = 'ToBuyBtn'>Купити</button>`;
            }
        })
        .join(" ");
    addStyleActive(Number(e.target.dataset.btn));
}

// Style

function addStyleActive(num) {
    if (isNaN(num)) {
        return;
    }
    let btn = document.querySelector(`button[data-btn = '${num}']`);
    let allBtn = document.querySelectorAll(`.btn`);
    allBtn.forEach((el) => {
        btn !== el ? el.classList.remove("textGold") : el.classList.add("textGold");
    });
}
aside.addEventListener("click", addInfo);
sectionOne.addEventListener("click", addSecondSection);
sectionTwo.addEventListener("click", toBuy);

export { sectionOne, sectionTwo, aside };
