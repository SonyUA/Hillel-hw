const table = document.createElement("table");
document.body.prepend(table);
let innerArr = [];
// Style
table.style.border = "1px solid black";
table.style.margin = "20px auto";

for (let i = 1; i <= 100; i++) {
    innerArr.push(i);
    if (i % 10 === 0 && i !== 0) {
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
