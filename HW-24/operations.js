export function operations(numOne, operator, numTwo) {
    switch (operator) {
        case "+":
            return Number(numOne) + Number(numTwo);

            break;
        case "-":
            return Number(numOne) - Number(numTwo);

            break;
        case "*":
            return Number(numOne) * Number(numTwo);

            break;
        case "/":
            return Number(numOne) / Number(numTwo);

            break;

        default:
            break;
    }
}
