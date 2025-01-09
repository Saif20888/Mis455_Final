const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const resultsContainer = document.getElementById("results-container");
const showAllButton = document.getElementById("show-all");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (!query) return;

  // Clear previous results
  resultsContainer.innerHTML = "";
  showAllButton.style.display = "none";

  // Fetch data from API
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        displayMeals(data.meals);
      } else {
        resultsContainer.innerHTML = "<p>No meals found!</p>";
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function displayMeals(meals) {
  const initialMeals = meals.slice(0, 5);

  // Display the first 5 meals
  initialMeals.forEach((meal) => {
    const mealCard = createMealCard(meal);
    resultsContainer.appendChild(mealCard);
  });

  // Handle "SHOW ALL" button
  if (meals.length > 5) {
    showAllButton.style.display = "block";
    showAllButton.onclick = () => {
      resultsContainer.innerHTML = "";
      meals.forEach((meal) => {
        const mealCard = createMealCard(meal);
        resultsContainer.appendChild(mealCard);
      });
      showAllButton.style.display = "none";
    };
  }
}

function createMealCard(meal) {
  const card = document.createElement("div");
  card.className = "result-card";
  card.innerHTML = `
    <h3>${meal.strMeal}</h3>
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <p><strong>ID:</strong> ${meal.idMeal}</p>
    <p>${meal.strInstructions.slice(0, 100)}...</p>
  `;
  return card;
}
