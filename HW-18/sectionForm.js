let sectionThree = document.querySelector(".section-three");
let getData;
let order;
let innerOrder = [];

// Генеруєм форму

function toBuy(e) {
    e.stopPropagation();
    sectionThree.innerHTML = ` <form class="form" novalidate name='myform' method="get">
                                        <h2 class = "ftitle">${getData.name}</h2>
                                    <label for='fname'>Прізвище Імя по Батькові</label>
                                     <input type="text" id ='fname' name="fname" required />
                                    <span class="errorText"></span>
                                    <label for = 'fcity'>Місто</label>
                                    <select id="fcity" name="fcity" required>
                                        <option ></option>
                                        <option value="Berestechko">Berestechko</option>
                                        <option value="Blahodatne">Blahodatne</option>
                                        <option value="Hołoby">Hołoby</option>
                                        <option value="Horokhiv">Horokhiv</option>
                                        <option value="Kamin-Kashyrskyi">Kamin-Kashyrskyi</option>
                                        <option value="Kivertsi">Kivertsi</option>
                                        <option value="Kovel">Kovel</option>
                                        <option value="Kovel’s’ka Mis’krada">Kovel’s’ka Mis’krada</option>
                                        <option value="Liuboml">Liuboml</option>
                                        <option value="Lokachi">Lokachi</option>
                                        <option value="Lukiv">Lukiv</option>
                                    </select>
                                    <span class="errorText"></span>
                                    <label for="fnumber">Номер відділення </label> 
                                    <input type="number" id="fnumber" name="fnumber" min="1" max="100" required />
                                    <span class="errorText"></span>
                                    <fieldset name = "ffieldset">
                                        <legend>Оплата</legend>
                                        <label><input type="radio" value="При отриманні"  name="fradio" checked  />При отриманні</label>
                                        <label><input type="radio" value="На карту"  name="fradio"  /> На карту</label>
                                    </fieldset>
                                    <span class="errorText"></span>
                                    <label class = "rangePoint" for="frange">Кількість</label>
                                    <input id ="frange" type="range" name="frange" value = "0" min="0" max="${getData.count}" required />
                                    <span class="errorText"></span>
                                    <label>Коментар</label><textarea name="ftext" rows="4" cols="25"> </textarea>
                                    <input type="submit" class="fsbmt" value="Підтвердити" name='fsbmt' />
                                 </form>`;
    // Підключаєм форму
    let form = document.myform;
    form.addEventListener("submit", caseClosed);
    function caseClosed(e) {
        e.preventDefault();
        let numberArr = form.fname.value.split(" ");
        let count = 0;
        // Перевірка на ПІБ
        if (form.fname.value !== "") {
            for (let i = 0; i < numberArr.length; i++) {
                for (let j = 0; j < numberArr[i].length; j++) {
                    if (numberArr[i][j] === numberArr[i][j].toUpperCase() && numberArr[i].indexOf(numberArr[i][j]) === 0) {
                        count += 1;
                    }
                }
            }
        }
        if (count === 3 && numberArr.length === 3) {
            form.fname.nextElementSibling.innerHTML = ``;
        } else {
            form.fname.nextElementSibling.innerHTML = `Введіть ПІБ - з великої букви`;
            return false;
        }
        // перевірка форма
        if (form.fcity.value === "") {
            form.fcity.nextElementSibling.innerHTML = `Виберіть місто`;
            return false;
        } else {
            form.fcity.nextElementSibling.innerHTML = ``;
        }
        if (form.fnumber.value === "") {
            form.fnumber.nextElementSibling.innerHTML = `Виберіть номер відділення`;
            return false;
        } else {
            form.fnumber.nextElementSibling.innerHTML = ``;
        }
        if (form.frange.value === "0") {
            form.frange.nextElementSibling.innerHTML = `Виберіть кількість`;
            return false;
        } else {
            form.frange.nextElementSibling.innerHTML = ``;
        }
        // Мої замовлення
        order = {
            time: new Date().toDateString(),
            name: getData.name,
            sum: getData.price * Number(form.frange.value),
            city: form.fcity.value,
            payment: form.fradio.value,
            department: form.fnumber.value,
            quantity: form.frange.value,
        };
        //LOcaleStorage
        if (order === undefined || localStorage.length > 0) {
            innerOrder = [];
            for (let i = 0; i < localStorage.length; i++) {
                let name = localStorage.key(i);
                let localToObj = localStorage.getItem(name);
                let obj = JSON.parse(localToObj);
                obj.forEach((el) => {
                    innerOrder.push(el);
                });
            }
        }
        innerOrder.push(order);

        localStorage.setItem(`${order.time}`, JSON.stringify(innerOrder));

        return (sectionThree.innerHTML = `<h2 class = "ftitle">Дякуємо за замовлення</h2>
                                            <p>ПІБ - ${form.fname.value}</p>               
                                            <p>Назва - ${getData.name}</p>
                                            <p>Місто - ${form.fcity.value}</p>
                                            <p>Оплата - ${form.fradio.value}</p> 
                                            <p>Відділеняя № - ${form.fnumber.value}</p>
                                            <p>Кількість - ${form.frange.value} шт</p>
                                            <p>Ціна - ${getData.price * Number(form.frange.value)} грн</p>
                                            <p>Коментар - ${form.ftext.value}</p> `);
    }
    // дані в DOM input range
    function range() {
        let labelForRange = document.querySelector(".rangePoint");
        labelForRange.innerHTML = `Кількість  ${form.frange.value} шт (max ${getData.count})`;
    }
    form.frange.addEventListener("input", range);
}
// передаєм дані з обєкта в форму

function addData(data) {
    getData = data;
}
export { toBuy, addData, sectionThree, order };
