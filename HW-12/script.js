// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function pow(num, degree) {
    return degree === 1 ? num : num * pow(num, degree - 1);
}
console.log(pow(3, 3));
