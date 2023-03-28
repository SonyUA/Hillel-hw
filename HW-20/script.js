// Додаєм людей
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

//Prototype
Person.prototype.addPeople = function () {
    return {
        name: this.name,
        gender: this.gender,
    };
};

// розміщаєм людей по квартирах
function Apartment() {
    this.arrPeoples = [];
}

//Prototype
Apartment.prototype.addPeopleInApartment = function (people) {
    if (typeof people === "object") {
        this.arrPeoples.push(people);
    } else {
        console.log("щось пішло нетак!!!");
    }
};
// розміщаєм квартири з людьми у бодинок
function House(max) {
    this.arrApartment = [];
    this.maxValueofAparments = max;
}

//Prototype
House.prototype.addApartmentInHouse = function (peopleLive) {
    if (this.maxValueofAparments > this.arrApartment.length) {
        this.arrApartment.push(peopleLive);
    } else {
        console.log("Завелика кількість людей або нехватає квартир");
    }
};

// Люди
let Andriy = new Person("Andriy", "male");
let Lena = new Person("Lena", "female");
let Kolya = new Person("Kolya", "male");
let Tolik = new Person("Tolik", "male");
let Sveta = new Person("Sveta", "female");
let Anna = new Person("Anna", "female");

//Нова квартира №1
let apartmentOne = new Apartment();
//Люди квартира №1
apartmentOne.addPeopleInApartment(Andriy);
apartmentOne.addPeopleInApartment(Lena);
apartmentOne.addPeopleInApartment(Kolya);

//Нова квартира №2
let apartmentTwo = new Apartment();
//Люди квартира №2
apartmentTwo.addPeopleInApartment(Tolik);

//Нова квартира №3
let apartmentThree = new Apartment();
//Люди квартира №2
apartmentThree.addPeopleInApartment(Sveta);
apartmentThree.addPeopleInApartment(Anna);

//Новий будинок та кількість квартир
let newHouseOne = new House(10);

//Додаєм квартири у бодинок
newHouseOne.addApartmentInHouse(apartmentOne.arrPeoples);
newHouseOne.addApartmentInHouse(apartmentTwo.arrPeoples);
newHouseOne.addApartmentInHouse(apartmentThree.arrPeoples);

console.log(newHouseOne.arrApartment);
