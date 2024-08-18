let lastTime = null;
let totalTime = 0;
const maxPopulation = 50;
const growthRate = 0.001;

// Game loop
setInterval(function loop() {
  const currentTime = performance.now();
  if (lastTime == null) {
    lastTime = currentTime;
  }
  const deltaTime = currentTime - lastTime;
  totalTime += deltaTime;
  lastTime = currentTime;

  update(deltaTime, totalTime);
  // Runs 60 times in a second
}, 1000 / 60);

// Resource definitions
let food = 0;
let toggleFood = false;
const foodDisplay = document.getElementById("food");
const foodPerMs = 0.001;

let stone = 0;
let toggleStone = false;
const stoneDisplay = document.getElementById("stone");
const stonePerMs = 0.001;

let science = 0;
let toggleScience = false;
const scienceDisplay = document.getElementById("science");
const sciencePerMs = 0.001;

let population = 1;
const populationDisplay = document.getElementById("population");

// Button listeners
document.getElementById("hunt").addEventListener("click", function() {
  food++;
});

document.getElementById("gather").addEventListener("click", function() {
  stone++;
});

document.getElementById("think").addEventListener("click", function() {
  science++;
});

function disableResources() {
  toggleFood = false;
  toggleStone = false;
  toggleScience = false;
}

function updatePopulation(totalTime) {
  time = totalTime / 1000;
  population += growthRate * food * (1 - (population / maxPopulation));
  console.log(population);
}

// Main function to handle updates and rendering
function update(deltaTime, totalTime) {
  updatePopulation(totalTime);

  foodDisplay.textContent = "Food " + food;
  stoneDisplay.textContent = "Stone " + stone;
  scienceDisplay.textContent = "Science " + science;
  populationDisplay.textContent = "Population " + population.toFixed(0);
}
