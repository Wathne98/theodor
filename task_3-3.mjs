"use strict";
import { initPrintOut, printOut, newLine } from "./common/script/utils.mjs";

// Initialize the output area
initPrintOut(document.getElementById("txtOut"));

// Part 1: Print today's date in Norwegian format
printOut("--- Part 1 ---" + newLine());
function printTodaysDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('no-NB', options);
    printOut("Dagens dato: " + formattedDate + newLine());
}
printTodaysDate();

// Part 2: Enhanced date function and countdown to 2XKO release
printOut("--- Part 2 ---" + newLine());
function getTodaysDate() {
    const today = new Date();
    return today; // Return today's date as a Date object
}

function countdownToRelease() {
    const releaseDate = new Date('2025-05-14');
    const today = getTodaysDate();
    const timeDiff = releaseDate - today; // Difference in milliseconds
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

    printOut("Countdown to 2XKO release: " + daysLeft + " dager igjen!" + newLine());
}
countdownToRelease();

// Part 3: Calculate diameter, circumference, and area of a circle
printOut("--- Part 3 ---" + newLine());
function circleCalculations(radius) {
    const diameter = radius * 2;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * Math.pow(radius, 2);
    
    printOut("Sirkeldiameter: " + diameter.toFixed(2) + newLine());
    printOut("Sirkels omkrets: " + circumference.toFixed(2) + newLine());
    printOut("Sirkels areal: " + area.toFixed(2) + newLine());
}
circleCalculations(10);

// Part 4: Calculate circumference and area of a rectangle
printOut("--- Part 4 ---" + newLine());
function rectangleCalculations(dimensions) {
    const width = dimensions.width;
    const height = dimensions.height;
    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Rektangels omkrets: " + circumference + newLine());
    printOut("Rektangels areal: " + area + newLine());
}
rectangleCalculations({ width: 5, height: 10 });

// Part 5: Temperature conversion function
printOut("--- Part 5 ---" + newLine());
function temperatureConversion(temp, type) {
    let celsius, fahrenheit, kelvin;
    
    if (type.toLowerCase() === 'c') {
        celsius = temp;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (type.toLowerCase() === 'f') {
        fahrenheit = temp;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (type.toLowerCase() === 'k') {
        kelvin = temp;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    } else {
        printOut("Ukjent temperaturtype!" + newLine());
        return;
    }

    printOut(`Celsius: ${Math.round(celsius)}, Fahrenheit: ${Math.round(fahrenheit)}, Kelvin: ${Math.round(kelvin)}` + newLine());
}
temperatureConversion(100, 'C');

// Part 6: Calculate price without VAT
printOut("--- Part 6 ---" + newLine());
function calculateNetPrice(gross, vatGroup) {
    let vat;
    switch (vatGroup.toLowerCase()) {
        case 'normal':
            vat = 25;
            break;
        case 'food':
            vat = 15;
            break;
        case 'hotel':
        case 'transport':
        case 'cinema':
            vat = 10;
            break;
        default:
            printOut("Unknown VAT group!" + newLine());
            return NaN;
    }
    const netPrice = (100 * gross) / (vat + 100);
    printOut(`Net price for ${gross} including VAT (${vatGroup}): ${netPrice.toFixed(2)}` + newLine());
    return netPrice;
}

// Call the function with various VAT groups
calculateNetPrice(125, 'normal');
calculateNetPrice(115, 'food');
calculateNetPrice(110, 'hotel');
calculateNetPrice(100, 'goblins'); // Unknown VAT group

// Part 7: Calculate speed, distance, or time
printOut("--- Part 7 ---" + newLine());
function calculateSpeedDistanceTime(speed, distance, time) {
    if (speed === undefined && distance !== undefined && time !== undefined) {
        return distance / time; // Calculate speed
    } else if (distance === undefined && speed !== undefined && time !== undefined) {
        return speed * time; // Calculate distance
    } else if (time === undefined && speed !== undefined && distance !== undefined) {
        return distance / speed; // Calculate time
    } else {
        return NaN; // More than one parameter is missing
    }
}

// Test the function
printOut(`Calculated Speed: ${calculateSpeedDistanceTime(undefined, 100, 2)} (Speed)` + newLine());
printOut(`Calculated Distance: ${calculateSpeedDistanceTime(50, undefined, 2)} (Distance)` + newLine());
printOut(`Calculated Time: ${calculateSpeedDistanceTime(50, 100, undefined)} (Time)` + newLine());
printOut(`Invalid Call Result: ${calculateSpeedDistanceTime(undefined, undefined, 2)}` + newLine());

// Part 8: String manipulation
printOut("--- Part 8 ---" + newLine());
function manipulateString(text, maxSize, char, insertBefore) {
    while (text.length < maxSize) {
        if (insertBefore) {
            text = char + text; // Insert character before
        } else {
            text = text + char; // Insert character after
        }
    }
    return text;
}

// Test the string manipulation
const newText = manipulateString("Hello", 10, "*", true);
printOut("Manipulated String: " + newText + newLine());

// Part 9: Validate mathematical expressions
printOut("--- Part 9 ---" + newLine());
function validateMathematicalExpressions() {
    for (let i = 1; i <= 200; i++) {
        let leftSide = 0;
        let rightSide = 0;

        // Example: Generate left side and right side of the equation
        for (let j = (i - 1) * 5 + 1; j <= i * 5; j++) {
            leftSide += j;
        }
        for (let j = (i * 5) + 1; j <= (i * 5) + 5; j++) {
            rightSide += j;
        }

        // Check if they are equal
        if (leftSide !== rightSide) {
            printOut(`Mismatch at line ${i}: ${leftSide} != ${rightSide}` + newLine());
            return; // Stop the loop if a mismatch is found
        }
    }
    printOut("Maths fun!" + newLine());
}
validateMathematicalExpressions();

// Part 10: Calculate factorial using recursion
printOut("--- Part 10 ---" + newLine());
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! = 1 and 1! = 1
    } else {
        return n * factorial(n - 1); // Recursive call
    }
}

// Test the factorial function
const number = 5; // Change this number for different factorials
const result = factorial(number);
printOut(`Factorial of ${number} is: ${result}` + newLine());
