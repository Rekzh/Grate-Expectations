let lastTime = null;
let totalTime = 0;

// Game loop
setInterval(function loop() {
  const currentTime = performance.now();
  if (lastTime == null) {
    lastTime = currentTime;
  }
  const deltaTime = currentTime - lastTime;
  totalTime += deltaTime;
  lastTime = currentTime;

  update(deltaTime);
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

// Button listeners
document.getElementById("hunt").addEventListener("click", function () {
  disableResources()
  toggleFood = true;
});

document.getElementById("gather").addEventListener("click", function () {
  disableResources()
  toggleStone = true;
});

document.getElementById("think").addEventListener("click", function () {
  disableResources()
  toggleScience = true;
});

function disableResources() {
  toggleFood = false;
  toggleStone = false;
  toggleScience = false;
}

// Main function to handle updates and rendering
function update(deltaTime) {
  if (toggleFood) food += foodPerMs * deltaTime;
  if (toggleStone) stone += stonePerMs * deltaTime;
  if (toggleScience) science += sciencePerMs * deltaTime;

  foodDisplay.textContent = "Food: " + food.toFixed(2);
  stoneDisplay.textContent = "Stone: " + stone.toFixed(2);
  scienceDisplay.textContent = "Science: " + science.toFixed(2);
}
