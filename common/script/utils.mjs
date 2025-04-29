export function initPrintOut(element) {
    element.innerHTML = ""; // Clear the output area
}

export function printOut(message) {
    const outputArea = document.getElementById("txtOut");
    outputArea.innerHTML += message; // Append the message to the output area
}

export function newLine() {
    return "<br>"; // Return a line break for HTML
}
