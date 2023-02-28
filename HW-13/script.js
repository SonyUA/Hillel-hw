function sumFunction() {
    result = 0;
    return function (n) {
        return (result += n);
    };
}

const sum = sumFunction();

console.log(sum(3)); // 3
console.log(sum(5)); // 8
console.log(sum(20)); // 28
