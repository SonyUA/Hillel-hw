function addTable(number) {
    let innerArr = [];
    let count = number;
    let remainder = number % 10;
    const table = document.createElement("table");
    document.body.prepend(table);
    let caption = document.createElement("caption");
    caption.innerHTML = `${number}`;
    caption.style.fontSize = "30px";
    table.append(caption);
    if (typeof number !== "number") {
        return console.log((table.innerHTML = "Введене не число!!!"));
    }
    // Style
    table.style.border = "1px solid black";
    table.style.margin = "20px auto";
    for (let i = 1; i <= number; i++) {
        innerArr.push(i);
        if (count === remainder && count === innerArr.length) {
            addrow();
        }
        if (i % 10 === 0 && i !== 0) {
            addrow();
        }
    }

    function addrow() {
        count -= 10;
        let tr = document.createElement("tr");
        innerArr.forEach((el) => {
            let td = document.createElement("td");
            td.innerHTML = el;
            table.append(tr);
            tr.append(td);
            // Style
            td.style.fontSize = "20px";
            td.style.border = "1px solid black";
            td.style.textAlign = "center";
        });
        innerArr = [];
    }
}

addTable(123);
