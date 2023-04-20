"use strict";

let arr = [1, 2, 3, 4];
let people = ["Petya", "Vasya", "Dima"];
function Boo(el) {
    let elLength = el.length;
    let index = 0;
    return {
        next() {
            if (index < elLength) {
                return { value: el[index++], done: false };
            }
            return { value: undefined, done: true };
        },
    };
}
const iterator = Boo(arr);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);

const iterator2 = Boo(people);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().done);
