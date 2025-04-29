"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
document.getElementById("cmbTask1Calculate").addEventListener("click", () => {
  const width = parseFloat(document.getElementById("txtRectWidth").value);
  const height = parseFloat(document.getElementById("txtRectHeight").value);
  const circumference = 2 * (width + height);
  const area = width * height;
  document.getElementById("txtTask1Output").innerText = `Circumference = ${circumference}, Area = ${area}`;
});

//--- Part 2 ----------------------------------------------------------------------------------------------
const task2Words = [];
document.getElementById("txtTask2Word").addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const word = event.target.value.trim();
    if (word) {
      task2Words.push(word);
      document.getElementById("txtTask2Output").innerText = `Number of words = ${task2Words.length}, Words: ${task2Words.join(", ")}`;
      event.target.value = ""; // Clear the input field
    }
  }
});

//--- Part 3 ----------------------------------------------------------------------------------------------
document.getElementById("cmbTask3CheckAnswer").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");
  const selected = Array.from(checkboxes).map(checkbox => checkbox.nextSibling.textContent.trim());
  document.getElementById("txtTask3Output").innerText = selected.length ? `Selected: ${selected.join(", ")}` : "No checkboxes selected";
});

//--- Part 4 ----------------------------------------------------------------------------------------------
const divTask4Cars = document.getElementById("divTask4Cars");
CarTypes.forEach(car => {
  const radio = document.createElement("input");
  radio.type = "radio";
  radio.name = "car";
  radio.value = car.caption;

  const label = document.createElement("label");
  label.appendChild(radio);
  label.appendChild(document.createTextNode(car.caption));

  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
});

divTask4Cars.addEventListener("change", (event) => {
  if (event.target.name === "car") {
    document.getElementById("txtTask4Output").innerText = `You selected: ${event.target.value}`;
  }
});

//--- Part 5 ----------------------------------------------------------------------------------------------
document.getElementById("selectTask5Animals").addEventListener("change", (event) => {
  const selectedAnimal = event.target.options[event.target.selectedIndex].text;
  document.getElementById("txtTask5Output").innerText = `You selected: ${selectedAnimal}`;
});

//--- Part 6 ----------------------------------------------------------------------------------------------
const selectTask6Girls = document.getElementById("selectTask6Girls");
GirlsNames.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  selectTask6Girls.appendChild(option);
});

selectTask6Girls.addEventListener("change", (event) => {
  const selectedName = event.target.options[event.target.selectedIndex].text;
  document.getElementById("txtTask6Output").innerText = `You selected: ${selectedName}`;
});

//--- Part 7 ----------------------------------------------------------------------------------------------
const tblMovies = document.getElementById("tblMovies");
const selectMovieGenre = document.getElementById("selectMovieGenre");
MovieGenre.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  selectMovieGenre.appendChild(option);
});

document.getElementById("cmbAddMovie").addEventListener("click", () => {
  const title = document.getElementById("txtMovieTitle").value.trim();
  const genre = selectMovieGenre.value;
  const director = document.getElementById("txtMovieDirector").value.trim();
  const rate = parseFloat(document.getElementById("txtMovieRate").value);

  if (title && genre && director && rate >= 1 && rate <= 10) {
    const row = tblMovies.insertRow(-1);
    const cellNr = row.insertCell(0);
    const cellTitle = row.insertCell(1);
    const cellGenre = row.insertCell(2);
    const cellDirector = row.insertCell(3);
    const cellRate = row.insertCell(4);

    cellNr.textContent = tblMovies.rows.length - 1; // Adjust for header row
    cellTitle.textContent = title;
    cellGenre.textContent = genre;
    cellDirector.textContent = director;
    cellRate.textContent = rate;
  } else {
    alert("Please fill all fields correctly!");
  }
});
