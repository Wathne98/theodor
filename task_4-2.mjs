"use strict";
import { initPrintOut, printOut } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------<br>");
const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
numbers.forEach(number => printOut(number + "<br>"));
printOut("<br>");

printOut("--- Part 2 ----------------------------------------------------------------------------------------------<br>");
printOut(numbers.join(", ") + "<br>");
printOut("<br>");

printOut("--- Part 3 ----------------------------------------------------------------------------------------------<br>");
const text = "Hei på deg, hvordan har du det?";
const words = text.split(" ");
words.forEach((word, index) => {
    printOut(`Word #${index + 1}: ${word}<br>`);
});
printOut("<br>");

printOut("--- Part 4 ----------------------------------------------------------------------------------------------<br>");
const names = ["Anne", "Inger", "Kari", "Marit"];
function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
        printOut(`${element} was removed.<br>`);
    } else {
        printOut(`${element} not found in the array.<br>`);
    }
}
removeElement(names, "Kari");
removeElement(names, "Tom");
printOut("<br>");

printOut("--- Part 5 ----------------------------------------------------------------------------------------------<br>");
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar"];
const allNames = [...names, ...boyNames];
printOut(allNames.join(", ") + "<br>");
printOut("<br>");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------<br>");
class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    toString() {
        return `${this.title} by ${this.author}, ISBN: ${this.isbn}`;
    }
}
const books = [new TBook("Book A", "Author A", "123-A")];
books.forEach(book => printOut(book.toString() + "<br>"));
printOut("<br>");

printOut("--- Part 7 ----------------------------------------------------------------------------------------------<br>");
const EWeekDays = {
    WeekDay: ["Monday", "Tuesday"],
    Weekends: ["Saturday", "Sunday"]
};
Object.keys(EWeekDays).forEach(key => {
    printOut(`${key}: ${EWeekDays[key].join(", ")}<br>`);
});
printOut("<br>");

printOut("--- Part 8 ----------------------------------------------------------------------------------------------<br>");
const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);
randomNumbers.sort((a, b) => a - b);
printOut("Ascending: " + randomNumbers.join(", ") + "<br>");
randomNumbers.sort((a, b) => b - a);
printOut("Descending: " + randomNumbers.join(", ") + "<br>");
printOut("<br>");

printOut("--- Part 9 ----------------------------------------------------------------------------------------------<br>");
const frequency = randomNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
Object.entries(frequency).forEach(([num, count]) => {
    printOut(`${num} appears ${count} times<br>`);
});
printOut("<br>");

printOut("--- Part 10 ---------------------------------------------------------------------------------------------<br>");
const grid = Array.from({ length: 5 }, (_, row) =>
    Array.from({ length: 5 }, (_, col) => `Row ${row}, Col ${col}`)
);
grid.forEach(row => printOut(row.join(" | ") + "<br>"));
printOut("<br>");
