// Дано масив з елементами різних типів.
//Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const aniArray = [1, "a", 2, "b", 3, "c", "4", "d", 5];
function numericArrayAverage(arr) {
    let result = 0;
    let count = 0;
    arr.forEach((num) => {
        if (typeof +num === "number" && Number(num)) {
            result += +num;
            count++;
        }
    });
    console.log(`Середнє арифметичне лише числових елементів ${result / count}`);
    return result / count;
}

numericArrayAverage(aniArray);

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    let numOne, numTwo, result;

    typeof +x === "number" ? (numOne = x) : (numOne = "Тут має бути Number");
    typeof +y === "number" ? (numTwo = y) : (numTwo = "Тут має бути Number");

    switch (znak) {
        case "+":
            result = numOne + numTwo;
            break;
        case "-":
            result = numOne - numTwo;
            break;
        case "*":
            result = numOne * numTwo;
            break;
        case "/":
            result = numOne / numTwo;
            break;
        case "%":
            result = numOne % numTwo;
            break;
        case "^":
            result = numOne ^ numTwo;
            break;

        default:
            znak = "Тут має бути Znak";
            break;
    }

    console.log(`${numOne} ${znak} ${numTwo} = ${result}`);
    return result;
}

doMath(4, "*", 5);

// Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.

const numArr = [5, 123, 45, 57, 36, 246, "w", 35, 456, "ad", 234, 567];

function getMaxNumber(arr) {
    let onlyNumber = arr.filter((el) => {
        return typeof el === "number";
    });
    console.log(Math.max(...onlyNumber));
    return Math.max(...onlyNumber);
}
getMaxNumber(numArr);

// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
//Вихідний рядок та символи для видалення задає користувач.

function deleteFromTheWord(word, arr) {
    let innerStringArr = word.split("");
    arr.forEach((wordOne) => {
        innerStringArr.forEach(() => {
            let index = innerStringArr.indexOf(wordOne);
            if (index !== -1) {
                delete innerStringArr[index];
            }
        });
    });
    console.log(innerStringArr.join(""));
    return innerStringArr.join("");
}

deleteFromTheWord("Hello World", ["l", "d"]);
