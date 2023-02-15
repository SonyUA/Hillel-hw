let brthday = prompt("Ваш рік народження ?");
const city = prompt("В якому місті живете ?");
const sport = prompt("Ваш улюблений ввид спорту ?");

let resultBrthday, resultCity, resultSport, isNumber, isNumberSport, isNumberbrthday;

// BIRTHDAY

isNumberbrthday = Number(brthday);
if (brthday === "") {
    resultBrthday = "Нажаль ви нажали ок та не вказали ваш вік";
} else if (brthday === null) {
    resultBrthday = "Шкода що Ви не захотіли вказати свій вік";
} else if (isNaN(isNumberbrthday)) {
    resultBrthday = `Введіть ваш вік коректно (${brthday}) ?`;
} else if (typeof isNumberbrthday === typeof 1) {
    resultBrthday = `Вам ${2023 - +brthday} років`;
}

// CITY

isNumber = Number(city);
if (isNaN(isNumber) || isNumber === 0) {
    if (city === "") {
        resultCity = "Нажаль ви нажали ок та не вказали місто";
    } else if (city === null) {
        resultCity = "Шкода що Ви не захотіли вказати своє місто";
    } else if (city.toLowerCase() === "київ") {
        resultCity = `Ви проживаєте у столиці України (${city})`;
    } else if (city.toLowerCase() === "лондон") {
        resultCity = `Ви проживаєте у столиці Великобританії (${city})`;
    } else if (city.toLowerCase() === "вашингтон") {
        resultCity = `Ви проживаєте у столиці США (${city})`;
    } else if (city !== "" && city !== null) {
        resultCity = `Ви проживаєте у місті ${city}`;
    }
} else {
    resultCity = `Введіть ваше місто коректно (${city}) ?`;
}

// SPORT

isNumberSport = Number(sport);
if (isNaN(isNumberSport) || isNumberSport === 0) {
    if (sport === "") {
        resultSport = "Нажаль ви нажали ок та не вказали вид спорту";
    } else if (sport === null) {
        resultSport = "Шкода що Ви не захотіли вказати свій вид спорту";
    } else if (sport.toLowerCase() === "футбол") {
        resultSport = `Круто  ${sport} ! Хочеш стати як Криштіано Роналдо ?`;
    } else if (sport.toLowerCase() === "баскетбол") {
        resultSport = `Круто  ${sport} ! Хочеш стати як Кобі Браянт ?`;
    } else if (sport.toLowerCase() === "теніс") {
        resultSport = `Круто  ${sport} ! Хочеш стати як Сестри Вілямс ?`;
    } else if (sport !== "" && sport !== null) {
        resultSport = `Ваш улюблений вид спорту ${sport}`;
    }
} else {
    resultSport = `Введіть вид спорту коректно (${sport}) ?`;
}

alert(`   ${resultBrthday}
    ${resultCity}
    ${resultSport}`);

console.log(resultBrthday);
console.log(resultCity);
console.log(resultSport);
