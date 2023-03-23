import { sectionOne, sectionTwo } from "./script.js";
import { sectionThree } from "./sectionForm.js";
let btnOrder = document.querySelector(".order");

btnOrder.addEventListener("click", forOrder);

function forOrder(e) {
    e.stopPropagation();
    sectionOne.innerHTML = ``;
    sectionTwo.innerHTML = ``;
    sectionThree.innerHTML = ``;

    if (localStorage.length === 0) {
        sectionOne.innerHTML = `Корзина пуста!!!`;
        return;
    }
    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i).toString();
        sectionOne.innerHTML += `<button class="btn local-btn" data-name ="${name}">${name}</button>`;
    }

    sectionOne.addEventListener("click", goToLocalData);

    function goToLocalData(e) {
        sectionTwo.innerHTML = "";
        let btn = e.target;
        if (!btn.classList.contains("local-btn")) {
            return;
        }
        e.stopPropagation();
        sectionTwo.innerHTML = "";
        let localToObj = localStorage.getItem(e.target.dataset.name);
        let obj = JSON.parse(localToObj);

        obj.forEach((el) => {
            sectionTwo.innerHTML += `<div class = "local-box"><h2>${el.name}</h2>
                                    <p> Сума -${el.sum} грн</p>
                                    <p> Кількість - ${el.quantity} шт</p></div>`;
        });
    }
}
