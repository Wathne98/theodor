"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Part 1 */
let wakeUpTime = 2; // Endre denne verdien til 6, 7 eller 8 for testing
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
}
printOut(newLine);

/* Part 2 */
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

/* Part 3 */
if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");
} else {
  printOut("I have to take the car to school.");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Part 4 */
let number = -5; // Endre verdien for testing
if (number > 0) {
  printOut("Positive");
} else {
  printOut("Negative");
}
printOut(newLine);

/* Part 5 */
if (number > 0) {
  printOut("Positive");
} else if (number < 0) {
  printOut("Negative");
} else {
  printOut("Zero");
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Part 6 */
let imageSize = Math.floor(Math.random() * 8) + 1; // Genererer et tall mellom 1 og 8
printOut("Image size: " + imageSize + "MP");
if (imageSize >= 4) {
  printOut("Thank you");
} else {
  printOut("The image is too small");
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Part 7 */
if (imageSize < 4) {
  printOut("The image is too small");
} else if (imageSize >= 6) {
  printOut("Image is too large");
} else {
  printOut("Thank you");
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Part 8 */
const monthList = ["January", "February", "Mars", "April", "Mai", "Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Month: " + monthName);

if (monthName.toLowerCase().includes("r")) {
  printOut("You must take vitamin D");
} else {
  printOut("You do not need to take vitamin D");
}
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Part 9 */
let daysInMonth;
switch (monthName) {
  case "February":
    daysInMonth = 28;
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    daysInMonth = 30;
    break;
  default:
    daysInMonth = 31;
}
printOut("Days in " + monthName + ": " + daysInMonth);
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Part 10 */
switch (monthName) {
  case "March":
  case "May":
    printOut("The gallery is closed for refurbishment.");
    break;
  case "April":
    printOut("The gallery is open in a temporary location.");
    break;
  default:
    printOut("The gallery is open.");
}
printOut(newLine);
