let arr = [1, 2, 3, 4, 5, "a", "b", "c", "d"];
arr.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
});
let res = arr.splice(1, 3);
console.log(`Результат - ${arr.join(" ")}, видалили - ${res.join(" ")}`);
