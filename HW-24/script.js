import { operations } from "./operations.js";
const btnBox = document.querySelector(".btnBox");
const dsplay = document.querySelector(".display");
console.log(dsplay.innerText);
btnBox.addEventListener("click", func);
let numA = "";
let numB = "";
let operation = "";
let equal;
let result = "";
function func(e) {
    if (e.target.className === "clear") {
        equal = false;
        numA = "";
        numB = "";
        operation = "";
        dsplay.innerText = "";
    }
    if (equal === true && result !== "") {
        equal = false;
        numA = result;
        numB = "";
        operation = "";
        dsplay.innerText = numA;
    }
    if (numA !== "" && e.target.className === "point" && operation === "") {
        numA += `.`;
        dsplay.innerText = numA;
    } else if (numA !== "" && operation !== "" && e.target.className === "point" && numB !== "") {
        numB += `.`;
        dsplay.innerText = `${numA} ${operation} ${numB}`;
    }
    if (e.target.className === "number" && numB === "" && operation === "") {
        numA += e.target.innerText;
        dsplay.innerText = numA;
    } else if (e.target.className === "operation" && numA !== "") {
        operation = e.target.innerText;
        dsplay.innerText += ` ${operation} `;
    } else if (e.target.className === "number" && operation !== "") {
        numB += e.target.innerText;
        dsplay.innerText = `${numA} ${operation} ${numB}`;
    }
    if (numA !== "" && operation !== "" && numB !== "" && e.target.className === "equal") {
        equal = true;
        result = `${operations(numA, operation, numB)}`;
        dsplay.innerText = `${numA} ${operation} ${numB} = ${result}`;
    }
}
