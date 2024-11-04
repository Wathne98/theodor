"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
  const today = new Date();
  printOut(today.toLocaleDateString("no-NB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
}
printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDate() {
  const today = new Date();
  printOut(today.toLocaleDateString("no-NB", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  return today;
}

function countdownTo2XKO() {
  const releaseDate = new Date('2025-05-14');
  const today = new Date();
  const timeDiff = releaseDate - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  printOut(`Countdown to 2XKO release: ${daysLeft} days left!`);
}

function displayDateAndCountdown() {
  getTodaysDate();
  countdownTo2XKO();
}
displayDateAndCountdown();
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function circleCalculations(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  printOut(`Diameter: ${diameter}`);
  printOut(newLine);
  printOut(`Circumference: ${circumference.toFixed(2)}`);
  printOut(newLine);
  printOut(`Area: ${area.toFixed(2)}`);
}
circleCalculations(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rectangleCalculations(dimensions) {
  const { width, height } = dimensions;
  const circumference = 2 * (width + height);
  const area = width * height;

  printOut(`Circumference: ${circumference}`);
  printOut(newLine);
  printOut(`Area: ${area}`);
}
rectangleCalculations({ width: 10, height: 5 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(value, type) {
  let celsius, fahrenheit, kelvin;

  if (type.toLowerCase() === 'celsius') {
    celsius = Math.round(value);
    fahrenheit = Math.round((value * 9/5) + 32);
    kelvin = Math.round(value + 273.15);
  } else if (type.toLowerCase() === 'fahrenheit') {
    celsius = Math.round((value - 32) * 5/9);
    fahrenheit = Math.round(value);
    kelvin = Math.round((value - 32) * 5/9 + 273.15);
  } else if (type.toLowerCase() === 'kelvin') {
    celsius = Math.round(value - 273.15);
    fahrenheit = Math.round((value - 273.15) * 9/5 + 32);
    kelvin = Math.round(value);
  } else {
    printOut("Unknown temperature type!");
    return;
  }

  printOut(`Celsius: ${celsius}, Fahrenheit: ${fahrenheit}, Kelvin: ${kelvin}`);
}
convertTemperature(100, 'celsius');
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateNetPrice(grossAmount, vatGroup) {
  let vatPercentage;

  switch (vatGroup.toLowerCase()) {
    case 'normal':
      vatPercentage = 25;
      break;
    case 'food':
      vatPercentage = 15;
      break;
    case 'hotel':
    case 'transport':
    case 'cinema':
      vatPercentage = 10;
      break;
    default:
      printOut("Unknown VAT group!");
      return NaN;
  }

  const netPrice = (100 * grossAmount) / (100 + vatPercentage);
  printOut(`Net price: ${netPrice.toFixed(2)}`);
  return netPrice;
}
calculateNetPrice(125, 'normal');
printOut(newLine);
calculateNetPrice(100, 'food');
printOut(newLine);
calculateNetPrice(110, 'hotel');
printOut(newLine);
calculateNetPrice(100, 'goblins'); // should print "Unknown VAT group!"
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedDistanceTime(distance, time, speed) {
  if (distance === undefined) return time && speed ? time * speed : NaN;
  if (time === undefined) return distance && speed ? distance / speed : NaN;
  if (speed === undefined) return distance && time ? distance / time : NaN;
  return NaN;
}
printOut(`Speed: ${calculateSpeedDistanceTime(100, 2, undefined)}`); // calculates speed
printOut(newLine);
printOut(`Distance: ${calculateSpeedDistanceTime(undefined, 2, 50)}`); // calculates distance
printOut(newLine);
printOut(`Time: ${calculateSpeedDistanceTime(100, undefined, 50)}`); // calculates time
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function modifyString(text, maxSize, char, insertAtEnd) {
  while (text.length < maxSize) {
    text = insertAtEnd ? text + char : char + text;
  }
  printOut(text);
  return text;
}
modifyString("Hello", 10, "*", true); // adds '*' at the end
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function checkMathExpressions() {
  for (let i = 1, n = 2; i <= 200; i += n) {
    const leftSum = Array.from({ length: n }, (_, k) => i + k).reduce((a, b) => a + b, 0);
    const rightSum = Array.from({ length: n }, (_, k) => i + n + k).reduce((a, b) => a + b, 0);
    if (leftSum !== rightSum) {
      printOut(`Mismatch at line starting with ${i}`);
      return;
    }
    n++;
  }
  printOut("Maths fun!");
}
checkMathExpressions();
printOut(newLine);

printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
printOut(`Factorial of 5: ${factorial(5)}`); // 120
printOut(newLine);
